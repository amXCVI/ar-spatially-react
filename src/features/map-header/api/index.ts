import { AxiosResponse } from "axios";

import apiClient from "@/shared/api";
import { ApiResponseInterface, UserInterface } from "@/shared/types";

const getMe = async () => {
    const url = `/gateway/user/get-me`;

    try {
        const response: AxiosResponse<ApiResponseInterface<UserInterface>> = await apiClient.post(url);

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

export const userApi = { getMe };
