import { useEffect } from "react";

import { ApiEndpoints } from "@/shared/api";
import { useAppDispatch } from "@/shared/lib/redux-service";

import { useUserContext } from "../user";
import { layersActions } from "./layers-slice";

const useUserLayersHook = () => {
    const dispatch = useAppDispatch();

    const { user } = useUserContext();

    useEffect(() => {
        if (user) {
            ApiEndpoints.layer.findMeLayers().then((res) => {
                dispatch(layersActions.setLayersList({ layersList: res }));
            });
        } else {
            ApiEndpoints.layer.findAllLayers().then((res) => {
                dispatch(layersActions.setLayersList({ layersList: res }));
            });
        }
    }, [dispatch, user]);

    return {};
};

export { useUserLayersHook };
