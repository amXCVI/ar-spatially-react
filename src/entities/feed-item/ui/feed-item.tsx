import dayjs from "dayjs";
import { Fragment } from "react/jsx-runtime";

import { PostInterface, PostTypes, PostUserInterface } from "@/shared/types";

import CommentIcon from "../assets/comment-icon.svg?react";
import EditIcon from "../assets/edit-icon.svg?react";
import LikeIcon from "../assets/like-icon.svg?react";
import LocationIcon from "../assets/location-icon.svg?react";
import ShareIcon from "../assets/share-icon.svg?react";

interface FeedItemProps {
    feed: PostInterface;
}

const FeedItem = ({ feed }: FeedItemProps) => {
    return (
        <div
            className="flex flex-col
                        border border-white rounded-xl p-4"
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

const FeedHeader = ({
    author,
    feedType,
    createdAt,
}: {
    author: PostUserInterface;
    feedType: PostTypes;
    createdAt: number;
}) => {
    return (
        <div className="flex gap-4">
            <img
                src={`${import.meta.env.VITE_APP_API_BASE_URL}gateway/file/get?fileId=${author.avatarId}`}
                className="rounded-full aspect-square w-16"
            />
            <div className="flex flex-col justify-around">
                <b>{author.name}</b>
                <div className="flex gap-2">
                    <span>@{author.nickname}</span>
                    <span>{dayjs(createdAt).format("DD/MM/YYYY")}</span>
                </div>
            </div>

            <span className="ml-auto text-green-400">{feedType}</span>
        </div>
    );
};

const QuotePostContent = ({ quote }: { quote?: string }) => {
    if (quote) {
        return <div className="py-4 border-b mb-4">{quote}</div>;
    } else {
        return <Fragment />;
    }
};

const QuoteOrRepostPost = ({ feed }: { feed: PostInterface }) => {
    if (feed.type !== PostTypes.QUOTE && feed.type !== PostTypes.REPOST) {
        return <Fragment />;
    }

    return (
        <div className="flex flex-col">
            <QuoteOriginalPostHeader author={feed.arPostInfo.author} createdAt={feed.arPostInfo.createdAt} />
            <FeedPreview previewId={feed.arPostInfo.previewId} />
            <FeedActionsRow location={feed.arPostInfo.location} likes={feed.likes} />
            <FeedContentText text={feed.arPostInfo.content} />
        </div>
    );
};

const QuoteOriginalPostHeader = ({ author, createdAt }: { author: PostUserInterface; createdAt: number }) => {
    return (
        <div className="flex gap-4">
            <img
                src={`${import.meta.env.VITE_APP_API_BASE_URL}gateway/file/get?fileId=${author.avatarId}`}
                className="rounded-full aspect-square w-12"
            />
            <div className="flex flex-col justify-around">
                <b>{author.name}</b>
                <div className="flex gap-2">
                    <span>@{author.nickname}</span>
                    <span>{dayjs(createdAt).format("DD/MM/YYYY")}</span>
                </div>
            </div>

            <button className="ml-auto px-4 border rounded-xl">Follow</button>
        </div>
    );
};

const FeedPreview = ({ previewId }: { previewId?: string }) => {
    if (previewId) {
        return (
            <div>
                <img
                    src={`${import.meta.env.VITE_APP_API_BASE_URL}gateway/file/get?fileId=${previewId}`}
                    className="max-w-prose w-full"
                />
            </div>
        );
    } else {
        return <Fragment />;
    }
};

const FeedContentText = ({ text }: { text?: string }) => {
    return <div>{text}</div>;
};

const FeedActionButtons = () => {
    return (
        <div className="flex gap-8">
            <div className="cursor-pointer">
                <LikeIcon />
            </div>
            <div className="cursor-pointer">
                <CommentIcon />
            </div>
            <div className="cursor-pointer">
                <ShareIcon />
            </div>
            <div className="cursor-pointer">
                <EditIcon />
            </div>
        </div>
    );
};

const FeedActionsRow = ({ location, likes }: { location?: string; likes: number }) => {
    return (
        <div className="flex justify-between gap-10">
            <div className="flex gap-1 items-center text-sm">
                <LocationIcon />
                {location}
            </div>

            <div className="flex gap-3 text-sm">
                <span>42K reposts</span>
                <span>42K views</span>
                <span>{`${likes} likes`}</span>
            </div>

            <FeedActionButtons />
        </div>
    );
};

export { FeedItem };
