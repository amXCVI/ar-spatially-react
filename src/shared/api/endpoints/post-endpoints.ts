import { AxiosResponse } from "axios";

import { ApiResponseInterface, PostInterface } from "@/shared/types";

import apiClient from "../api";

const findMePosts = async () => {
    const url = `/gateway/post/find/me`;

    try {
        const response: AxiosResponse<
            ApiResponseInterface<{ posts: []; pageNum: number; pageSize: number; totalPages: number }>
        > = await apiClient.post(url);

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

const findAllPosts = async ({
    searchText,
    pageNum,
    pageSize,
}: {
    searchText?: string;
    pageNum: number;
    pageSize: number;
}) => {
    const url = `/gateway/post/find/all`;

    try {
        const response: AxiosResponse<
            ApiResponseInterface<{ posts: PostInterface[]; pageNum: number; pageSize: number; totalPages: number }>
        > = await apiClient.post(url, { pageNum, pageSize, searchText: searchText ?? "" });

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

export const postApi = { findMePosts, findAllPosts };
