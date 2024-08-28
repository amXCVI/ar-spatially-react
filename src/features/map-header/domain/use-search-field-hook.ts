import { useOutsideClick } from "@ar-kit/shared/hooks";
import { useState } from "react";
import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import { useSearchParams } from "react-router-dom";

import { ApiEndpoints } from "@/shared/api";
import { SearchParamsConstants } from "@/shared/config/constants";
import { ObjectInterface } from "@/shared/types";

const useSearchFieldHook = ({
    onChangeMapCenter,
}: {
    onChangeMapCenter: (e: { lat: number; lng: number; zoom: number }) => void;
}) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, setSearchParams] = useSearchParams();

    const [isActiveField, setIsActiveField] = useState<boolean>(false);
    const [searchInputValue, setSearchInputValue] = useState<string>("");
    const [selectedPlaceDescription, setSelectedPlaceDescription] = useState<string>("");
    const [findedObjects, setFindedObjects] = useState<ObjectInterface[]>([]);

    const { placePredictions, getPlacePredictions } = usePlacesService({
        apiKey: import.meta.env.VITE_APP_GOOGLE_MAP_API_KEY,
        debounce: 300,
    });

    const toggleIsActiveSearchField = (value?: boolean) => {
        if (value !== undefined) {
            setIsActiveField(value);
            return;
        }

        setIsActiveField((e) => !e);
    };

    const onChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        getPlacePredictions({ input: e.target.value });
        setSearchInputValue(e.target.value);

        if (e.target.value) {
            ApiEndpoints.object
                .findTextLayer({
                    searchText: e.target.value,
                    // ! Придумать, как подставлять правильный id слоя
                    layerId: "e922cff0-3f23-483c-addc-d0fec11f7c08",
                    pageNum: 1,
                    pageSize: 10,
                })
                .then((res) => {
                    setFindedObjects(res.objects);
                });
        } else {
            setFindedObjects([]);
        }
    };

    const onSelectPlacePredicion = (placePrediction: google.maps.places.AutocompletePrediction | ObjectInterface) => {
        try {
            // Если объект - из наших приложений - открываем его
            const object = placePrediction as ObjectInterface;

            // setSearchParams({
            //     [SearchParamsConstants.markerIdSearchParamsKey]: object.id,
            // });

            onChangeMapCenter({ lat: object.location.lat, lng: object.location.lng, zoom: 15 });
        } catch (error) {
            // Если объект - из поиска по карте - открываем эту локацию
            const object = placePrediction as google.maps.places.AutocompletePrediction;

            setSearchParams({
                [SearchParamsConstants.markerIdSearchParamsKey]: object.place_id,
            });

            const geocoder = new google.maps.Geocoder();
            geocoder.geocode({ placeId: object.place_id }).then((res) => {
                console.log(res);
            });
        }

        setSearchInputValue("");
        getPlacePredictions({ input: "" });
        setFindedObjects([]);
        setSelectedPlaceDescription(placePrediction.description);
    };

    const searchFieldRef = useOutsideClick(() => {
        if (isActiveField) {
            setSelectedPlaceDescription("");
        }
        toggleIsActiveSearchField(false);
    });

    return {
        isActiveField,
        toggleIsActiveSearchField,
        placePredictions,
        searchInputValue,
        onChangeInputValue,
        onSelectPlacePredicion,
        selectedPlaceDescription,
        searchFieldRef,
        findedObjects,
    };
};

export { useSearchFieldHook };
