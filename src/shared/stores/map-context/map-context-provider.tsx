import { ReactNode, createContext } from "react";

import { LayerInterface } from "@/shared/types";

import { useObjectsTogglerHook } from "./use-objects-toggler-hook";
import { useSelectedAppsHook } from "./use-selected-apps-hook";

type Props = {
    children?: ReactNode;
};

type MapContextInterface = {
    myObjectsOnly: boolean;
    toggleObjectsOwner: () => void;

    layersList: LayerInterface[];
    handleClickApp: (e: string) => void;
};

const initialValue = {
    myObjectsOnly: false,
    toggleObjectsOwner: () => {},
    layersList: [],
    handleClickApp: () => {},
};

const MapContext = createContext<MapContextInterface>(initialValue);

const MapContextProvider = ({ children }: Props) => {
    //Initializing an auth state with false value (unauthenticated)

    // Кнопки вверху карты, My Objects и All Objects
    const { myObjectsOnly, toggleObjectsOwner } = useObjectsTogglerHook();

    // Список слоев на карте, выбранные пользователем слои
    const { layersList, handleClickApp } = useSelectedAppsHook();

    return (
        <MapContext.Provider
            value={{
                myObjectsOnly,
                toggleObjectsOwner,
                layersList,
                handleClickApp,
            }}
        >
            {children}
        </MapContext.Provider>
    );
};

export { MapContext, MapContextProvider };
