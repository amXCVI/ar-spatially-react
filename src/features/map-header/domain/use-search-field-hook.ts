import { useMap, useMapsLibrary } from "@vis.gl/react-google-maps";
import { useCallback, useEffect, useState } from "react";
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

    const toggleIsActiveSearchField = (value?: boolean) => {
        if (value !== undefined) {
            setIsActiveField(value);
            return;
        }

        setIsActiveField((e) => !e);
    };

    const resetSearch = () => {
        setSelectedPlaceDescription("");
        setSearchInputValue("");
        setFindedObjects([]);
        setPredictionResults([]);
        setIsActiveField(false);
    };

    const map = useMap();
    const places = useMapsLibrary("places");

    // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompleteSessionToken
    const [sessionToken, setSessionToken] = useState<google.maps.places.AutocompleteSessionToken>();

    // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service
    const [autocompleteService, setAutocompleteService] = useState<google.maps.places.AutocompleteService | null>(null);

    // https://developers.google.com/maps/documentation/javascript/reference/places-service
    const [placesService, setPlacesService] = useState<google.maps.places.PlacesService | null>(null);

    const [predictionResults, setPredictionResults] = useState<Array<google.maps.places.AutocompletePrediction>>([]);

    useEffect(() => {
        if (!places || !map) return;

        setAutocompleteService(new places.AutocompleteService());
        setPlacesService(new places.PlacesService(map));
        setSessionToken(new places.AutocompleteSessionToken());

        return () => setAutocompleteService(null);
    }, [map, places]);

    const fetchPredictions = useCallback(
        async (inputValue: string) => {
            if (!autocompleteService || !inputValue) {
                setPredictionResults([]);
                return;
            }

            const request = { input: inputValue, sessionToken };
            const response = await autocompleteService.getPlacePredictions(request);

            setPredictionResults(response.predictions);
        },
        [autocompleteService, sessionToken],
    );

    const onChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        fetchPredictions(e.target.value);
        setSearchInputValue(e.target.value);

        if (e.target.value) {
            ApiEndpoints.object
                .findText({
                    searchText: e.target.value,
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

    const handleSuggestionClick = useCallback(
        (placeId: string) => {
            console.log("@@@@@@@", placeId);
            const object = findedObjects.find((item) => item.id === placeId);
            // Если объект - из наших приложений - открываем его
            if (object) {
                setSearchParams({
                    [SearchParamsConstants.objectIdSearchParamsKey]: object.id,
                });

                setSelectedPlaceDescription(object.description);

                onChangeMapCenter({ lat: object.location.lat, lng: object.location.lng, zoom: 15 });
            } else {
                if (!places) return;

                const detailRequestOptions = {
                    placeId,
                    fields: ["geometry", "name", "formatted_address"],
                    sessionToken,
                };

                setSearchParams({
                    [SearchParamsConstants.objectIdSearchParamsKey]: detailRequestOptions.placeId,
                });

                const detailsRequestCallback = (placeDetails: google.maps.places.PlaceResult | null) => {
                    setSelectedPlaceDescription(placeDetails?.formatted_address ?? "");
                    setSessionToken(new places.AutocompleteSessionToken());

                    const lat = placeDetails?.geometry?.location?.lat();
                    const lng = placeDetails?.geometry?.location?.lng();

                    if (lat && lng) {
                        onChangeMapCenter({ lat: lat, lng: lng, zoom: 15 });
                    }
                };

                placesService?.getDetails(detailRequestOptions, detailsRequestCallback);
            }

            setSearchInputValue("");
            setFindedObjects([]);
            setPredictionResults([]);
            resetSearch();
        },
        [findedObjects, onChangeMapCenter, places, placesService, sessionToken, setSearchParams],
    );

    return {
        isActiveField,
        toggleIsActiveSearchField,
        predictionResults,
        searchInputValue,
        onChangeInputValue,
        handleSuggestionClick,
        selectedPlaceDescription,
        findedObjects,
        resetSearch,
    };
};

export { useSearchFieldHook };
