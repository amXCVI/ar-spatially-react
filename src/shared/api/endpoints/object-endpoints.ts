import { AxiosResponse } from "axios";

import { ApiResponseInterface, ObjectInterface } from "@/shared/types";

import apiClient from "../api";

const findTextLayer = async ({
    layerId,
    searchText,
    pageNum,
    pageSize,
}: {
    layerId: string;
    searchText: string;
    pageNum: number;
    pageSize: number;
}) => {
    const url = `/gateway/object/find/text-layer`;

    try {
        const response: AxiosResponse<
            ApiResponseInterface<{
                objects: ObjectInterface[];
                pageNum: number;
                pageSize: number;
                totalPages: number;
            }>
        > = await apiClient.post(url, {
            layerId,
            searchText,
            pageNum,
            pageSize,
        });

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

export const objectApi = { findTextLayer };
