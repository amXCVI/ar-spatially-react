import { useEffect, useState } from "react";

import { ApiEndpoints } from "@/shared/api";
import { ObjectCommentInterface } from "@/shared/types";

const useObjectCommentsHook = ({ objectId, countComments }: { objectId: string; countComments?: number }) => {
    const [commentsList, setCommentsList] = useState<ObjectCommentInterface[]>([]);

    useEffect(() => {
        if (countComments) {
            ApiEndpoints.objectComment.findComentsByObject({ objectId }).then((res) => {
                setCommentsList(res);
            });
        }
    }, [countComments, objectId]);

    return { commentsList };
};

export { useObjectCommentsHook };
