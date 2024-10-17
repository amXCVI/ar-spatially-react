import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { ApiEndpoints } from "@/shared/api";
import { routes } from "@/shared/config";
import { SearchParamsConstants } from "@/shared/config/constants";
import { useAppDispatch, useAppSelector } from "@/shared/lib/redux-service";
import { selectedFeedActions } from "@/shared/stores/feeds-store";

const useFeedPageHook = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const feedId = searchParams.get(SearchParamsConstants.feedIdSearchParamsKey);

    const { currentFeed: feed } = useAppSelector((state) => state.selectedFeedSlice);

    useEffect(() => {
        // Если в сторе не сохранен feed
        // Запрашиваю его по feedId
        // Если feedId нет - редирект на список всех feeds
        if (!feed && feedId) {
            ApiEndpoints.post
                .getPostById({ postId: feedId })
                .then((res) => {
                    dispatch(selectedFeedActions.setCurrentFeed(res));
                })
                .catch(() => {
                    navigate(`/${routes.feeds}`);
                });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { feed };
};

export { useFeedPageHook };
