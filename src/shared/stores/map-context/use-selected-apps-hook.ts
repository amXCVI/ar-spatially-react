import { useEffect, useState } from "react";

import { LSConstants } from "@/shared/config/constants";

import { useUserLayersHook } from "../user-layers/use-user-layers-hook";
import { AppLayerInterface } from "./types";

const selectedApp = (appId: string) => {
    return localStorage.getItem(LSConstants.selectedApp + appId) === "true";
};

const useSelectedAppsHook = () => {
    const { layersList } = useUserLayersHook();

    const [apps, setApps] = useState<AppLayerInterface[]>([]);

    useEffect(() => {
        setApps(
            layersList.map((item) => {
                return {
                    iconSrc: item.iconId
                        ? `${import.meta.env.VITE_APP_API_BASE_URL}gateway/file/get?fileId=${item.iconId}`
                        : undefined,
                    layer: item,
                    isSelected: selectedApp(item.id),
                };
            }),
        );
    }, [layersList]);

    const handleClickApp = (appId: string) => {
        const isSelectedApp = selectedApp(appId);

        if (isSelectedApp) {
            localStorage.setItem(LSConstants.selectedApp + appId, "false");
        } else {
            localStorage.setItem(LSConstants.selectedApp + appId, "true");
        }

        setApps((e) => e.map((item) => (item.layer.id === appId ? { ...item, isSelected: !item.isSelected } : item)));
    };

    return { apps, handleClickApp };
};

export { useSelectedAppsHook };
