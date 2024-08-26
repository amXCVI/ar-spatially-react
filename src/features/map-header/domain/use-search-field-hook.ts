import { useOutsideClick } from "@ar-kit/shared/hooks";
import { useState } from "react";
import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";

const useSearchFieldHook = () => {
    const [isActiveField, setIsActiveField] = useState<boolean>(false);
    const [searchInputValue, setSearchInputValue] = useState<string>("");
    const [selectedPlaceDescription, setSelectedPlaceDescription] = useState<string>("");

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
    };

    const onSelectPlacePredicion = (placePrediction: google.maps.places.AutocompletePrediction) => {
        setSearchInputValue("");
        getPlacePredictions({ input: "" });
        setSelectedPlaceDescription(placePrediction.description);
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ placeId: placePrediction.place_id }).then((res) => {
            console.log(res);
        });
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
    };
};

export { useSearchFieldHook };
