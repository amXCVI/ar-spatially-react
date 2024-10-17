import { AxiosResponse } from "axios";

import { ApiConstants } from "@/shared/config";
import { ApiResponseInterface, UserInterface, UserStatus } from "@/shared/types";

import apiClient from "../api";

const login = async ({ login, password }: { login: string; password: string }) => {
    const url = `/gateway/user/login`;

    try {
        const response = await apiClient.post(url, {
            email: login,
            password,
        });

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

const signup = async ({ login, password }: { login: string; password: string }) => {
    const url = `/gateway/user/signup`;

    const formData = new FormData();
    formData.append("avatarFile", new Blob());
    formData.append(
        "request",
        new Blob([JSON.stringify({ email: login, password: password })], {
            type: "application/json",
        }),
    );

    try {
        const response: AxiosResponse<ApiResponseInterface<{ token: string; user: UserInterface }>> =
            await apiClient.post(url, formData);

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

const getMe = async () => {
    const url = `/gateway/user/get-me`;

    try {
        const response: AxiosResponse<ApiResponseInterface<UserInterface>> = await apiClient.post(url);

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

const signupX = async ({ twitterCode }: { twitterCode: string }) => {
    const url = `/gateway/user/signup-x`;

    const formData = new FormData();
    formData.append(
        "request",
        new Blob([JSON.stringify({ twitterCode: twitterCode, system: ApiConstants.system })], {
            type: "application/json",
        }),
    );

    try {
        const response: AxiosResponse<ApiResponseInterface<{ token: string; user: UserInterface }>> =
            await apiClient.post(url, formData);

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

const signupGoogle = async ({ googleToken }: { googleToken: string }) => {
    const url = `/gateway/user/signup-google-access`;

    try {
        const response: AxiosResponse<ApiResponseInterface<{ token: string; user: UserInterface; newUser: boolean }>> =
            await apiClient.post(url, {
                system: ApiConstants.system,
                token: googleToken,
            });

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

const updateUser = async ({
    userId,
    name,
    nickname,
    phone,
    status,
    language,
    pushToken,
    email,
}: {
    userId: string;
    name?: string;
    nickname?: string;
    phone?: string;
    status?: UserStatus;
    language?: string;
    pushToken?: string;
    email?: string;
}) => {
    const url = `/gateway/user/update`;

    const formData = new FormData();
    formData.append("avatarFile", new Blob());
    formData.append(
        "request",
        new Blob(
            [
                JSON.stringify({
                    userId: userId,
                    name: name,
                    nickname: nickname,
                    phone: phone,
                    status: status,
                    language: language,
                    pushToken: pushToken,
                    email: email,
                }),
            ],
            {
                type: "application/json",
            },
        ),
    );

    return apiClient
        .post(url, formData)
        .then((res: AxiosResponse<ApiResponseInterface<UserInterface>>) => {
            return res.data.data;
        })
        .catch((err: ApiResponseInterface<string>) => {
            throw err;
        });
};

const updateUserPassword = async ({
    newPassword,
    password,
    pushToken,
}: {
    newPassword: string;
    password: string;
    pushToken: string;
}) => {
    const url = `/gateway/user/password/reset`;

    try {
        const response: AxiosResponse = await apiClient.post(url, {
            newPassword: newPassword,
            password: password,
            pushToken: pushToken,
        });

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

const touch = async () => {
    const url = `/gateway/user/touch`;

    try {
        const response: AxiosResponse<ApiResponseInterface<string>> = await apiClient.post(url);

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

const getUser = async ({ userId }: { userId: string }) => {
    const url = `/gateway/user/get?userId=${userId}`;

    try {
        const response: AxiosResponse<ApiResponseInterface<UserInterface>> = await apiClient.post(url);

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

export const userApi = { login, signup, getMe, signupX, signupGoogle, updateUserPassword, updateUser, touch, getUser };
