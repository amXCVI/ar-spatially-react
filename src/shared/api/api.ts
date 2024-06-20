import axios from "axios";

import { setupInterceptorsTo } from "./interceptors";

const baseUrl = import.meta.env.VITE_APP_API_BASE_URL;

const apiClient = axios.create({
    baseURL: baseUrl,
});

setupInterceptorsTo(apiClient);

export default apiClient;
