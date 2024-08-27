import { AxiosResponse } from "axios";

import { ApiResponseInterface, LayerInterface } from "@/shared/types";

import apiClient from "../api";

const findLayer = async () => {
    const url = `/gateway/layer/find`;

    try {
        const response: AxiosResponse<ApiResponseInterface<{ layersList: LayerInterface[] }>> =
            await apiClient.get(url);

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

export const layerApi = { findLayer };
