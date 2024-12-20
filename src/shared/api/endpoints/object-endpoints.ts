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
    const url = `/gateway/object/find/location`;

    try {
        const response: AxiosResponse<
            ApiResponseInterface<{
                objectsList: ObjectInterface[];
            }>
        > = await apiClient.post(url, {
            lat: lat,
            lng: lng,
            // Здесь инвертирую радиус (значение подобрал эмпирически)
            radius: radius,
        });

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

const fintPointsByUserLocationLayer = async ({ lat, lng, radius }: { lat: number; lng: number; radius: number }) => {
    return await apiClient
        .post("/gateway/object/find/user-location-layer", {
            lat: lat,
            lng: lng,
            // Здесь инвертирую радиус (значение подобрал эмпирически)
            radius: radius,
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

const findMeLocation = async ({ lat, lng, radius }: { lat: number; lng: number; radius: number }) => {
    const url = `/gateway/object/find/me-location`;

    try {
        const response: AxiosResponse<
            ApiResponseInterface<{
                objectsList: ObjectInterface[];
            }>
        > = await apiClient.post(url, {
            lat: lat,
            lng: lng,
            // Здесь инвертирую радиус (значение подобрал эмпирически)
            radius: radius,
        });

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

const findFavorites = async ({
    pageNum,
    pageSize,
    searchText,
}: {
    pageNum: number;
    pageSize: number;
    searchText?: string;
}) => {
    const url = `/gateway/object/find/favorites`;

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
};

const findByUser = async ({
    pageNum,
    pageSize,
    searchText,
    userId,
}: {
    pageNum: number;
    pageSize: number;
    searchText?: string;
    userId: string;
}) => {
    const url = `/gateway/object/find/user`;

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
        userId,
    });

    return response.data.data;
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
            radius: radius,
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
        const response: AxiosResponse<ApiResponseInterface<ObjectInterface>> = await apiClient.post(url, formData);

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
    layerId,
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
    layerId: string;
    width?: number;
    height?: number;
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
                    layerId: layerId,
                }),
            ],
            {
                type: "application/json",
            },
        ),
    );

    try {
        const response: AxiosResponse<ApiResponseInterface<{ id: string; modelId: string; previewId: string }>> =
            await apiClient.post(url, formData);

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

const likeObject = async ({ objectId }: { objectId: string }) => {
    const url = `/gateway/object/like-unlike`;

    const formData = new FormData();
    formData.append("objectId", objectId);

    try {
        const response: AxiosResponse<ApiResponseInterface<{ likes: number; userLike: boolean }>> =
            await apiClient.post(url, formData);

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

const favoritePutObject = async ({ objectId }: { objectId: string }) => {
    const url = `/gateway/object/favorites/put`;

    const formData = new FormData();
    formData.append("objectId", objectId);

    try {
        const response: AxiosResponse<ApiResponseInterface<string>> = await apiClient.post(url, formData);

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

const favoriteDeleteObject = async ({ objectId }: { objectId: string }) => {
    const url = `/gateway/object/favorites/delete?objectId=${objectId}`;

    try {
        const response: AxiosResponse<ApiResponseInterface<string>> = await apiClient.delete(url);

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

const favoriteAddRemove = async ({ objectId }: { objectId: string }) => {
    const url = `/gateway/object/favorites/add-remove`;

    const formData = new FormData();
    formData.append("objectId", objectId);

    try {
        const response: AxiosResponse<ApiResponseInterface<boolean>> = await apiClient.post(url, formData);

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
    uploadObject,
    getObject,
    findText,
    findMeLocation,
    updateObject,
    likeObject,
    favoritePutObject,
    favoriteDeleteObject,
    favoriteAddRemove,
    findFavorites,
    findByUser,
};
