import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useSearchParams } from "react-router-dom";

import { ApiEndpoints } from "@/shared/api";
import { SearchParamsConstants } from "@/shared/config/constants";
import { useObjectActionsHook } from "@/shared/lib/use-object-actions-hook";
import { ObjectInterface, ObjectViewerModes } from "@/shared/types";

const useObjectViewerHook = () => {
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const selectedObjectId = searchParams.get(SearchParamsConstants.objectIdSearchParamsKey);

    const [isOpenMapModal, setIsOpenMapModal] = useState<boolean>(!!selectedObjectId);

    const [viewerModalMode, setViewerModalMode] = useState<ObjectViewerModes>(ObjectViewerModes.VIEW);

    const [selectedObject, setSelectedObject] = useState<ObjectInterface | null>(
        location.state ? location.state.object : null,
    );
    const [likesData, setLikesData] = useState<{ likes: number; userLike: boolean }>({ likes: 0, userLike: false });
    const [loading, setLoading] = useState<boolean>(false);

    const { handleLikeObject: onLikeObject } = useObjectActionsHook();

    useEffect(() => {
        if (selectedObjectId && !isOpenMapModal) {
            setIsOpenMapModal(true);
        }
    }, [isOpenMapModal, selectedObjectId]);

    useEffect(() => {
        if (selectedObjectId) {
            setLoading(true);
            ApiEndpoints.object
                .getObject({ objectId: selectedObjectId })
                .then((res) => {
                    setSelectedObject(res);
                    setLikesData({ likes: res.likes, userLike: res.userLike });
                })
                .catch(() => {
                    closeModal();
                })
                .finally(() => {
                    setLoading(false);
                });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedObjectId]);

    const closeModal = () => {
        setIsOpenMapModal(false);
        setSelectedObject(null);

        setSearchParams({
            ...Object.fromEntries(searchParams.entries()),
            [SearchParamsConstants.objectIdSearchParamsKey]: "",
        });
    };

    const handleLikeObject = () => {
        if (selectedObject) {
            onLikeObject({
                objectId: selectedObject.id,
                likeCallback: ({ userLike, likesCount }) => {
                    setLikesData({ userLike, likes: likesCount });
                },
            });
        }
    };

    return {
        isOpenMapModal,
        loading,
        selectedObject,
        viewerModalMode,
        likesData,
        closeModal,
        setViewerModalMode,
        handleLikeObject,
    };
};

export { useObjectViewerHook };
