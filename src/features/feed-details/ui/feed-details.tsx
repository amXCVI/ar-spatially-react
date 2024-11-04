import { DetailsFeedItem } from "@/entities/feed-item";

import { PostInterface } from "@/shared/types";

import { useFeedDetailsHook } from "../model";

const FeedDetails = ({ feed }: { feed: PostInterface }) => {
    const { feedImages, feedVideos, feedComments } = useFeedDetailsHook({
        feedId: feed.id,
        countComments: feed.countComments,
    });

    return (
        <div>
            <DetailsFeedItem feed={feed} feedImages={feedImages} feedVideos={feedVideos} feedComments={feedComments} />
        </div>
    );
};

export { FeedDetails };
