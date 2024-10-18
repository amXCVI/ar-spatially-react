import { useNavigate } from "react-router-dom";

import { ApiEndpoints } from "@/shared/api";
import { routes } from "@/shared/config";
import { SearchParamsConstants } from "@/shared/config/constants";
import { useAppDispatch, useAppSelector } from "@/shared/lib/redux-service";
import { useFeedActionsHook } from "@/shared/lib/use-feed-actions-hook";
import { useUserContext } from "@/shared/stores";
import { allFeedsActions, selectedFeedActions, subscribtionsSelectors } from "@/shared/stores/feeds-store";
import { PostInterface } from "@/shared/types";

const useFeedItemHook = ({ feed }: { feed: PostInterface }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { user } = useUserContext();

    const isMyFeed = user?.userId === feed.arPostInfo.author.userId;

    const subscribtion = useAppSelector((state) =>
        subscribtionsSelectors.selectSubscribtionById(state, feed.arPostInfo.author.userId),
    );

    const { handleLikePost, handleSubscribeUser } = useFeedActionsHook();

    const handleOpenFeedPage = () => {
        dispatch(selectedFeedActions.setCurrentFeed(feed));

        navigate(`/${routes.feeds}/${routes.feed}?${SearchParamsConstants.feedIdSearchParamsKey}=${feed.id}`, {
            state: { feed: feed },
        });
    };

    const handleLikeFeed = () => {
        handleLikePost({ postId: feed.id });
    };

    const handleSubscribe = () => {
        handleSubscribeUser({ userId: feed.arPostInfo.author.userId });
    };

    const handleDeleteFeed = () => {
        if (isMyFeed) {
            ApiEndpoints.post.deleteByPostId({ postId: feed.id }).then(() => {
                dispatch(allFeedsActions.deletePostFromList({ postId: feed.id }));
            });
        }
    };

    return { handleOpenFeedPage, handleLikeFeed, handleDeleteFeed, handleSubscribe, isMyFeed, subscribtion };
};

export { useFeedItemHook };
