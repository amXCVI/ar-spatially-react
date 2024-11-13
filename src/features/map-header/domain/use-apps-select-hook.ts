import { useContext, useState } from "react";

import { MapContext } from "@/shared/stores";

const useAppsSelectHook = () => {
    const [isActive, setIsActive] = useState<boolean>(false);

    const { layersList, handleClickApp } = useContext(MapContext);

    const toggleIsActiveSearchField = (e?: boolean) => {
        if (e !== undefined) {
            setIsActive(e);
        } else {
            setIsActive((e) => !e);
        }
    };

    return { isActive, toggleIsActiveSearchField, handleClickApp, layersList };
};

export { useAppsSelectHook };
