import { useOutsideClick } from "@ar-kit/shared/hooks";
import { useState } from "react";
import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";

import { ApiEndpoints } from "@/shared/api";
import { ObjectInterface } from "@/shared/types";

const useSearchFieldHook = () => {
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

        ApiEndpoints.object
            .findTextLayer({
                searchText: e.target.value,
                // ! Придумать, как подставлять правильный id слоя
                layerId: "e922cff0-3f23-483c-addc-d0fec11f7c08",
            })
            .then((res) => {
                setFindedObjects(res.objectsList);
            });
    };

    const onSelectPlacePredicion = (placePrediction: google.maps.places.AutocompletePrediction | ObjectInterface) => {
        setSearchInputValue("");
        getPlacePredictions({ input: "" });
        setFindedObjects([]);
        setSelectedPlaceDescription(placePrediction.description);
        // const geocoder = new google.maps.Geocoder();
        // geocoder.geocode({ placeId: placePrediction.place_id }).then((res) => {
        //     console.log(res);
        // });
    };

    const searchFieldRef = useOutsideClick(() => {
        if (isActiveField) {
            setSelectedPlaceDescription("");
        }
        toggleIsActiveSearchField(false);
    });

    console.log(findedObjects);

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
