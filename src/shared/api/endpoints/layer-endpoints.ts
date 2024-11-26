import { AxiosResponse } from "axios";

import { ApiResponseInterface, LayerInterface, LayerStatus } from "@/shared/types";

import apiClient from "../api";

const findAllLayers = async () => {
    const url = `/gateway/layer/find/all`;

    try {
        const response: AxiosResponse<ApiResponseInterface<LayerInterface[]>> = await apiClient.get(url);

        return response.data.data ?? [];
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

const findMeLayers = async () => {
    const url = `/gateway/layer/find/me`;

    try {
        const response: AxiosResponse<ApiResponseInterface<LayerInterface[]>> = await apiClient.get(url);

        return response.data.data ?? [];
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

const updateLayersStatus = async ({ layerId, status }: { layerId: string; status: LayerStatus }) => {
    const url = `/gateway/layer/status`;

    try {
        const response: AxiosResponse<ApiResponseInterface<{ layerId: string; status: LayerStatus }>> =
            await apiClient.post(url, { layerId, status });

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

export const layerApi = { findAllLayers, findMeLayers, updateLayersStatus };
