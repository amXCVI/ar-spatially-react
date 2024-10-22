import { ChangeEvent, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { routes } from "@/shared/config";
import { SearchParamsConstants } from "@/shared/config/constants";
import { useAppDispatch, useAppSelector } from "@/shared/lib/redux-service";
import { useGetFeedsHook } from "@/shared/lib/use-get-feeds-hook";
import { useUserContext } from "@/shared/stores";
import { allFeedsActions, selectedUserActions } from "@/shared/stores/feeds-store";
import { FeedsPageModes } from "@/shared/types";

const useFeedsFilterHook = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const [searchParams] = useSearchParams();
    const userId = searchParams.get(SearchParamsConstants.feedsByUserSearchParamsKey);

    const { user } = useUserContext();

    const { fetchFeeds } = useGetFeedsHook();

    const { feedsPageMode, feedsFilterString, loading } = useAppSelector((state) => state.allFeedsSlice);

    const handleSelectPageMode = (e: FeedsPageModes) => {
        switch (e) {
            case FeedsPageModes.ALL_FEED:
                navigate(`/${routes.feeds}`);
                break;

            case FeedsPageModes.MY_FEED:
                if (user) {
                    dispatch(selectedUserActions.setCurrentUserProfile(null));
                    navigate(
                        `/${routes.feeds}/${routes.feedsByUser}?${SearchParamsConstants.feedsByUserSearchParamsKey}=${user.userId}`,
                    );
                }
                break;

            default:
                break;
        }

        dispatch(allFeedsActions.setFeedsPageMode(e));
    };

    const handleChangeFilterString = (e: ChangeEvent<HTMLInputElement>) => {
        // Сбрасываю текущую страницу к начальному значению
        // Удаляю все посту из ленты, загрузятся новые после поиска
        // Поиск доступен только в режиме all feeds
        if (feedsPageMode === FeedsPageModes.ALL_FEED) {
            dispatch(allFeedsActions.onChangeFilterString(e.target.value));
            fetchFeeds({ page: 1, filterString: e.target.value });
        }
    };

    useEffect(() => {
        if (userId === user?.userId) {
            // Если открыта страинца моих постов
            // Нужно выставить соответствующий режим
            dispatch(allFeedsActions.setFeedsPageMode(FeedsPageModes.MY_FEED));
        }
    }, [dispatch, user?.userId, userId]);

    return { feedsPageMode, feedsFilterString, handleSelectPageMode, handleChangeFilterString };
};

export { useFeedsFilterHook };
