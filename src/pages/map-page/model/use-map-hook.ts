import { MarkerInterface as ArMarkerInterface, MapRefType } from "@ar-kit/lib";
import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { ApiEndpoints } from "@/shared/api";
import { SearchParamsConstants } from "@/shared/config/constants";
import { MapContext } from "@/shared/stores";
import { MarkerInterface } from "@/shared/types";

const defaultMapPosition = {
    lat: (
        JSON.parse(localStorage.getItem("localStorageMapOptionsCenterKey") ?? "0") || { lat: 25.124342, lng: 55.154669 }
    ).lat,
    lng: (
        JSON.parse(localStorage.getItem("localStorageMapOptionsCenterKey") ?? "0") || { lat: 25.124342, lng: 55.154669 }
    ).lng,
    radius: JSON.parse(localStorage.getItem("localStorageMapOptionsZoomKey") ?? "10"),
};
const useMapHook = () => {
    const mapComponentRef = useRef<MapRefType>(null);

    const [searchParams, setSearchParams] = useSearchParams();
    const selectedMarkerId = searchParams.get(SearchParamsConstants.objectIdSearchParamsKey);

    const { myObjectsOnly } = useContext(MapContext);

    const [coords, setCoords] = useState<{
        lat: number;
        lng: number;
        radius: number;
    }>(defaultMapPosition);

    const [allMarkersOnMap, setAllMarkersOnMap] = useState<MarkerInterface[]>([]);
    const [nftList, setNftList] = useState<ArMarkerInterface[]>([]);
    const [selectedMarker, setSelectedMarker] = useState<MarkerInterface | null>(null);

    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const googpeMapApiKey = import.meta.env.VITE_APP_GOOGLE_MAP_API_KEY;

    const onChangeCoords = (e: { center?: { lat: number; lng: number }; zoom?: number }) => {
        const newCoords = {
            lat: e.center ? e.center.lat : coords!.lat,
            lng: e.center ? e.center.lng : coords!.lng,
            radius: e.zoom ? e.zoom : coords!.radius,
        };

        setCoords(newCoords);
    };

    const onClickMarker = (markerId: string) => {
        setSearchParams({ [SearchParamsConstants.objectIdSearchParamsKey]: markerId });
    };

    const onCloseViewer = () => {
        setSelectedMarker(null);
        setSearchParams({});
    };

    const onChangeMapCenter = (e: { lat: number; lng: number; zoom: number }) => {
        mapComponentRef.current?.setMapCenter({ zoom: e.zoom, center: { lat: e.lat, lng: e.lng } });

        // Очищаем предыдущий таймер
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        // Устанавливаем новый таймер
        timerRef.current = setTimeout(() => {
            ApiEndpoints.object
                .fintPointsByLocation({
                    lat: e.lat,
                    lng: e.lng,
                    radius: e.zoom,
                })
                .then((res) => {
                    setAllMarkersOnMap(res);
                });
        }, 500); // 500 мс, можете настроить по необходимости
    };

    useEffect(() => {
        return () => {
            // Очищаем таймер при размонтировании компонента
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (selectedMarkerId) {
            const markerItem = allMarkersOnMap.find((item) => item.id === selectedMarkerId);

            if (markerItem) {
                setSelectedMarker(markerItem);
            } else {
                ApiEndpoints.object.getObject({ objectId: selectedMarkerId }).then((res) => {
                    setSelectedMarker(res);
                });
            }
        }

        return () => {
            setSelectedMarker(null);
        };
    }, [allMarkersOnMap, selectedMarkerId]);

    useEffect(() => {
        if (myObjectsOnly) {
            ApiEndpoints.object.findMeLocation({ ...coords }).then((res) => {
                setAllMarkersOnMap(res);
            });
        }
    }, [coords, myObjectsOnly]);

    useEffect(() => {
        if (!myObjectsOnly) {
            ApiEndpoints.object
                .fintPointsByLocation({
                    ...coords,
                })
                .then((res) => {
                    setAllMarkersOnMap(res);
                });
        }
    }, [coords, myObjectsOnly]);

    useMemo(() => {
        const markers = allMarkersOnMap.map((item) => {
            return {
                description: item.description,
                imageUrl: `${import.meta.env.VITE_APP_API_BASE_URL}gateway/file/get?fileId=${item.previewId}`,
                previewUrl: `${import.meta.env.VITE_APP_API_BASE_URL}gateway/file/get?fileId=${item.previewId}`,
                lat: item.location.lat,
                lng: item.location.lng,
                name: item.title,
                id: item.id,

                ownerAvatarUrl: undefined,
                isHide: false,
            };
        });

        setNftList(markers);
    }, [allMarkersOnMap]);

    const updatedMarkerCallback = ({ updatedMarker }: { updatedMarker: MarkerInterface }) => {
        // Если объект был изменен - меняю его и на карте и в памяти
        if (selectedMarker?.id === updatedMarker.id) {
            setSelectedMarker(updatedMarker);
        }

        setNftList((e) =>
            e.map((item) =>
                item.id === updatedMarker.id
                    ? { ...item, name: updatedMarker.title, description: updatedMarker.description }
                    : item,
            ),
        );
    };

    return {
        onChangeCoords,
        nftList,
        onClickMarker,
        googpeMapApiKey,
        selectedMarker,
        onCloseViewer,
        onChangeMapCenter,
        mapComponentRef,
        updatedMarkerCallback,
    };
};

export default useMapHook;
