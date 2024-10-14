import { PostInterface } from "@/shared/types";

interface FeedItemProps {
    feed: PostInterface;
}

const FeedItem = ({ feed }: FeedItemProps) => {
    return (
        <div className="flex flex-col">
            <b>{feed.arPostInfo.author.name}</b>
            <span>{feed.arPostInfo.content}</span>
        </div>
    );
};

export { FeedItem };
