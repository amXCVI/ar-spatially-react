import { useEffect, useRef, useState } from "react";

import { ApiEndpoints } from "@/shared/api";
import { useAppDispatch, useAppSelector } from "@/shared/lib/redux-service";
import { allFeedsActions } from "@/shared/stores/feeds-store";

const useAllFeedsHook = () => {
    const dispatch = useAppDispatch();

    const containerRef = useRef<HTMLDivElement>(null);

    const [loading, setLoading] = useState<boolean>(false);

    const { feedsList, currentPage, totalPages } = useAppSelector((state) => state.allFeedsSlice);

    const fetchData = async (page: number) => {
        if (loading || totalPages === page) return;

        setLoading(true);

        try {
            ApiEndpoints.post.findAllPosts({ pageNum: page, pageSize: 3 }).then((res) => {
                dispatch(allFeedsActions.addPostsToList({ posts: res.posts }));
                dispatch(allFeedsActions.setTotalPages(res.totalPages));
            });
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData(currentPage);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage]);

    const handleScroll = () => {
        const container = containerRef.current;
        if (container) {
            if (container.scrollTop + container.clientHeight >= container.scrollHeight - 10 && !loading) {
                // Если достигли низа, загружаем следующую страницу
                dispatch(allFeedsActions.incrementCurrentPage());
            }
        }
    };

    return { feedsList, handleScroll, containerRef };
};

export { useAllFeedsHook };
