import { AxiosResponse } from "axios";

import {
    ApiResponseInterface,
    PostCommentInterface,
    PostImageInterface,
    PostInterface,
    PostVideoInterface,
} from "@/shared/types";

import apiClient from "../api";

// Показывает мои посты
// Те, которые я создал и репостнул
const findMePosts = async () => {
    const url = `/gateway/post/find/me`;

    try {
        const response: AxiosResponse<ApiResponseInterface<{ postsList: PostInterface[] }>> = await apiClient.post(url);

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

// Показывает все посты ленты
// Мои и те, на которые я подписан
const findAllPosts = async ({
    searchText,
    pageNum,
    pageSize,
}: {
    searchText?: string;
    pageNum: number;
    pageSize: number;
}) => {
    const url = `/gateway/post/find/feed-posts`;

    try {
        const response: AxiosResponse<
            ApiResponseInterface<{ posts: PostInterface[]; pageNum: number; pageSize: number; totalPages: number }>
        > = await apiClient.post(url, { pageNum, pageSize, searchText: searchText ?? "" });

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

// Показывает все посты usera по его id
const findPostsByUser = async ({ userId }: { userId: string }) => {
    const url = `/gateway/post/find/user?userId=${userId}`;

    try {
        const response: AxiosResponse<ApiResponseInterface<{ postsList: PostInterface[] }>> = await apiClient.post(url);

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

// Получает пост по его id
const getPostById = async ({ postId }: { postId: string }) => {
    const url = `/gateway/post/get?postId=${postId}`;

    try {
        const response: AxiosResponse<ApiResponseInterface<PostInterface>> = await apiClient.post(url);

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

// Получает все изображения поста по его id
const getImagesByPostId = async ({ postId }: { postId: string }) => {
    const url = `/gateway/post/image/find?postId=${postId}`;

    try {
        const response: AxiosResponse<ApiResponseInterface<PostImageInterface[] | undefined>> =
            await apiClient.post(url);

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

// Получает все видео поста по его id
const getVideosByPostId = async ({ postId }: { postId: string }) => {
    const url = `/gateway/post/video/find?postId=${postId}`;

    try {
        const response: AxiosResponse<ApiResponseInterface<PostVideoInterface[] | undefined>> =
            await apiClient.post(url);

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

// Получает комментарии поста по его id
const getCommentsByPostId = async ({ postId }: { postId: string }) => {
    const url = `/gateway/post/comment/find-post?postId=${postId}`;

    try {
        const response: AxiosResponse<ApiResponseInterface<PostCommentInterface[]>> = await apiClient.post(url);

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

// Ставит лайки к посту
const likeUnlikeByPostId = async ({ postId }: { postId: string }) => {
    const url = `/gateway/post/like-unlike?postId=${postId}`;

    try {
        const response: AxiosResponse<ApiResponseInterface<{ likes: number; userLike: boolean }>> =
            await apiClient.post(url);

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

export const postApi = {
    findMePosts,
    findAllPosts,
    findPostsByUser,
    getImagesByPostId,
    getVideosByPostId,
    getPostById,
    getCommentsByPostId,
    likeUnlikeByPostId,
};
