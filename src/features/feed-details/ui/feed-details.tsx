import { Comment } from "@/entities/comment";
import { DetailsFeedItem } from "@/entities/feed-item";

import { PostInterface } from "@/shared/types";

import { useFeedDetailsHook } from "../model";

const FeedDetails = ({ feed }: { feed: PostInterface }) => {
    const {
        feedImages,
        feedVideos,
        feedComments,
        inputRef,
        newCommentValue,
        handleKeyDown,
        onChangeComment,
        onEditComment,
        onDeleteComent,
        handleCreateComment,
    } = useFeedDetailsHook({
        feedId: feed.id,
        countComments: feed.countComments,
    });

    return (
        <div className="flex flex-col">
            <DetailsFeedItem feed={feed} feedImages={feedImages} feedVideos={feedVideos} />

            <div>
                {feedComments.map((comment) => {
                    return (
                        <Comment
                            key={comment.id + comment.createdAt + "comment_key"}
                            comment={comment}
                            onEditComment={onEditComment}
                            onDeleteComent={onDeleteComent}
                        />
                    );
                })}

                <div className="w-full relative">
                    <textarea
                        ref={inputRef}
                        className="w-full"
                        value={newCommentValue}
                        onChange={onChangeComment}
                        onKeyDown={handleKeyDown}
                    />

                    {newCommentValue && (
                        <div onClick={handleCreateComment} className="absolute right-1 bottom-1 cursor-pointer border">
                            Send
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export { FeedDetails };
