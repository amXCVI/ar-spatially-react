import { useState } from "react";

import { useAppSelector } from "@/shared/lib/redux-service";
import { useGetObjectsHook } from "@/shared/lib/use-get-objects-hook";
import { useUserContext } from "@/shared/stores";
import { ObjectsPageModes } from "@/shared/types";

const useObjectsFilterHook = () => {
    const [selectedPageMode, setSelectedPageMode] = useState<ObjectsPageModes>(ObjectsPageModes.ALL_AR_OBJECTS);

    const { user } = useUserContext();
    const { objectsFilterString } = useAppSelector((state) => state.allObjectsSlice);
    const { fetchObjects } = useGetObjectsHook();

    const handleSelectPageMode = (e: ObjectsPageModes) => {
        switch (e) {
            case ObjectsPageModes.MY_AR_OBJECTS:
                if (user) {
                    fetchObjects({ page: 1, byUser: user.userId, filterString: "" });
                }
                break;

            case ObjectsPageModes.SAVED:
                if (user) {
                    fetchObjects({ page: 1, byUser: user.userId, favorites: true, filterString: "" });
                }
                break;

            default:
                fetchObjects({ page: 1, byUser: undefined, filterString: "" });
                break;
        }

        setSelectedPageMode(e);
    };

    return { selectedPageMode, objectsFilterString, handleSelectPageMode };
};

export { useObjectsFilterHook };
