import { PostCommentInterface, PostImageInterface, PostInterface, PostTypes, PostVideoInterface } from "@/shared/types";

import { useDetailFeedItemHook } from "../model";
import {
    FeedActionButtons,
    FeedCommentItem,
    FeedContentText,
    FeedHeader,
    FeedMediaGallery,
    QuoteOrRepostPost,
    QuotePostContent,
} from "./feed-item-components";

interface FeedItemProps {
    feed: PostInterface;
    feedImages: PostImageInterface[];
    feedVideos: PostVideoInterface[];
    feedComments: PostCommentInterface[];
}
const DetailsFeedItem = ({ feed, feedImages, feedVideos, feedComments }: FeedItemProps) => {
    const { handleLikeFeed } = useDetailFeedItemHook({ feedId: feed.id });

    return (
        <div className="flex flex-col p-4">
            <FeedHeader author={feed.arPostInfo.author} feedType={feed.type} createdAt={feed.createdAt} />

            <QuotePostContent quote={feed.quote} />

            {feed.type === PostTypes.POST ? (
                <>
                    <FeedMediaGallery
                        feedImages={feedImages}
                        feedVideos={feedVideos}
                        previewId={feed.arPostInfo.previewId}
                    />

                    <FeedContentText text={feed.arPostInfo.content} />

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

            {feedComments.map((comment) => {
                return <FeedCommentItem key={comment.id} comment={comment} />;
            })}
        </div>
    );
};

export { DetailsFeedItem };
