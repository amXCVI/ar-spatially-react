import { useContext, useEffect, useState } from "react";

import { ApiEndpoints } from "@/shared/api";
import { LayerInterface } from "@/shared/types";

import { UserContext } from "../user/user-context-provider";

const useUserLayersHook = () => {
    const [layersList, setLayersList] = useState<LayerInterface[]>([]);

    const { user } = useContext(UserContext);

    useEffect(() => {
        if (user) {
            ApiEndpoints.layer.findMeLayers().then((res) => {
                setLayersList(res);
            });
        } else {
            ApiEndpoints.layer.findAllLayers().then((res) => {
                setLayersList(res);
            });
        }
    }, [user]);

    return { layersList, setLayersList, user };
};

export { useUserLayersHook };
