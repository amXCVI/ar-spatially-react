import { MarkerInterface as ArMarkerInterface, ChangeEventValue } from "@ar-kit/lib";
import { useEffect, useState } from "react";

import { pointsApi } from "../api/queryes";

const useMapHook = () => {
    const [coords, setCoords] = useState<{
        lat: number;
        lng: number;
        radius: number;
    }>();
    const [bounds, setBounds] = useState<
        [number, number, number, number] | [number, number, number, number, number, number] | undefined
    >(undefined);
    const [nftList, setNftList] = useState<ArMarkerInterface[]>([]);

    const googpeMapApiKey = import.meta.env.VITE_APP_GOOGLE_MAP_API_KEY;

    const onChangeCoords = (e: ChangeEventValue) => {
        setCoords({ lat: e.center.lat, lng: e.center.lng, radius: e.zoom });
        setBounds([e.bounds.nw.lng, e.bounds.se.lat, e.bounds.se.lng, e.bounds.nw.lat]);
    };

    const onClickMarker = (markerId: string) => {
        console.log("###", markerId);
    };

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

    return { onChangeCoords, bounds, nftList, onClickMarker, googpeMapApiKey };
};

export default useMapHook;
