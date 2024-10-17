import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { ApiEndpoints } from "@/shared/api";
import { SearchParamsConstants } from "@/shared/config/constants";
import { useAppDispatch, useAppSelector } from "@/shared/lib/redux-service";
import { selectedUserActions } from "@/shared/stores/feeds-store";

const useFeedUserHeadHook = () => {
    const dispatch = useAppDispatch();

    const [searchParams] = useSearchParams();
    const userId = searchParams.get(SearchParamsConstants.feedsByUserSearchParamsKey);

    const { currentUserProfile: user } = useAppSelector((state) => state.selectedUserSlice);

    useEffect(() => {
        if (userId) {
            ApiEndpoints.user.getUserProfile({ userId }).then((res) => {
                dispatch(selectedUserActions.setCurrentUserProfile(res));
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { user };
};

export { useFeedUserHeadHook };
