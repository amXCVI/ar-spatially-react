import { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";

import { routes } from "../config";
import { LSConstants } from "../config/constants";

const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const accessToken = localStorage.getItem(LSConstants.accessToken);

    config.headers.set("x-api-key", "Key CxgSuxAVKjs8fRkcVLwZo3M9wn1t6tpr");
    if (accessToken) {
        config.headers.set("Authorization", `Bearer ${accessToken}`);
    }

    return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
    return response;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
    switch (error.response?.status) {
        case 401:
            localStorage.removeItem(LSConstants.accessToken);
            window.location.pathname = routes.home;
            break;

        default:
            break;
    }
    return Promise.reject(JSON.stringify(error));
};

export function setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
    axiosInstance.interceptors.request.use(onRequest, onRequestError);
    axiosInstance.interceptors.response.use(onResponse, onResponseError);
    return axiosInstance;
}
