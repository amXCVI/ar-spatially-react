import { useRef } from "react";
import { useSearchParams } from "react-router-dom";

import { SearchParamsConstants } from "@/shared/config/constants";
import { useAppDispatch, useAppSelector } from "@/shared/lib/redux-service";
import { useGetFeedsHook } from "@/shared/lib/use-get-feeds-hook";
import { allFeedsActions } from "@/shared/stores/feeds-store";

const useAllFeedsHook = () => {
    const dispatch = useAppDispatch();

    const [searchParams] = useSearchParams();
    const userId = searchParams.get(SearchParamsConstants.feedsByUserSearchParamsKey);

    const containerRef = useRef<HTMLDivElement>(null);

    const { fetchFeeds } = useGetFeedsHook();

    const { feedsList, loading, currentPage, totalPages, feedsFilterString } = useAppSelector(
        (state) => state.allFeedsSlice,
    );

    const handleScroll = () => {
        const container = containerRef.current;
        if (container) {
            if (container.scrollTop + container.clientHeight >= container.scrollHeight - 10 && !loading) {
                // Если достигли низа, загружаем следующую страницу
                if (currentPage === totalPages) {
                    return;
                }
                dispatch(allFeedsActions.incrementCurrentPage());
                fetchFeeds({ page: currentPage, byUser: userId ?? undefined, filterString: feedsFilterString });
            }
        }
    };

    return { feedsList, handleScroll, containerRef };
};

export { useAllFeedsHook };
