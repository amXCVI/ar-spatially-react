import { PostInterface, PostTypes } from "@/shared/types";

import { useFeedItemHook } from "../model";
import {
    FeedActionButtons,
    FeedContentText,
    FeedHeader,
    FeedPreview,
    FeedTag,
    QuoteOrRepostPost,
    QuotePostContent,
} from "./feed-item-components";

interface FeedItemProps {
    feed: PostInterface;
}

const DefaultFeedItem = ({ feed }: FeedItemProps) => {
    const { handleOpenFeedPage, handleLikeFeed, handleDeleteFeed, handleSubscribe, isMyFeed, subscribtion } =
        useFeedItemHook({ feed });

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
                isMyFeed={isMyFeed}
                subscribtion={subscribtion}
                handleSubscribe={handleSubscribe}
                handleDeleteFeed={handleDeleteFeed}
            />

            <QuotePostContent quote={feed.quote} />

            {feed.type === PostTypes.POST ? (
                <>
                    <FeedPreview previewId={feed.arPostInfo.previewId} />

                    <FeedContentText text={feed.arPostInfo.content} />

                    {feed.arPostInfo.postTags?.map((item) => {
                        return <FeedTag key={item.id + item.userId + item.postInfoId} tag={item} />;
                    })}

                    <FeedActionButtons userLike={feed.userLike} handleLikeFeed={handleLikeFeed} isMyPost={isMyFeed} />
                </>
            ) : (
                <QuoteOrRepostPost feed={feed} handleLikeFeed={handleLikeFeed} />
            )}
        </div>
    );
};

export { DefaultFeedItem };
