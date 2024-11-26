import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ApiEndpoints } from "@/shared/api";
import { routes } from "@/shared/config";
import { useAppDispatch, useAppSelector } from "@/shared/lib/redux-service";
import { layersActions } from "@/shared/stores";
import { useAuthContext } from "@/shared/stores/auth-provider";
import { LayerInterface, LayerStatus } from "@/shared/types";

import arObjectsIconSrc from "../assets/ar-objects-icon.svg";
import feedIconSrc from "../assets/feed-icon.svg";
import mapIconSrc from "../assets/map-icon.svg";
import profileIconSrc from "../assets/profile-icon.svg";

import { AppInterface } from "../types";

const layersToApps = (layers: LayerInterface[]) => {
    return layers.map((layer) => {
        return {
            id: layer.id,
            title: layer.title,
            iconSrc: layer.iconId
                ? `${import.meta.env.VITE_APP_API_BASE_URL}gateway/file/get?fileId=${layer.iconId}`
                : undefined,
            default: false,
            isActive: layer.status === LayerStatus.ACTIVE,
            openApp: () => {},
        };
    });
};

const useAppsHook = () => {
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const { checkAuth } = useAuthContext();

    const { layersList } = useAppSelector((state) => state.layersSlice);

    const defaultApps: AppInterface[] = useMemo(
        () => [
            {
                id: "1",
                title: "Profile",
                iconSrc: profileIconSrc,
                default: true,
                isActive: true,
                openApp: () => {
                    navigate(`/${routes.lk}`);
                },
            },
            {
                id: "2",
                title: "AR Objects",
                iconSrc: arObjectsIconSrc,
                default: true,
                isActive: true,
                openApp: () => {
                    navigate(`/${routes.objects}`);
                },
            },
            {
                id: "3",
                title: "Map",
                iconSrc: mapIconSrc,
                default: true,
                isActive: true,
                openApp: () => {
                    navigate(`/${routes.map}`);
                },
            },
            {
                id: "4",
                title: "Feed",
                iconSrc: feedIconSrc,
                default: true,
                isActive: true,
                openApp: () => {
                    navigate(`/${routes.feeds}`);
                },
            },
        ],
        [navigate],
    );

    const [apps, setApps] = useState<AppInterface[]>([...defaultApps, ...layersToApps(layersList)]);

    useEffect(() => {
        setApps([...defaultApps, ...layersToApps(layersList)]);
    }, [defaultApps, layersList]);

    const updateLayerStatus = ({ layerId, status }: { layerId: string; status: LayerStatus }) => {
        ApiEndpoints.layer
            .updateLayersStatus({
                layerId: layerId,
                status: status,
            })
            .then(() => {
                dispatch(layersActions.setLayerStatus({ layerId, status }));
            });
    };

    const handleClickApp = (e: AppInterface) => {
        if (layersList.map((item) => item.id).includes(e.id)) {
            checkAuth().then(() => {
                const status = e.isActive ? LayerStatus.NOT_ACTIVE : LayerStatus.ACTIVE;
                updateLayerStatus({ layerId: e.id, status });
            });
        } else {
            e.openApp();
        }
    };

    return { apps, handleClickApp };
};

export { useAppsHook };
