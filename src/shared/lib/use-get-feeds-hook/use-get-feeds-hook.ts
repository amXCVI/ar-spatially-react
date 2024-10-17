import { ApiEndpoints } from "@/shared/api";
import { useAppDispatch } from "@/shared/lib/redux-service";
import { allFeedsActions } from "@/shared/stores/feeds-store";

const POSTS_COUNT_IN_PAGE = 10; // Кол-во постов на странице | в одном запросе

const useGetFeedsHook = () => {
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

        try {
            if (!byUser) {
                ApiEndpoints.post
                    .findAllPosts({ pageNum: page, pageSize: POSTS_COUNT_IN_PAGE, searchText: filterString })
                    .then((res) => {
                        dispatch(allFeedsActions.addPostsToList({ posts: res.posts }));
                        dispatch(allFeedsActions.setTotalPages(res.totalPages));
                    });
            }
            if (byUser) {
                ApiEndpoints.post.findPostsByUser({ userId: byUser }).then((res) => {
                    dispatch(allFeedsActions.addPostsToList({ posts: res.postsList }));
                    // В этом запросе нет пагинации
                    // Поэтому ставлю кол-во страниц = 1
                    dispatch(allFeedsActions.setTotalPages(1));
                });
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            dispatch(allFeedsActions.setLoading(false));
        }
    };

    return { fetchFeeds };
};

export { useGetFeedsHook };
