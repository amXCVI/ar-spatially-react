import { MarkerInterface as ArMarkerInterface, MapRefType } from "@ar-kit/lib";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { ApiEndpoints } from "@/shared/api";
import { SearchParamsConstants } from "@/shared/config/constants";

const defaultMapPosition = {
    lat: (
        JSON.parse(localStorage.getItem("localStorageMapOptionsCenterKey") ?? "0") || { lat: 55.753544, lng: 37.621202 }
    ).lat,
    lng: (
        JSON.parse(localStorage.getItem("localStorageMapOptionsCenterKey") ?? "0") || { lat: 55.753544, lng: 37.621202 }
    ).lng,
    radius: JSON.parse(localStorage.getItem("localStorageMapOptionsZoomKey") ?? "10"),
};
const useMapHook = () => {
    const mapComponentRef = useRef<MapRefType>(null);

    const [searchParams, setSearchParams] = useSearchParams();
    const selectedMarkerId = searchParams.get(SearchParamsConstants.markerIdSearchParamsKey);

    const [coords, setCoords] = useState<{
        lat: number;
        lng: number;
        radius: number;
    }>(defaultMapPosition);

    const [nftList, setNftList] = useState<ArMarkerInterface[]>([]);
    const [selectedMarker, setSelectedMarker] = useState<ArMarkerInterface | null>(null);

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
        setSearchParams({ [SearchParamsConstants.markerIdSearchParamsKey]: markerId });
    };

    const onCloseViewer = () => {
        setSelectedMarker(null);
        setSearchParams({});
    };

    const onChangeMapCenter = (e: { lat: number; lng: number; zoom: number }) => {
        mapComponentRef.current?.setMapCenter({ zoom: e.zoom, center: { lat: e.lat, lng: e.lng } });
    };

    useEffect(() => {
        if (selectedMarkerId) {
            const markerItem = nftList.find((item) => item.id === selectedMarkerId);

            if (markerItem) {
                setSelectedMarker(markerItem);
            }
        }

        return () => {
            setSelectedMarker(null);
        };
    }, [nftList, selectedMarkerId]);

    useEffect(() => {
        if (coords) {
            ApiEndpoints.object.fintPointsByLocation({ ...coords }).then((res) => {
                const markers = res.map((item) => {
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
            });
        }
    }, [coords]);

    return {
        onChangeCoords,
        nftList,
        onClickMarker,
        googpeMapApiKey,
        selectedMarker,
        onCloseViewer,
        onChangeMapCenter,
        mapComponentRef,
    };
};

export default useMapHook;
