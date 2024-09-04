import { useEffect, useState } from "react";

import { ApiEndpoints } from "@/shared/api";
import { LayerInterface } from "@/shared/types";

const useUserLayersHook = () => {
    const [layersList, setLayersList] = useState<LayerInterface[]>([]);

    useEffect(() => {
        ApiEndpoints.layer.findAllLayers().then((res) => {
            setLayersList(res.layersList);
        });
    }, []);

    return { layersList };
};

export { useUserLayersHook };
