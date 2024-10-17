import { ChangeEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { routes } from "@/shared/config";
import { useAppDispatch, useAppSelector } from "@/shared/lib/redux-service";
import { useGetFeedsHook } from "@/shared/lib/use-get-feeds-hook";
import { allFeedsActions } from "@/shared/stores/feeds-store";
import { FeedsPageModes } from "@/shared/types";

const useFeedsFilterHook = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const { fetchFeeds } = useGetFeedsHook();

    const { feedsPageMode, feedsFilterString, currentPage, loading } = useAppSelector((state) => state.allFeedsSlice);

    const handleSelectPageMode = (e: FeedsPageModes) => {
        dispatch(allFeedsActions.setFeedsPageMode(e));
        fetchFeeds({ page: currentPage, feedsPageMode: e, filterString: feedsFilterString });

        if (window.location.pathname === `/${routes.feeds}`) {
            return;
        } else {
            navigate(`/${routes.feeds}`);
        }
    };

    const handleChangeFilterString = (e: ChangeEvent<HTMLInputElement>) => {
        // Сбрасываю текущую страницу к начальному значению
        // Удаляю все посту из ленты, загрузятся новые после поиска
        // Поиск доступен только в режиме all feeds
        if (feedsPageMode === FeedsPageModes.ALL_FEED) {
            dispatch(allFeedsActions.onChangeFilterString(e.target.value));
            dispatch(allFeedsActions.resetCurrentPage());
            dispatch(allFeedsActions.setPostsToList({ posts: [] }));
            fetchFeeds({ page: 1, feedsPageMode, filterString: e.target.value });
        }
    };

    useEffect(() => {
        if (!loading) {
            // Загружаю данные при первом открытии страницы
            fetchFeeds({ page: currentPage, feedsPageMode, filterString: feedsFilterString });
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { feedsPageMode, feedsFilterString, handleSelectPageMode, handleChangeFilterString };
};

export { useFeedsFilterHook };
