import { filesApi } from "./file-endpoints";
import { layerApi } from "./layer-endpoints";
import { objectCommentApi } from "./object-comment-endpoints";
import { objectApi } from "./object-endpoints";
import { postApi } from "./post-endpoints";
import { userApi } from "./user-endpoints";

export class ApiEndpoints {
    static user = userApi;
    static object = objectApi;
    static layer = layerApi;
    static file = filesApi;
    static post = postApi;
    static objectComment = objectCommentApi;
}
