import { AxiosResponse } from "axios";

import { ApiResponseInterface } from "@/shared/types";

import apiClient from "../api";

const getFile = async ({ fileId }: { fileId: string }) => {
    const url = `/gateway/file/get?fileId=${fileId}`;

    try {
        const response: AxiosResponse = await apiClient.get(url);

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

const uploadFile = async ({ file }: { file: File }) => {
    const url = `/gateway/file/upload`;

    const formData = new FormData();
    formData.append("file", file);

    try {
        const response: AxiosResponse<ApiResponseInterface<{ fileId: string }>> = await apiClient.post(url, formData);

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

export const filesApi = { getFile, uploadFile };
