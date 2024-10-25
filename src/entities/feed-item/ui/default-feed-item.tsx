import { PostInterface, PostTypes } from "@/shared/types";
import { AutoTags } from "@/shared/ui/text-with-tags";

import { useFeedItemHook } from "../model";
import {
    FeedActionButtons,
    FeedHeader,
    FeedPreview,
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

            <QuotePostContent quote={feed.quote} tags={feed.quoteTags} />

            {feed.type === PostTypes.POST ? (
                <>
                    <FeedPreview previewId={feed.arPostInfo.previewId} />

                    <AutoTags
                        text={feed.arPostInfo.content}
                        tags={feed.arPostInfo.postTags}
                        className="whitespace-pre-wrap"
                    />

                    <FeedActionButtons userLike={feed.userLike} handleLikeFeed={handleLikeFeed} isMyPost={isMyFeed} />
                </>
            ) : (
                <QuoteOrRepostPost feed={feed} handleLikeFeed={handleLikeFeed} />
            )}
        </div>
    );
};

export { DefaultFeedItem };
