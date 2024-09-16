import { useContext } from "react";

import { AuthContext, SignInPopupModes } from "@/features/login-modal";

import { ApiEndpoints } from "@/shared/api";
import { LayerStatus } from "@/shared/types";

import { useUserLayersHook } from "../user-layers/use-user-layers-hook";

const useSelectedAppsHook = () => {
    const { layersList, setLayersList, user } = useUserLayersHook();

    const { authenticated, openLoginModal } = useContext(AuthContext);

    const updateLayerStatus = ({ layerId, status }: { layerId: string; status: LayerStatus }) => {
        ApiEndpoints.layer
            .updateLayersStatus({
                layerId: layerId,
                status: status,
            })
            .then(() => {
                setLayersList((e) => e.map((item) => (item.id === layerId ? { ...item, status: status } : item)));
            });
    };

    const handleClickApp = (appId: string) => {
        const layer = layersList.find((item) => item.id === appId);

        if (authenticated && user) {
            if (layer) {
                const status = layer.status === LayerStatus.ACTIVE ? LayerStatus.NOT_ACTIVE : LayerStatus.ACTIVE;
                updateLayerStatus({ layerId: appId, status });
            }
        } else {
            openLoginModal(SignInPopupModes.SignIn, () => {
                updateLayerStatus({ layerId: appId, status: LayerStatus.ACTIVE });
            });
        }
    };

    return { layersList, handleClickApp };
};

export { useSelectedAppsHook };
