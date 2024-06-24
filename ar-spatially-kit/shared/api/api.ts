import axios from "axios";

import { setupInterceptorsTo } from "./interceptors";

const baseUrl = "http://146.190.206.198:8001/";

const apiClient = axios.create({
    baseURL: baseUrl,
});

setupInterceptorsTo(apiClient);

export default apiClient;
