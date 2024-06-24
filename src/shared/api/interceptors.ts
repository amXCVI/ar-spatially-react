import { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";

const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    config.headers.set("x-api-key", "Key CxgSuxAVKjs8fRkcVLwZo3M9wn1t6tpr");
    // config.headers.set("Authorization", `Bearer ${localStorage.getItem("token")}`);
    // config.headers.set(
    //     "Authorization",
    //     `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsb2dpbjEiLCJpc3MiOiJnYXRld2F5IiwiZXhwIjoxNzE4OTg2MzU3fQ.quJO1hfMUMOgCjC07Tq4JjFt3iz5munNGyYbTmXrnfI5gwyJd_S4RvBk9bjz1C0W7bYEMQq8_b7h9CUgT-Ptsw`,
    // );

    return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
    return response;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(JSON.stringify(error));
};

export function setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
    axiosInstance.interceptors.request.use(onRequest, onRequestError);
    axiosInstance.interceptors.response.use(onResponse, onResponseError);
    return axiosInstance;
}
