import { useEffect, useState } from "react";

import { ApiEndpoints } from "@/shared/api";
import { LayerInterface } from "@/shared/types";

const useUserLayersHook = () => {
    const [layersList, setLayersList] = useState<LayerInterface[]>([]);

    useEffect(() => {
        if (layersList.length === 0) {
            ApiEndpoints.layer.findLayer().then((res) => {
                setLayersList(res.layersList);
            });
        }
    }, [layersList.length]);

    return { layersList };
};

export { useUserLayersHook };
