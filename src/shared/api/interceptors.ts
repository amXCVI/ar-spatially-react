import { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import Cookies from "universal-cookie";

import { CookiesConstants, LSConstants } from "../config/constants";
import { ApiResponseInterface } from "../types";
import { ApiEndpoints } from "./endpoints";

const logoutFunction = () => {
    localStorage.removeItem(LSConstants.accessToken);
    localStorage.removeItem(LSConstants.userData);

    const cookies = new Cookies(null, { path: "/" });

    if (cookies) {
        cookies.set(CookiesConstants.accessTokenLifeTime, "");
    }

    window.location.reload();
};

const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const accessToken = localStorage.getItem(LSConstants.accessToken);

    if (accessToken) {
        config.headers.set("Authorization", `Bearer ${accessToken}`);
    }

    return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
    // Здесь после каждого запроса проверяю, если время жизни токена истекло - запрашиваю новый
    // Время жизни в VITE_APP_ACCESS_TOKEN_LIFE_TIME_DAYS должно быть меньше реального времени жизни
    const cookies = new Cookies(null, { path: "/" });

    const cookieExists = cookies.get(CookiesConstants.accessTokenLifeTime);
    const accessToken = localStorage.getItem(LSConstants.accessToken);

    if (!cookieExists && accessToken) {
        ApiEndpoints.user
            .touch()
            .then((res) => {
                localStorage.setItem(LSConstants.accessToken, res);

                cookies.set(CookiesConstants.accessTokenLifeTime, "true", {
                    path: "/",
                    expires: new Date(
                        Date.now() + Number(import.meta.env.VITE_APP_ACCESS_TOKEN_LIFE_TIME_DAYS) * 24 * 60 * 60 * 1000,
                    ),
                });
            })
            .catch(() => {
                logoutFunction();
            });
    }

    return response;
};

const onResponseError = (error: AxiosError<ApiResponseInterface<string>>): Promise<AxiosError> => {
    switch (error.response?.status) {
        case 401:
            // Для этих запросов нужно игнорировать 401 статус и не делать разлогин
            // ? было бы неплохо придумать что-то покрасивее
            if (
                error.config?.url?.includes("user/touch") ||
                error.config?.url?.includes("user/signup") ||
                error.config?.url?.includes("user/password/change")
            ) {
                throw error.response?.data;
            }

            logoutFunction();

            throw error.response?.data;

        default:
            throw error.response?.data;
    }

    return Promise.reject(JSON.stringify(error));
};

export function setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
    axiosInstance.interceptors.request.use(onRequest, onRequestError);
    axiosInstance.interceptors.response.use(onResponse, onResponseError);
    return axiosInstance;
}
