import axios, { AxiosResponse } from "axios";

import { ApiConstants } from "@/shared/config";
import { ApiResponseInterface, UserInterface } from "@/shared/types";

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
        const response: AxiosResponse<ApiResponseInterface<{ token: string }>> = await apiClient.post(url, formData);

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
    const url = `/gateway/user/signup-google`;

    try {
        const response: AxiosResponse<ApiResponseInterface<{ token: string; user: UserInterface }>> =
            await apiClient.post(url, {
                system: ApiConstants.system,
                token: googleToken,
            });

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

const getGoogleUserInfo = async ({ access_token }: { access_token: string }) => {
    await axios
        .get("https://www.googleapis.com/oauth2/v3/userinfo", {
            headers: { Authorization: `Bearer ${access_token}` },
        })
        .then((res) => res.data);
};

export const userApi = { login, signup, getMe, signupX, signupGoogle, getGoogleUserInfo };
