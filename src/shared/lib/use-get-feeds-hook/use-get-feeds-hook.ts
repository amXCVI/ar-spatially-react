import { ApiEndpoints } from "@/shared/api";
import { useAppDispatch } from "@/shared/lib/redux-service";
import { allFeedsActions } from "@/shared/stores/feeds-store";
import { FeedsPageModes } from "@/shared/types";

const POSTS_COUNT_IN_PAGE = 10; // Кол-во постов на странице | в одном запросе

const useGetFeedsHook = () => {
    const dispatch = useAppDispatch();

    const fetchFeeds = async ({
        page,
        feedsPageMode,
        filterString,
    }: {
        page: number;
        feedsPageMode: FeedsPageModes;
        filterString: string;
    }) => {
        // if (loading || totalPages === page) return;

        dispatch(allFeedsActions.setLoading(true));

        try {
            switch (feedsPageMode) {
                case FeedsPageModes.ALL_FEED:
                    ApiEndpoints.post
                        .findAllPosts({ pageNum: page, pageSize: POSTS_COUNT_IN_PAGE, searchText: filterString })
                        .then((res) => {
                            dispatch(allFeedsActions.addPostsToList({ posts: res.posts }));
                            dispatch(allFeedsActions.setTotalPages(res.totalPages));
                        });
                    break;

                case FeedsPageModes.MY_FEED:
                    ApiEndpoints.post.findMePosts().then((res) => {
                        dispatch(allFeedsActions.addPostsToList({ posts: res.postsList }));
                    });
                    break;

                default:
                    break;
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
