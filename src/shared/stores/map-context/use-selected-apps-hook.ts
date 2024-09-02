import { useState } from "react";

import { LSConstants } from "@/shared/config/constants";

import ArIconSrc from "./assets/ar-spatially.svg?react";
import DgesIconSrc from "./assets/dges.svg?react";
import NftstIconSrc from "./assets/nftst.svg?react";

import { AppLayerInterface } from "./types";

const selectedApp = (appId: string) => {
    return localStorage.getItem(LSConstants.selectedApp + appId) === "true";
};

const useSelectedAppsHook = () => {
    const [apps, setApps] = useState<AppLayerInterface[]>([
        {
            iconSrc: NftstIconSrc,
            label: "NFTStreet",
            id: "NFTStreet",
            isSelected: selectedApp("NFTStreet"),
        },
        {
            iconSrc: ArIconSrc,
            label: "AR Spatially",
            id: "ARSpatially",
            isSelected: selectedApp("ARSpatially"),
        },
        {
            iconSrc: DgesIconSrc,
            label: "DGES",
            id: "DGES",
            isSelected: selectedApp("DGES"),
        },
    ]);

    const handleClickApp = (appId: string) => {
        const isSelectedApp = selectedApp(appId);

        if (isSelectedApp) {
            localStorage.setItem(LSConstants.selectedApp + appId, "false");
        } else {
            localStorage.setItem(LSConstants.selectedApp + appId, "true");
        }

        setApps((e) => e.map((item) => (item.id === appId ? { ...item, isSelected: !item.isSelected } : item)));
    };

    return { apps, handleClickApp };
};

export { useSelectedAppsHook };
