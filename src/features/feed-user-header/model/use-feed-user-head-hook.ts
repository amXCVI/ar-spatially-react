import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { ApiEndpoints } from "@/shared/api";
import { SearchParamsConstants } from "@/shared/config/constants";
import { useAppDispatch, useAppSelector } from "@/shared/lib/redux-service";
import { selectedUserActions, subscribtionsActions, subscribtionsSelectors } from "@/shared/stores/feeds-store";

const useFeedUserHeadHook = () => {
    const dispatch = useAppDispatch();

    const [searchParams] = useSearchParams();
    const userId = searchParams.get(SearchParamsConstants.feedsByUserSearchParamsKey);

    const { currentUserProfile: user } = useAppSelector((state) => state.selectedUserSlice);

    const subscribtion = useAppSelector((state) => subscribtionsSelectors.selectSubscribtionById(state, userId ?? ""));

    useEffect(() => {
        if (userId && userId !== user?.userId) {
            ApiEndpoints.user.getUserProfile({ userId }).then((res) => {
                dispatch(selectedUserActions.setCurrentUserProfile(res));
            });
        }
    }, [dispatch, user?.userId, userId]);

    const handleFollow = () => {
        if (userId) {
            ApiEndpoints.user.subscribeUser({ userIdFrom: userId }).then((res) => {
                if (res) {
                    dispatch(subscribtionsActions.addSubscribtion({ subscribtion: { userId: userId } }));
                } else {
                    dispatch(subscribtionsActions.deleteSubscribtion({ subscribtionId: userId }));
                }
            });
        }
    };

    return { user, handleFollow, subscribtion };
};

export { useFeedUserHeadHook };
