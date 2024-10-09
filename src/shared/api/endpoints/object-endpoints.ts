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

const findText = async ({
    searchText,
    pageNum,
    pageSize,
}: {
    searchText: string;
    pageNum: number;
    pageSize: number;
}) => {
    const url = `/gateway/object/find/text`;

    try {
        const response: AxiosResponse<
            ApiResponseInterface<{
                objects: ObjectInterface[];
                pageNum: number;
                pageSize: number;
                totalPages: number;
            }>
        > = await apiClient.post(url, {
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

const fintPointsByUserLocationLayer = async ({ lat, lng, radius }: { lat: number; lng: number; radius: number }) => {
    return await apiClient
        .post("/gateway/object/find/user-location-layer", {
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

const findPointsLocationLayer = async ({
    lat,
    lng,
    radius,
    layerIds,
}: {
    lat: number;
    lng: number;
    radius: number;
    layerIds: string[];
}) => {
    return await apiClient
        .post("/gateway/object/find/location-layer", {
            lat: lat,
            lng: lng,
            // ! Здесь нужно переделать, пока что берется только первый id из всего списка слоев
            layerId: layerIds.length ? layerIds[0] : "",
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

const findPointsByOwner = async ({ ownerId }: { ownerId: string }) => {
    const formData = new FormData();
    formData.append("ownerId", ownerId);

    return await apiClient
        .post("/gateway/object/find/owner", formData)
        .then((res) => {
            const markers: MarkerInterface[] = res.data.data.objectsList;

            return markers;
        })
        .catch((err) => {
            throw err;
        });
};

const findMe = async () => {
    return await apiClient
        .post("/gateway/object/find/me")
        .then((res) => {
            const markers: MarkerInterface[] = res.data.data.objectsList;

            return markers;
        })
        .catch((err) => {
            throw err;
        });
};

const fintPointsByLocationLayer = async ({
    lat,
    lng,
    radius,
    layerId,
}: {
    lat: number;
    lng: number;
    radius: number;
    layerId: string;
}) => {
    return await apiClient
        .post("/gateway/object/find/location", {
            lat: lat,
            lng: lng,
            layerId: layerId,
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

const getObject = async ({ objectId }: { objectId: string }) => {
    const url = "/gateway/object/get";

    const formData = new FormData();
    formData.append("objectId", objectId);

    try {
        const response: AxiosResponse<
            ApiResponseInterface<{
                arObject: ObjectInterface;
                likes: number;
                userLike: boolean;
            }>
        > = await apiClient.post(url, formData);

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

const updateObject = async ({ title, description, id }: { title: string; description: string; id: string }) => {
    const url = `/gateway/object/update`;

    try {
        const response: AxiosResponse<ApiResponseInterface<{ token: string }>> = await apiClient.post(url, {
            id: id,
            title: title,
            description: description,
        });

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

const uploadObject = async ({
    modelFile,
    previewFile,
    title,
    description,
    width,
    height,
    lat,
    lng,
    alt,
}: {
    modelFile: File;
    previewFile?: File;
    title: string;
    description: string;
    width: number;
    height: number;
    lat: number;
    lng: number;
    alt: number;
}) => {
    const url = `/gateway/object/upload`;

    const formData = new FormData();
    formData.append("modelFile", modelFile);
    formData.append("previewFile", previewFile ?? new Blob());
    formData.append(
        "request",
        new Blob(
            [
                JSON.stringify({
                    title: title,
                    description: description,
                    width: width,
                    height: height,
                    lat: lat,
                    lng: lng,
                    alt: alt,
                }),
            ],
            {
                type: "application/json",
            },
        ),
    );

    try {
        const response: AxiosResponse<ApiResponseInterface<{ token: string }>> = await apiClient.post(url, formData);

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

export const objectApi = {
    findTextLayer,
    fintPointsByLocation,
    fintPointsByLocationLayer,
    fintPointsByUserLocationLayer,
    findPointsByOwner,
    findPointsLocationLayer,
    uploadObject,
    getObject,
    findText,
    findMe,
    updateObject,
};
