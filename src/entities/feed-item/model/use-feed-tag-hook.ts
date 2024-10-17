import { useNavigate } from "react-router-dom";

import { routes } from "@/shared/config";
import { SearchParamsConstants } from "@/shared/config/constants";
import { useAppDispatch } from "@/shared/lib/redux-service";
import { useGetFeedsHook } from "@/shared/lib/use-get-feeds-hook";
import { allFeedsActions } from "@/shared/stores/feeds-store";
import { PostCommentTagInterface, PostTagInterface, QuoteTagInterface } from "@/shared/types";

const useFeedTagHook = ({ tag }: { tag: PostCommentTagInterface | PostTagInterface | QuoteTagInterface }) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { fetchFeeds } = useGetFeedsHook();

    const handleClickTag = () => {
        dispatch(allFeedsActions.resetCurrentPage());
        dispatch(allFeedsActions.setPostsToList({ posts: [] }));
        fetchFeeds({ page: 1, byUser: tag.userId, filterString: "" });

        navigate(
            `/${routes.feeds}/${routes.feedsByUser}?${SearchParamsConstants.feedsByUserSearchParamsKey}=${tag.userId}`,
        );
    };

    return { handleClickTag };
};

export { useFeedTagHook };
