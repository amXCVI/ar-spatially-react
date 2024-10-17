import dayjs from "dayjs";
import { ReactNode, useState } from "react";
import { Fragment } from "react/jsx-runtime";

import {
    PostCommentInterface,
    PostCommentTagInterface,
    PostImageInterface,
    PostInterface,
    PostTypes,
    PostUserInterface,
    PostVideoInterface,
} from "@/shared/types";

import CommentIcon from "../assets/comment-icon.svg?react";
import EditIcon from "../assets/edit-icon.svg?react";
import LikeIcon from "../assets/like-icon.svg?react";
import LocationIcon from "../assets/location-icon.svg?react";
import ShareIcon from "../assets/share-icon.svg?react";

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

const QuoteOrRepostPost = ({ feed, mediaContent }: { feed: PostInterface; mediaContent?: ReactNode }) => {
    if (feed.type !== PostTypes.QUOTE && feed.type !== PostTypes.REPOST) {
        return <Fragment />;
    }

    return (
        <div className="flex flex-col">
            <QuoteOriginalPostHeader author={feed.arPostInfo.author} createdAt={feed.arPostInfo.createdAt} />
            {mediaContent ?? <FeedPreview previewId={feed.arPostInfo.previewId} />}
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

const FeedCommentItem = ({ comment }: { comment: PostCommentInterface }) => {
    return (
        <div className="flex flex-col">
            <div className="flex py-2 border-b text-sm">
                <img
                    className="w-12 aspect-square rounded-full"
                    src={`${import.meta.env.VITE_APP_API_BASE_URL}gateway/file/get?fileId=${comment.author.avatarId}`}
                />
                <div className="flex flex-col justify-center gap-1">
                    <span>{comment.author.name ?? `@${comment.author.nickname}`}</span>
                    <div className="flex gap-2">
                        <span>{`@${comment.author.nickname}`}</span>
                        <span>{dayjs(comment.createdAt).format("DD/MM/YYYY")}</span>
                    </div>
                </div>
            </div>
            <div>{comment.commentText}</div>
            <div className="flex gap-2 flex-wrap">
                {comment.commentTags?.map((item) => (
                    <FeedCommentTag key={item.id + item.userId + item.commentId} commentTag={item} />
                ))}
            </div>
        </div>
    );
};

const FeedCommentTag = ({ commentTag }: { commentTag: PostCommentTagInterface }) => {
    return <span className="text-blue-accent cursor-pointer underline">{`@${commentTag.nickname}`}</span>;
};

const FeedMediaGallery = ({
    feedImages,
    feedVideos,
    previewId,
}: {
    feedImages: PostImageInterface[];
    feedVideos: PostVideoInterface[];
    previewId?: string;
}) => {
    enum MediaTypes {
        VIDEO = "video",
        IMAGE = "image",
    }

    const media = [
        ...feedImages.map((item) => {
            return { ...item, type: MediaTypes.IMAGE };
        }),
        ...feedVideos.map((item) => {
            return { ...item, type: MediaTypes.VIDEO };
        }),
    ];

    const [active, setActive] = useState(media[0] ?? null);

    return (
        <div className="grid gap-4">
            {active ? (
                <div>
                    {active.type === MediaTypes.IMAGE ? (
                        <img
                            className="h-auto w-full max-w-full rounded-lg object-contain object-center md:h-[480px]"
                            src={`${import.meta.env.VITE_APP_API_BASE_URL}gateway/file/get?fileId=${active?.fileId}`}
                            alt=""
                        />
                    ) : (
                        <video
                            className="h-auto w-full max-w-full rounded-lg object-contain object-center md:h-[480px]"
                            src={`${import.meta.env.VITE_APP_API_BASE_URL}gateway/file/get?fileId=${active?.fileId}`}
                            autoPlay
                            muted
                            controls={true}
                            loop
                        />
                    )}
                </div>
            ) : previewId ? (
                <img
                    className="h-auto w-full max-w-full rounded-lg object-contain object-center md:h-[480px]"
                    src={`${import.meta.env.VITE_APP_API_BASE_URL}gateway/file/get?fileId=${previewId}`}
                    alt=""
                />
            ) : (
                <Fragment />
            )}
            <div className="grid grid-cols-5 gap-4">
                {media.length > 1 ? (
                    media.map((item, index) => {
                        const src = `${import.meta.env.VITE_APP_API_BASE_URL}gateway/file/get?fileId=${item.fileId}`;
                        const className =
                            "h-20 max-w-full cursor-pointer rounded-lg object-cover object-center mx-auto";
                        return (
                            <div key={index} onClick={() => setActive(item)}>
                                {item.type === MediaTypes.IMAGE ? (
                                    <img src={src} alt="gallery-image" className={className} />
                                ) : (
                                    <video src={src} className={className} controls={false} />
                                )}
                            </div>
                        );
                    })
                ) : (
                    <Fragment />
                )}
            </div>
        </div>
    );
};

export {
    FeedHeader,
    FeedActionsRow,
    FeedActionButtons,
    FeedContentText,
    FeedPreview,
    QuoteOriginalPostHeader,
    QuoteOrRepostPost,
    QuotePostContent,
    FeedCommentItem,
    FeedCommentTag,
    FeedMediaGallery,
};
