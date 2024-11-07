import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

import { SearchParamsConstants } from "@/shared/config/constants";
import { useAppSelector } from "@/shared/lib/redux-service";
import { useGetObjectsHook } from "@/shared/lib/use-get-objects-hook";

const useAllObjectsListHook = () => {
    const [searchParams] = useSearchParams();
    const userId = searchParams.get(SearchParamsConstants.feedsByUserSearchParamsKey);

    const containerRef = useRef<HTMLDivElement>(null);

    const { fetchObjects, totalPages, currentPage } = useGetObjectsHook();

    const { objectsList, loading, objectsFilterString } = useAppSelector((state) => state.allObjectsSlice);

    useEffect(() => {
        fetchObjects({ page: 1, byUser: userId ?? undefined, filterString: "" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleScroll = () => {
        const container = containerRef.current;
        if (container) {
            if (container.scrollTop + container.clientHeight >= container.scrollHeight - 10 && !loading) {
                // Если достигли низа, загружаем следующую страницу
                if (currentPage >= totalPages) {
                    return;
                }

                fetchObjects({
                    page: currentPage + 1,
                    byUser: userId ?? undefined,
                    filterString: objectsFilterString,
                });
            }
        }
    };

    return { objectsList, handleScroll, containerRef };
};

export { useAllObjectsListHook };
