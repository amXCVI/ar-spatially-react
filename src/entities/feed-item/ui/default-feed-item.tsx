import { PostInterface, PostTypes } from "@/shared/types";

import { useFeedItemHook } from "../model";
import {
    FeedActionButtons,
    FeedContentText,
    FeedHeader,
    FeedPreview,
    QuoteOrRepostPost,
    QuotePostContent,
} from "./feed-item-components";

interface FeedItemProps {
    feed: PostInterface;
}

const DefaultFeedItem = ({ feed }: FeedItemProps) => {
    const { handleOpenFeedPage, handleLikeFeed } = useFeedItemHook({ feed });

    return (
        <div
            className="flex flex-col
                        border border-white rounded-xl p-4"
        >
            <FeedHeader
                author={feed.arPostInfo.author}
                feedType={feed.type}
                createdAt={feed.createdAt}
                onClick={handleOpenFeedPage}
            />

            <QuotePostContent quote={feed.quote} />

            {feed.type === PostTypes.POST ? (
                <>
                    <FeedPreview previewId={feed.arPostInfo.previewId} />

                    <FeedContentText text={feed.arPostInfo.content} />

                    <FeedActionButtons userLike={feed.userLike} handleLikeFeed={handleLikeFeed} />
                </>
            ) : (
                <QuoteOrRepostPost feed={feed} handleLikeFeed={handleLikeFeed} />
            )}
        </div>
    );
};

export { DefaultFeedItem };
