import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useSearchParams } from "react-router-dom";

import { ApiEndpoints } from "@/shared/api";
import { SearchParamsConstants } from "@/shared/config/constants";
import { FavoriteObjectInterface, ObjectInterface, ObjectViewerModes } from "@/shared/types";

const useObjectViewerHook = () => {
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const selectedObjectId = searchParams.get(SearchParamsConstants.objectIdSearchParamsKey);

    const [isOpenMapModal, setIsOpenMapModal] = useState<boolean>(!!selectedObjectId);

    const [viewerModalMode, setViewerModalMode] = useState<ObjectViewerModes>(ObjectViewerModes.VIEW);

    const [selectedObject, setSelectedObject] = useState<ObjectInterface | FavoriteObjectInterface | null>(
        location.state ? location.state.object : null,
    );
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (selectedObjectId && !isOpenMapModal) {
            setIsOpenMapModal(true);
        }
    }, [isOpenMapModal, selectedObjectId]);

    useEffect(() => {
        if (selectedObjectId && !selectedObject) {
            setLoading(true);
            ApiEndpoints.object
                .getObject({ objectId: selectedObjectId })
                .then((res) => {
                    setSelectedObject(res.arObject);
                })
                .catch(() => {
                    closeModal();
                })
                .finally(() => {
                    setLoading(false);
                });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedObject, selectedObjectId]);

    const closeModal = () => {
        setIsOpenMapModal(false);
        setSelectedObject(null);
        setSearchParams({});
    };

    return { isOpenMapModal, loading, selectedObject, viewerModalMode, closeModal, setViewerModalMode };
};

export { useObjectViewerHook };
