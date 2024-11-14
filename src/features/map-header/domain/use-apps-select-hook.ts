import { useState } from "react";

import { ApiEndpoints } from "@/shared/api";
import { useAppDispatch, useAppSelector } from "@/shared/lib/redux-service";
import { layersActions } from "@/shared/stores";
import { useAuthContext } from "@/shared/stores/auth-provider";
import { LayerInterface, LayerStatus } from "@/shared/types";

const useAppsSelectHook = () => {
    const dispatch = useAppDispatch();

    const [isActive, setIsActive] = useState<boolean>(false);

    const { checkAuth } = useAuthContext();

    const { layersList } = useAppSelector((state) => state.layersSlice);

    const toggleIsActiveSearchField = (e?: boolean) => {
        if (e !== undefined) {
            setIsActive(e);
        } else {
            setIsActive((e) => !e);
        }
    };

    const handleClickApp = (app: LayerInterface) => {
        checkAuth().then(() => {
            const status = app.status === LayerStatus.ACTIVE ? LayerStatus.NOT_ACTIVE : LayerStatus.ACTIVE;
            ApiEndpoints.layer.updateLayersStatus({ layerId: app.id, status }).then(() => {
                dispatch(layersActions.setLayerStatus({ layerId: app.id, status }));
            });
        });
    };

    return { isActive, toggleIsActiveSearchField, handleClickApp, layersList };
};

export { useAppsSelectHook };
