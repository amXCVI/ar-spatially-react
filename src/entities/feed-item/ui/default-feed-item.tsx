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
    const { handleOpenFeedPage } = useFeedItemHook({ feed });

    return (
        <div
            className="flex flex-col
                        border border-white rounded-xl p-4"
            onClick={handleOpenFeedPage}
        >
            <FeedHeader author={feed.arPostInfo.author} feedType={feed.type} createdAt={feed.createdAt} />

            <QuotePostContent quote={feed.quote} />

            {feed.type === PostTypes.POST ? (
                <>
                    <FeedPreview previewId={feed.arPostInfo.previewId} />

                    <FeedContentText text={feed.arPostInfo.content} />

                    <FeedActionButtons />
                </>
            ) : (
                <QuoteOrRepostPost feed={feed} />
            )}
        </div>
    );
};

export { DefaultFeedItem };
