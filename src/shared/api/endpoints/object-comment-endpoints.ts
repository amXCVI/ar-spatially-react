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

const createComment = async ({ objectId, commentText }: { objectId: string; commentText: string }) => {
    const url = `/gateway/object/comment/create`;

    try {
        const response: AxiosResponse<ApiResponseInterface<ObjectCommentInterface>> = await apiClient.post(url, {
            objectId,
            commentText,
        });

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

const updateCommentById = async ({ commentId, commentText }: { commentId: number; commentText: string }) => {
    const url = `/gateway/object/comment/update`;

    try {
        const response: AxiosResponse<ApiResponseInterface<ObjectCommentInterface>> = await apiClient.post(url, {
            commentId,
            commentText,
        });

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

const deleteCommentById = async ({ commentId }: { commentId: number }) => {
    const url = `/gateway/object/comment/delete?commentId=${commentId}`;

    try {
        const response: AxiosResponse<ApiResponseInterface<string>> = await apiClient.delete(url);

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

export const objectCommentApi = { findComentsByObject, deleteCommentById, updateCommentById, createComment };
