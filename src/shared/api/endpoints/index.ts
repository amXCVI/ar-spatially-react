import { filesApi } from "./file-endpoints";
import { layerApi } from "./layer-endpoints";
import { objectApi } from "./object-endpoints";
import { userApi } from "./user-endpoints";

export class ApiEndpoints {
    static user = userApi;
    static object = objectApi;
    static layer = layerApi;
    static file = filesApi;
}
