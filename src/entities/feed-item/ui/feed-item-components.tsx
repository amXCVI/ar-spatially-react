import dayjs from "dayjs";
import { ReactNode, useState } from "react";
import { Fragment } from "react/jsx-runtime";

import {
    PostCommentInterface,
    PostCommentTagInterface,
    PostImageInterface,
    PostInterface,
    PostTagInterface,
    PostTypes,
    PostUserInterface,
    PostVideoInterface,
    QuoteTagInterface,
    UserSubscriberInterface,
} from "@/shared/types";
import { AutoTags } from "@/shared/ui/text-with-tags";
import { UserAvatar } from "@/shared/ui/user-avatar";

import CommentIcon from "../assets/comment-icon.svg?react";
import EditIcon from "../assets/edit-icon.svg?react";
import LikeIcon from "../assets/like-icon.svg?react";
import LocationIcon from "../assets/location-icon.svg?react";
import ShareIcon from "../assets/share-icon.svg?react";

import { useFeedTagHook } from "../model";

const FeedHeader = ({
    author,
    createdAt,
    subscribtion,
    onClick,
    isMyFeed = false,
    handleSubscribe,
    handleDeleteFeed,
}: {
    author: PostUserInterface;
    feedType: PostTypes;
    createdAt: number;
    isMyFeed?: boolean;
    subscribtion?: UserSubscriberInterface | undefined;
    onClick?: () => void;
    handleSubscribe?: () => void;
    handleDeleteFeed?: () => void;
}) => {
    return (
        <div className="flex gap-4">
            <UserAvatar avatarId={author.avatarId} className="w-16" />

            <div className="flex flex-col justify-around" onClick={onClick}>
                <b>{author.name}</b>
                <div className="flex gap-2">
                    <span>@{author.nickname}</span>
                    <span>{dayjs(createdAt).format("DD/MM/YYYY")}</span>
                </div>
            </div>

            <div className="flex flex-col ml-auto">
                {isMyFeed ? (
                    <button className="border px-3 rounded-lg text-red-700" onClick={handleDeleteFeed}>
                        Delete
                    </button>
                ) : (
                    <button className="border px-3 rounded-lg text-green-700" onClick={handleSubscribe}>
                        {subscribtion ? "Unfollow" : "Follow"}
                    </button>
                )}
            </div>
        </div>
    );
};

const QuotePostContent = ({ quote, tags }: { quote?: string; tags?: QuoteTagInterface[] }) => {
    if (quote) {
        return (
            <div className="py-4 border-b mb-4 whitespace-pre-wrap">
                <AutoTags text={quote} tags={tags} className="whitespace-pre-wrap" />
            </div>
        );
    } else {
        return <Fragment />;
    }
};

const QuoteOrRepostPost = ({
    feed,
    mediaContent,
    handleLikeFeed,
}: {
    feed: PostInterface;
    mediaContent?: ReactNode;
    handleLikeFeed: () => void;
}) => {
    if (feed.type !== PostTypes.QUOTE && feed.type !== PostTypes.REPOST) {
        return <Fragment />;
    }

    return (
        <div className="flex flex-col">
            <QuoteOriginalPostHeader author={feed.arPostInfo.author} createdAt={feed.arPostInfo.createdAt} />
            {mediaContent ?? <FeedPreview previewId={feed.arPostInfo.previewId} />}
            <FeedActionsRow
                location={feed.arPostInfo.location}
                likes={feed.likes}
                userLike={feed.userLike}
                handleLikeFeed={handleLikeFeed}
            />
            <AutoTags text={feed.arPostInfo.content} tags={feed.arPostInfo.postTags} className="whitespace-pre-wrap" />
        </div>
    );
};

const QuoteOriginalPostHeader = ({ author, createdAt }: { author: PostUserInterface; createdAt: number }) => {
    return (
        <div className="flex gap-4">
            <img
                src={`${import.meta.env.VITE_APP_API_BASE_URL}gateway/file/get?fileId=${author.avatarId}`}
                alt={author.name}
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
                    alt=""
                    className="max-w-prose w-full"
                />
            </div>
        );
    } else {
        return <Fragment />;
    }
};

const FeedContentText = ({ text }: { text?: string }) => {
    return <div className="whitespace-pre-wrap">{text}</div>;
};

const FeedActionButtons = ({
    handleLikeFeed,
    userLike,
    isMyPost = false,
}: {
    handleLikeFeed: () => void;
    userLike: boolean;
    isMyPost?: boolean;
}) => {
    return (
        <div className="flex gap-8">
            <div className="cursor-pointer" onClick={handleLikeFeed}>
                <LikeIcon style={{ fill: userLike ? "red" : "white" }} />
            </div>
            <div className="cursor-pointer">
                <CommentIcon />
            </div>
            <div className="cursor-pointer">
                <ShareIcon />
            </div>
            {isMyPost && (
                <div className="cursor-pointer">
                    <EditIcon />
                </div>
            )}
        </div>
    );
};

const FeedActionsRow = ({
    location,
    likes,
    userLike,
    handleLikeFeed,
}: {
    location?: string;
    likes: number;
    handleLikeFeed: () => void;
    userLike: boolean;
}) => {
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

            <FeedActionButtons userLike={userLike} handleLikeFeed={handleLikeFeed} />
        </div>
    );
};

const FeedCommentItem = ({ comment }: { comment: PostCommentInterface }) => {
    return (
        <div className="flex flex-col">
            <div className="flex py-2 border-b text-sm">
                <img
                    className="w-12 aspect-square rounded-full"
                    alt={comment.author.name}
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
            <AutoTags text={comment.commentText} tags={comment.commentTags} />
        </div>
    );
};

export const FeedTag = ({ tag }: { tag: PostCommentTagInterface | PostTagInterface | QuoteTagInterface }) => {
    const { handleClickTag } = useFeedTagHook({ tag });
    return (
        <span onClick={handleClickTag} className="text-blue-accent cursor-pointer underline">{`@${tag.nickname}`}</span>
    );
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
                                    <img src={src} alt={"gallery-image"} className={className} />
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
    FeedTag as FeedCommentTag,
    FeedMediaGallery,
};
