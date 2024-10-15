import { useEffect, useRef } from "react";

import { useAppDispatch, useAppSelector } from "@/shared/lib/redux-service";
import { useGetFeedsHook } from "@/shared/lib/use-get-feeds-hook";
import { allFeedsActions } from "@/shared/stores/feeds-store";

const useAllFeedsHook = () => {
    const dispatch = useAppDispatch();

    const containerRef = useRef<HTMLDivElement>(null);

    const { fetchFeeds } = useGetFeedsHook();

    const { feedsList, loading, currentPage, totalPages, feedsPageMode, feedsFilterString } = useAppSelector(
        (state) => state.allFeedsSlice,
    );

    useEffect(() => {
        // Загружаю данные при первом открытии страницы
        fetchFeeds({ page: currentPage, feedsPageMode, filterString: feedsFilterString });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleScroll = () => {
        const container = containerRef.current;
        if (container) {
            if (container.scrollTop + container.clientHeight >= container.scrollHeight - 10 && !loading) {
                // Если достигли низа, загружаем следующую страницу
                if (currentPage === totalPages) {
                    return;
                }
                dispatch(allFeedsActions.incrementCurrentPage());
                fetchFeeds({ page: currentPage, feedsPageMode, filterString: feedsFilterString });
            }
        }
    };

    return { feedsList, handleScroll, containerRef };
};

export { useAllFeedsHook };
