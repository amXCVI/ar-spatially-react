import { AxiosResponse } from "axios";

import { ApiResponseInterface, ObjectCommentInterface } from "@/shared/types";

import apiClient from "../api";

const findComentsByObject = async ({ objectId }: { objectId: string }) => {
    const url = `/gateway/object/comment/find-object?objectId=${objectId}`;

    try {
        const response: AxiosResponse<ApiResponseInterface<ObjectCommentInterface[]>> = await apiClient.post(url);

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

export const objectCommentApi = { findComentsByObject };
