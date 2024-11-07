import { ApiEndpoints } from "@/shared/api";
import { allObjectsActions } from "@/shared/stores/objects-store";

import { useAppDispatch } from "../redux-service";

const useObjectActionsHook = () => {
    const dispatch = useAppDispatch();

    // Лайк/Дизлайк объекта
    const handleLikeObject = ({
        objectId,
        likeCallback,
    }: {
        objectId: string;
        likeCallback?: (e: { userLike: boolean; likesCount: number }) => void;
    }) => {
        ApiEndpoints.object.likeObject({ objectId }).then((res) => {
            dispatch(allObjectsActions.likeUnlikeObject({ objectId: objectId, userLike: res.userLike }));

            if (likeCallback) {
                likeCallback({ userLike: res.userLike, likesCount: res.likes });
            }
        });
    };

    return { handleLikeObject };
};

export { useObjectActionsHook };
