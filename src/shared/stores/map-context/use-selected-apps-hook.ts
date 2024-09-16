import { ApiEndpoints } from "@/shared/api";
import { LayerStatus } from "@/shared/types";

import { useUserLayersHook } from "../user-layers/use-user-layers-hook";

// import { AppLayerInterface } from "./types";

const useSelectedAppsHook = () => {
    const { layersList, setLayersList } = useUserLayersHook();

    // const [apps, setApps] = useState<AppLayerInterface[]>([]);

    // useEffect(() => {
    //     setApps(
    //         layersList.map((item) => {
    //             return {
    //                 iconSrc: item.iconId
    //                     ? `${import.meta.env.VITE_APP_API_BASE_URL}gateway/file/get?fileId=${item.iconId}`
    //                     : undefined,
    //                 layer: item,
    //                 isSelected: item.status ?? LayerStatus.NOT_ACTIVE,
    //             };
    //         }),
    //     );
    // }, [layersList]);

    const handleClickApp = (appId: string) => {
        const layer = layersList.find((item) => item.id === appId);

        if (layer) {
            const status = layer.status === LayerStatus.ACTIVE ? LayerStatus.NOT_ACTIVE : LayerStatus.ACTIVE;
            ApiEndpoints.layer
                .updateLayersStatus({
                    layerId: appId,
                    status: status,
                })
                .then(() => {
                    setLayersList((e) => e.map((item) => (item.id === appId ? { ...item, status: status } : item)));
                });
        }
    };

    return { layersList, handleClickApp };
};

export { useSelectedAppsHook };
