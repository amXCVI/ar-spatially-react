import { AxiosResponse } from "axios";

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

export const filesApi = { getFile };
