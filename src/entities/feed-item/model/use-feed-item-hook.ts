import { useNavigate } from "react-router-dom";

import { routes } from "@/shared/config";
import { SearchParamsConstants } from "@/shared/config/constants";
import { useAppDispatch } from "@/shared/lib/redux-service";
import { useFeedActionsHook } from "@/shared/lib/use-feed-actions-hook";
import { useUserContext } from "@/shared/stores";
import { selectedFeedActions } from "@/shared/stores/feeds-store";
import { PostInterface } from "@/shared/types";

const useFeedItemHook = ({ feed }: { feed: PostInterface }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { user } = useUserContext();

    const isMyFeed = user?.userId === feed.arPostInfo.author.userId;

    const { handleLikePost } = useFeedActionsHook();

    const handleOpenFeedPage = () => {
        dispatch(selectedFeedActions.setCurrentFeed(feed));

        navigate(`/${routes.feeds}/${routes.feed}?${SearchParamsConstants.feedIdSearchParamsKey}=${feed.id}`, {
            state: { feed: feed },
        });
    };

    const handleLikeFeed = () => {
        handleLikePost({ postId: feed.id });
    };

    return { handleOpenFeedPage, handleLikeFeed, isMyFeed };
};

export { useFeedItemHook };
