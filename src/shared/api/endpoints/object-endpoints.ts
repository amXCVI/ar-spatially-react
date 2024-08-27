import { AxiosResponse } from "axios";

import { ApiResponseInterface, ObjectInterface } from "@/shared/types";

import apiClient from "../api";

const findTextLayer = async ({ layerId, searchText }: { layerId: string; searchText: string }) => {
    const url = `/gateway/object/find/text-layer`;

    try {
        const response: AxiosResponse<ApiResponseInterface<{ objectsList: ObjectInterface[] }>> = await apiClient.post(
            url,
            {
                layerId,
                searchText,
            },
        );

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

export const objectApi = { findTextLayer };
