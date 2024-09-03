import { ReactNode, createContext } from "react";

import { AppLayerInterface } from "./types";
import { useObjectsTogglerHook } from "./use-objects-toggler-hook";
import { useSelectedAppsHook } from "./use-selected-apps-hook";

type Props = {
    children?: ReactNode;
};

type MapContextInterface = {
    myObjectsOnly: boolean;
    toggleObjectsOwner: () => void;

    apps: AppLayerInterface[];
    handleClickApp: (e: string) => void;
};

const initialValue = {
    myObjectsOnly: false,
    toggleObjectsOwner: () => {},
    apps: [],
    handleClickApp: () => {},
};

const MapContext = createContext<MapContextInterface>(initialValue);

const MapContextProvider = ({ children }: Props) => {
    //Initializing an auth state with false value (unauthenticated)

    // Кнопки вверху карты, My Objects и All Objects
    const { myObjectsOnly, toggleObjectsOwner } = useObjectsTogglerHook();

    // Список слоев на карте, выбранные пользователем слои
    const { apps, handleClickApp } = useSelectedAppsHook();

    return (
        <MapContext.Provider
            value={{
                myObjectsOnly,
                toggleObjectsOwner,
                apps,
                handleClickApp,
            }}
        >
            {children}
        </MapContext.Provider>
    );
};

export { MapContext, MapContextProvider };
