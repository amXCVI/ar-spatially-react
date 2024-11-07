import { ApiEndpoints } from "@/shared/api";
import { useAppDispatch } from "@/shared/lib/redux-service";
import { allObjectsActions } from "@/shared/stores/objects-store";
import { ObjectInterface } from "@/shared/types";

const useArObjectItemHook = ({ object }: { object: ObjectInterface }) => {
    const dispatch = useAppDispatch();

    const handleLikeObject = () => {
        ApiEndpoints.object.likeObject({ objectId: object.id }).then((res) => {
            dispatch(allObjectsActions.likeUnlikeObject({ objectId: object.id, userLike: res.userLike }));
        });
    };

    const handleFavoriteObject = () => {
        ApiEndpoints.object.favoriteAddRemove({ objectId: object.id }).then((res) => {
            dispatch(allObjectsActions.favoriteObject({ objectId: object.id, userFavorite: res }));
        });
    };

    return { handleLikeObject, handleFavoriteObject };
};

export { useArObjectItemHook };
