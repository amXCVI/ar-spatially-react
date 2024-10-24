import { useState } from "react";

import { ApiEndpoints } from "@/shared/api";
import { MarkerInterface } from "@/shared/types";

const useArObjectItemHook = ({ object }: { object: MarkerInterface }) => {
    const [userLike, setUserLike] = useState<boolean>(false);

    const handleLikeObject = () => {
        ApiEndpoints.object.likeObject({ objectId: object.id }).then((res) => {
            setUserLike(res.userLike);
        });
    };

    const handleFavoriteObject = () => {
        ApiEndpoints.object.favoritePutObject({ objectId: object.id });
    };

    return { userLike, handleLikeObject, handleFavoriteObject };
};

export { useArObjectItemHook };
