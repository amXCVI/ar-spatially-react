import { useState } from "react";

import { useAppSelector } from "@/shared/lib/redux-service";
import { useGetObjectsHook } from "@/shared/lib/use-get-objects-hook";
import { useUserContext } from "@/shared/stores";
import { useAuthContext } from "@/shared/stores/auth-provider";
import { ObjectsPageModes } from "@/shared/types";

const useObjectsFilterHook = () => {
    const [selectedPageMode, setSelectedPageMode] = useState<ObjectsPageModes>(ObjectsPageModes.LIBRARY);

    const { checkAuth } = useAuthContext();
    const { user } = useUserContext();
    const { objectsFilterString } = useAppSelector((state) => state.allObjectsSlice);
    const { fetchObjects } = useGetObjectsHook();

    const handleSelectPageMode = (e: ObjectsPageModes) => {
        switch (e) {
            case ObjectsPageModes.MY_OBJECTS:
                checkAuth().then(() => {
                    if (user) {
                        fetchObjects({ page: 1, byUser: user.userId, filterString: "" });
                        setSelectedPageMode(e);
                    }
                });

                break;

            case ObjectsPageModes.FAVORITES:
                checkAuth().then(() => {
                    if (user) {
                        fetchObjects({ page: 1, byUser: user.userId, favorites: true, filterString: "" });
                        setSelectedPageMode(e);
                    }
                });

                break;

            default:
                fetchObjects({ page: 1, byUser: undefined, filterString: "" });
                setSelectedPageMode(e);

                break;
        }
    };

    return { selectedPageMode, objectsFilterString, handleSelectPageMode };
};

export { useObjectsFilterHook };
