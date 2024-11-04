import { useFeedActionsHook } from "@/shared/lib/use-feed-actions-hook";

const useDetailFeedItemHook = ({ feedId }: { feedId: string }) => {
    const { handleLikePost } = useFeedActionsHook();

    const handleLikeFeed = () => {
        handleLikePost({ postId: feedId });
    };

    return { handleLikeFeed };
};

export { useDetailFeedItemHook };
