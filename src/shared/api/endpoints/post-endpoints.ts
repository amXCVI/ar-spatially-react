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
const findMePosts = async ({ pageNum, pageSize }: { pageNum: number; pageSize: number }) => {
    const url = `/gateway/post/find/me`;

    try {
        const response: AxiosResponse<
            ApiResponseInterface<{ posts: PostInterface[]; pageNum: number; pageSize: number; totalPages: number }>
        > = await apiClient.post(url, { pageNum, pageSize });

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
const findPostsByUser = async ({
    userId,
    pageNum,
    pageSize,
}: {
    userId: string;
    pageNum: number;
    pageSize: number;
}) => {
    const url = `/gateway/post/find/user`;

    try {
        const response: AxiosResponse<
            ApiResponseInterface<{ posts: PostInterface[]; pageNum: number; pageSize: number; totalPages: number }>
        > = await apiClient.post(url, { userId, pageNum, pageSize });

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

// Создать пост
const createPost = async ({
    imageFiles,
    videoFiles,
    content,
    location,
    lat,
    lng,
}: {
    imageFiles: File[];
    videoFiles: File[];
    content: string;
    location: string;
    lat: number;
    lng: number;
}) => {
    const url = `/gateway/post/create`;

    const formData = new FormData();

    if (imageFiles.length) {
        imageFiles.forEach((item) => {
            formData.append("imageFiles", item);
        });
    } else {
        formData.append("imageFiles", new Blob());
    }

    if (videoFiles.length) {
        videoFiles.forEach((item) => {
            formData.append("videoFiles", item);
        });
    } else {
        formData.append("videoFiles", new Blob());
    }

    formData.append(
        "request",
        new Blob(
            [
                JSON.stringify({
                    content,
                    lat,
                    lng,
                    location,
                }),
            ],
            {
                type: "application/json",
            },
        ),
    );

    try {
        const response: AxiosResponse<ApiResponseInterface<PostInterface>> = await apiClient.post(url, formData);

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

// Удаляет пост
const deleteByPostId = async ({ postId }: { postId: string }) => {
    const url = `/gateway/post/delete?postId=${postId}`;

    try {
        const response: AxiosResponse = await apiClient.delete(url);

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
    createPost,
    deleteByPostId,
};
