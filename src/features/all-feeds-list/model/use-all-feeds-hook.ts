import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

import { SearchParamsConstants } from "@/shared/config/constants";
import { useAppSelector } from "@/shared/lib/redux-service";
import { useGetFeedsHook } from "@/shared/lib/use-get-feeds-hook";

const useAllFeedsHook = () => {
    const [searchParams] = useSearchParams();
    const userId = searchParams.get(SearchParamsConstants.feedsByUserSearchParamsKey);

    const containerRef = useRef<HTMLDivElement>(null);

    const { fetchFeeds, totalPages, currentPage } = useGetFeedsHook();

    const { feedsList, loading, feedsFilterString } = useAppSelector((state) => state.allFeedsSlice);

    useEffect(() => {
        fetchFeeds({ page: 1, byUser: userId ?? undefined, filterString: feedsFilterString });
        // return () => {
        //     cleanup
        // }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userId]);

    const handleScroll = () => {
        const container = containerRef.current;
        if (container) {
            if (container.scrollTop + container.clientHeight >= container.scrollHeight - 10 && !loading) {
                // Если достигли низа, загружаем следующую страницу
                if (currentPage >= totalPages) {
                    return;
                }

                fetchFeeds({
                    page: currentPage + 1,
                    byUser: userId ?? undefined,
                    filterString: feedsFilterString,
                });
            }
        }
    };

    return { feedsList, handleScroll, containerRef };
};

export { useAllFeedsHook };
