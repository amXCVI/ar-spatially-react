import { useCallback, useEffect, useState } from "react";
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

    const closeModal = useCallback(() => {
        setIsOpenMapModal(false);
        setSelectedObject(null);
        setViewerModalMode(ObjectViewerModes.VIEW);

        const newSearchParams = Object.fromEntries(searchParams.entries());
        delete newSearchParams[SearchParamsConstants.objectIdSearchParamsKey];

        setSearchParams({
            ...newSearchParams,
        });
    }, [searchParams, setSearchParams]);

    useEffect(() => {
        if (selectedObjectId && !isOpenMapModal) {
            setIsOpenMapModal(true);
        }

        if (!selectedObjectId && isOpenMapModal) {
            closeModal();
        }
    }, [closeModal, isOpenMapModal, selectedObjectId]);

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
