import { useSearchParams } from "react-router-dom";

import { ApiEndpoints } from "@/shared/api";
import { SearchParamsConstants } from "@/shared/config/constants";
import { useAppDispatch } from "@/shared/lib/redux-service";
import { allObjectsActions } from "@/shared/stores/objects-store";
import { ObjectInterface } from "@/shared/types";

const useArObjectItemHook = ({ object }: { object: ObjectInterface }) => {
    const [searchParams, setSearchParams] = useSearchParams();

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

    const handleOpenObject = () => {
        setSearchParams({
            ...Object.fromEntries(searchParams.entries()),
            [SearchParamsConstants.objectIdSearchParamsKey]: object.id,
        });
        // state.object = object
    };

    return { handleLikeObject, handleFavoriteObject, handleOpenObject };
};

export { useArObjectItemHook };
