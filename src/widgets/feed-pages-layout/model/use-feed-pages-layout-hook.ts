import { useEffect } from "react";

import { ApiEndpoints } from "@/shared/api";
import { useAppDispatch } from "@/shared/lib/redux-service";
import { subscribtionsActions } from "@/shared/stores/feeds-store";

const useFeedPagesLayoutHook = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        ApiEndpoints.user.getSubscriptions().then((res) => {
            dispatch(subscribtionsActions.setSubscribtions(res));
        });
    }, [dispatch]);

    return {};
};

export { useFeedPagesLayoutHook };
