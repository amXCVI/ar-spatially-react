import { useContext, useState } from "react";

import { MapContext } from "@/shared/stores";

const useAppsSelectHook = () => {
    const [isActive, setIsActive] = useState<boolean>(false);

    const { layersList, handleClickApp } = useContext(MapContext);

    const toggleIsActiveSearchField = () => {
        setIsActive((e) => !e);
    };

    

    return { isActive, toggleIsActiveSearchField, handleClickApp, layersList };
};

export { useAppsSelectHook };
