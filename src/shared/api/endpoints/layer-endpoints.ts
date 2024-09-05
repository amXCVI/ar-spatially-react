import { AxiosResponse } from "axios";

import { ApiResponseInterface, LayerInterface } from "@/shared/types";

import apiClient from "../api";

const findAllLayers = async () => {
    const url = `/gateway/layer/find/all`;

    try {
        const response: AxiosResponse<ApiResponseInterface<LayerInterface[]>> = await apiClient.get(url);

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

export const layerApi = { findAllLayers };
