import apiClient from "@/shared/api";
import { MarkerInterface } from "@/shared/types";
import { useEffect, useState } from "react";

import { ChangeEventValue } from "./../../../../ar-components/ar-components-kit/dist";

const useMapHook = () => {
    const [coords, setCoords] = useState<{
        lat: number;
        lng: number;
        radius: number;
    }>();
    const [bounds, setBounds] = useState<
        [number, number, number, number] | [number, number, number, number, number, number] | undefined
    >(undefined);
    const [nftList, setNftList] = useState<MarkerInterface[]>([]);

    const onChangeCoords = (e: ChangeEventValue) => {
        setCoords({ lat: e.center.lat, lng: e.center.lng, radius: e.zoom });
        setBounds([e.bounds.nw.lng, e.bounds.se.lat, e.bounds.se.lng, e.bounds.nw.lat]);
    };

    const onClickMarker = (markerId: string) => {
        console.log("###", markerId);
    };

    useEffect(() => {
        apiClient
            .post("/gateway/object/find/location", {
                lat: coords?.lat,
                lng: coords?.lng,
                radius: coords?.radius,
            })
            .then((res) => {
                const markers = res.data.data.objectsList;

                setNftList(markers);
            });
    }, [coords?.lat, coords?.lng, coords?.radius]);

    return { onChangeCoords, bounds, nftList, onClickMarker };
};

export default useMapHook;
