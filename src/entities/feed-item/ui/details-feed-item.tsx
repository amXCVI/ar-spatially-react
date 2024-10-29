import { PostCommentInterface, PostImageInterface, PostInterface, PostTypes, PostVideoInterface } from "@/shared/types";
import { AutoTags } from "@/shared/ui/text-with-tags";

import { useDetailFeedItemHook } from "../model";
import {
    FeedActionButtons,
    FeedHeader,
    FeedMediaGallery,
    QuoteOrRepostPost,
    QuotePostContent,
} from "./feed-item-components";

interface FeedItemProps {
    feed: PostInterface;
    feedImages: PostImageInterface[];
    feedVideos: PostVideoInterface[];
}
const DetailsFeedItem = ({ feed, feedImages, feedVideos }: FeedItemProps) => {
    const { handleLikeFeed } = useDetailFeedItemHook({ feedId: feed.id });

    return (
        <div className="flex flex-col p-4 overflow-scroll h-min">
            <FeedHeader author={feed.arPostInfo.author} feedType={feed.type} createdAt={feed.createdAt} />

            <QuotePostContent quote={feed.quote} />

            {feed.type === PostTypes.POST ? (
                <>
                    <FeedMediaGallery
                        feedImages={feedImages}
                        feedVideos={feedVideos}
                        previewId={feed.arPostInfo.previewId}
                    />

                    <AutoTags
                        text={feed.arPostInfo.content}
                        tags={feed.arPostInfo.postTags}
                        className="whitespace-pre-wrap"
                    />

                    <FeedActionButtons handleLikeFeed={handleLikeFeed} userLike={feed.userLike} />
                </>
            ) : (
                <QuoteOrRepostPost
                    feed={feed}
                    mediaContent={
                        <FeedMediaGallery
                            feedImages={feedImages}
                            feedVideos={feedVideos}
                            previewId={feed.arPostInfo.previewId}
                        />
                    }
                    handleLikeFeed={handleLikeFeed}
                />
            )}
        </div>
    );
};

export { DetailsFeedItem };
