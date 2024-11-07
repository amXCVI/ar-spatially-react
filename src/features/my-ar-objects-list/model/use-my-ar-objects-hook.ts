import { useEffect } from "react";

import { useAppSelector } from "@/shared/lib/redux-service";
import { useGetObjectsHook } from "@/shared/lib/use-get-objects-hook";
import { useUserContext } from "@/shared/stores";

const useMyArObjectsHook = () => {
    const { user } = useUserContext();
    const { objectsList } = useAppSelector((state) => state.allObjectsSlice);

    const { fetchObjects } = useGetObjectsHook();

    useEffect(() => {
        if (user && !objectsList.length) {
            fetchObjects({ page: 1, byUser: user.userId, filterString: "" });
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user, objectsList]);

    return { objectsList };
};

export { useMyArObjectsHook };
