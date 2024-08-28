import { MarkerInterface as ArMarkerInterface, ChangeEventValue, MapRefType } from "@ar-kit/lib";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { SearchParamsConstants } from "@/shared/config/constants";

import { pointsApi } from "../api/queryes";

const useMapHook = () => {
    const mapComponentRef = useRef<MapRefType>(null);

    const [searchParams, setSearchParams] = useSearchParams();
    const selectedMarkerId = searchParams.get(SearchParamsConstants.markerIdSearchParamsKey);

    const [coords, setCoords] = useState<{
        lat: number;
        lng: number;
        radius: number;
    }>();
    const [bounds, setBounds] = useState<
        [number, number, number, number] | [number, number, number, number, number, number] | undefined
    >(undefined);
    const [nftList, setNftList] = useState<ArMarkerInterface[]>([]);
    const [selectedMarker, setSelectedMarker] = useState<ArMarkerInterface | null>(null);

    const googpeMapApiKey = import.meta.env.VITE_APP_GOOGLE_MAP_API_KEY;

    const onChangeCoords = (e: ChangeEventValue) => {
        setCoords({ lat: e.center.lat, lng: e.center.lng, radius: e.zoom });
        setBounds([e.bounds.nw.lng, e.bounds.se.lat, e.bounds.se.lng, e.bounds.nw.lat]);
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
            pointsApi.fintPointsByLocation({ ...coords }).then((res) => {
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
    }, [coords?.lat, coords?.lng, coords?.radius]);

    return {
        onChangeCoords,
        bounds,
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
