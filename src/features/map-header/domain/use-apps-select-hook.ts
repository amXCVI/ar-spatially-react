import { useOutsideClick } from "@ar-kit/shared/hooks";
import { useState } from "react";

import { LSConstants } from "@/shared/config/constants";

import arIconSrc from "../assets/ar-spatially.png";
import dgesIconSrc from "../assets/dges.png";
import nftstIconSrc from "../assets/nftst.png";

const selectedApp = (appId: string) => {
    return localStorage.getItem(LSConstants.selectedApp + appId) === "true";
};

const useAppsSelectHook = () => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [apps, setApps] = useState([
        {
            iconSrc: nftstIconSrc,
            label: "NFTStreet",
            id: "NFTStreet",
            isSelected: selectedApp("NFTStreet"),
        },
        {
            iconSrc: arIconSrc,
            label: "AR Spatially",
            id: "ARSpatially",
            isSelected: selectedApp("ARSpatially"),
        },
        {
            iconSrc: dgesIconSrc,
            label: "DGES",
            id: "DGES",
            isSelected: selectedApp("DGES"),
        },
    ]);

    const toggleIsActiveSearchField = () => {
        setIsActive((e) => !e);
    };

    const appsSelectRef = useOutsideClick(() => {
        setIsActive(false);
    });

    const handleClickApp = (appId: string) => {
        const isSelectedApp = selectedApp(appId);

        if (isSelectedApp) {
            localStorage.setItem(LSConstants.selectedApp + appId, "false");
        } else {
            localStorage.setItem(LSConstants.selectedApp + appId, "true");
        }

        setApps((e) => e.map((item) => (item.id === appId ? { ...item, isSelected: !item.isSelected } : item)));
    };

    return { appsSelectRef, isActive, toggleIsActiveSearchField, handleClickApp, apps };
};

export { useAppsSelectHook };
