import { useEffect, useState } from "react";

import { useDistanceCalculatorHook } from "@/shared/lib/use-distance-calculator-hook";
import { useUserContext } from "@/shared/stores";
import { MarkerInterface } from "@/shared/types";

export enum ViewerModes {
    VIEW_INFO = "VIEW_INFO",
    PREVIEW = "PREVIEW",
    EDIT = "EDIT",
}

const useNftItemHook = ({ selectedMarker }: { selectedMarker: MarkerInterface | null }) => {
    const [previewMode, setPreviewMode] = useState<ViewerModes>(ViewerModes.VIEW_INFO);
    const [fullDescription, setFullDescription] = useState<boolean>(false);
    const [isMyObject, setIsMyObject] = useState<boolean>(false);
    const [distanceStr, setDistanceStr] = useState<string>("");

    const { user } = useUserContext();

    const { haversineDistanceByMyLocation } = useDistanceCalculatorHook();

    useEffect(() => {
        if (user && user.userId === selectedMarker?.ownerId) {
            setIsMyObject(true);
        } else {
            false;
        }
    }, [selectedMarker?.ownerId, user]);

    useEffect(() => {
        if (selectedMarker) {
            haversineDistanceByMyLocation({ lat: selectedMarker.location.lat, lng: selectedMarker.location.lng }).then(
                (res) => {
                    setDistanceStr(res);
                },
            );
        }
    }, [haversineDistanceByMyLocation, selectedMarker]);

    const handlePreview = () => {
        setPreviewMode(ViewerModes.PREVIEW);
    };

    const handleEdit = () => {
        setPreviewMode(ViewerModes.EDIT);
    };

    const handleClosePreview = () => {
        setPreviewMode(ViewerModes.VIEW_INFO);
        setFullDescription(false);
    };

    const toggleFullDescriptionText = () => {
        setFullDescription((e) => !e);
    };

    const share = ({ title, text, url }: { title: string; text: string; url: string }) => {
        if (navigator.share) {
            navigator
                .share({
                    title: title,
                    text: text,
                    url: url,
                })
                .then(() => console.log("Удалось поделиться"))
                .catch((error) => console.log("Не удалось поделиться", error));
        }
    };

    return {
        previewMode,
        handlePreview,
        handleEdit,
        handleClosePreview,
        fullDescription,
        toggleFullDescriptionText,
        isMyObject,
        share,
        distanceStr,
    };
};

export { useNftItemHook };
