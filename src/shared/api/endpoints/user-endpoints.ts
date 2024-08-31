import { AxiosResponse } from "axios";

import { ApiConstants } from "@/shared/config";
import { ApiResponseInterface, UserInterface } from "@/shared/types";

import apiClient from "../api";

const getMe = async () => {
    const url = `/gateway/user/get-me`;

    try {
        const response: AxiosResponse<ApiResponseInterface<UserInterface>> = await apiClient.post(url);

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

const getAccessTokenFromX = async ({ xCode }: { xCode: string }) => {
    const url = `https://api.x.com/2/oauth2/token?code=${xCode}&grant_type=authorization_code&client_id=${import.meta.env.VITE_APP_X_CLIENT_ID}&redirect_uri=https://arspatially.com&code_verifier=challenge`;

    try {
        const response: AxiosResponse<ApiResponseInterface<{ token: string; user: UserInterface }>> =
            await apiClient.post(url);

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

const signupX = async ({ accessTwitterToken }: { accessTwitterToken: string }) => {
    const url = `/gateway/user/signup-x`;

    try {
        const response: AxiosResponse<ApiResponseInterface<{ token: string; user: UserInterface }>> =
            await apiClient.post(url, {
                accessTwitterToken: accessTwitterToken,
                accessTwitterTokenSecret: import.meta.env.VITE_APP_X_APP_SECRET,
                system: ApiConstants.system,
            });

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

export const userApi = { getMe, signupX, getAccessTokenFromX };
