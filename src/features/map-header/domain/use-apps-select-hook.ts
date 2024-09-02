import { useOutsideClick } from "@ar-kit/shared/hooks";
import { useContext, useState } from "react";

import { MapContext } from "@/shared/stores";

const useAppsSelectHook = () => {
    const [isActive, setIsActive] = useState<boolean>(false);

    const { apps, handleClickApp } = useContext(MapContext);

    const toggleIsActiveSearchField = () => {
        setIsActive((e) => !e);
    };

    const appsSelectRef = useOutsideClick(() => {
        setIsActive(false);
    });

    return { appsSelectRef, isActive, toggleIsActiveSearchField, handleClickApp, apps };
};

export { useAppsSelectHook };
