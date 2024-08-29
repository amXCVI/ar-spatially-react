import { AxiosResponse } from "axios";

import { ApiResponseInterface, MarkerInterface, ObjectInterface } from "@/shared/types";

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

const fintPointsByLocation = async ({ lat, lng, radius }: { lat: number; lng: number; radius: number }) => {
    return await apiClient
        .post("/gateway/object/find/location", {
            lat: lat,
            lng: lng,
            // Здесь инвертирую радиус (значение подобрал эмпирически)
            radius: (1 / radius) * 500000,
        })
        .then((res) => {
            const markers: MarkerInterface[] = res.data.data.objectsList;

            return markers;
        })
        .catch((err) => {
            throw err;
        });
};

export const objectApi = { findTextLayer, fintPointsByLocation };
