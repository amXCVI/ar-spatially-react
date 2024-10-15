import { PostInterface } from "@/shared/types";

interface FeedItemProps {
    feed: PostInterface;
}

const FeedItem = ({ feed }: FeedItemProps) => {
    return (
        <div className="flex flex-col">
            <div className="flex gap-4">
                <img
                    src={`${import.meta.env.VITE_APP_API_BASE_URL}gateway/file/get?fileId=${feed.arPostInfo.author.avatarId}`}
                    className="rounded-full aspect-square w-16"
                />
                <b>{feed.arPostInfo.author.name}</b>
            </div>

            <div>
                <img
                    src={`${import.meta.env.VITE_APP_API_BASE_URL}gateway/file/get?fileId=${feed.arPostInfo.previewId}`}
                    className="max-w-prose"
                />
            </div>

            <span>{feed.arPostInfo.content}</span>
        </div>
    );
};

export { FeedItem };
