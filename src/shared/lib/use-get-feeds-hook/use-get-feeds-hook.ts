import { useState } from "react";

import { ApiEndpoints } from "@/shared/api";
import { useAppDispatch } from "@/shared/lib/redux-service";
import { allFeedsActions } from "@/shared/stores/feeds-store";

const POSTS_COUNT_IN_PAGE = 10; // Кол-во постов на странице | в одном запросе

const useGetFeedsHook = () => {
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [totalPages, setTotalPages] = useState<number>(-1);

    const dispatch = useAppDispatch();

    const fetchFeeds = async ({
        page,
        byUser,
        filterString,
    }: {
        page: number;
        byUser?: string;
        filterString: string;
    }) => {
        // if (loading || totalPages === page) return;

        dispatch(allFeedsActions.setLoading(true));

        if (page === 1) {
            dispatch(allFeedsActions.setPostsToList({ posts: [] }));
        }

        try {
            if (!byUser) {
                ApiEndpoints.post
                    .findAllPosts({ pageNum: page, pageSize: POSTS_COUNT_IN_PAGE, searchText: filterString })
                    .then((res) => {
                        dispatch(allFeedsActions.addPostsToList({ posts: res.posts }));
                        setTotalPages(res.totalPages);
                    });
            } else {
                ApiEndpoints.post
                    .findPostsByUser({ userId: byUser, pageNum: page, pageSize: POSTS_COUNT_IN_PAGE })
                    .then((res) => {
                        dispatch(allFeedsActions.addPostsToList({ posts: res.posts }));
                        setTotalPages(res.totalPages);
                    });
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setCurrentPage(page);
            dispatch(allFeedsActions.setLoading(false));
        }
    };

    return { fetchFeeds, currentPage, totalPages };
};

export { useGetFeedsHook };
