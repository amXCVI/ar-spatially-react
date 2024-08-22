import { AxiosResponse } from "axios";

import apiClient from "@/shared/api";
import { ApiResponseInterface } from "@/shared/types";

import { LoginFormInterface } from "../types";

const login = async ({ login, password }: LoginFormInterface) => {
    const url = `/gateway/user/login`;

    try {
        const response = await apiClient.post(url, {
            login,
            password,
        });

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

const signup = async ({ login, password }: LoginFormInterface) => {
    const url = `/gateway/user/signup`;

    const formData = new FormData();
    formData.append("avatarFile", new Blob());
    formData.append(
        "request",
        new Blob([JSON.stringify({ login: login, password: password })], {
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

export const loginApi = { login, signup };
