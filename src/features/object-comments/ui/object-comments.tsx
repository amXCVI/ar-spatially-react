import { Comment } from "@/entities/comment";
import { ObjectViewerHeader } from "@/entities/object-viewer-info";

import { ObjectInterface } from "@/shared/types";

import { useObjectCommentsHook } from "../model";

const ObjectComments = ({ object }: { object: ObjectInterface }) => {
    const {
        inputRef,
        commentsList,
        newCommentValue,
        handleKeyDown,
        onChangeComment,
        onEditComment,
        onDeleteComent,
        handleCreateComment,
    } = useObjectCommentsHook({
        objectId: object.id,
        countComments: object.countComments,
    });

    return (
        <div className="flex flex-col gap-4 max-h-full overflow-y-auto">
            <ObjectViewerHeader title={object.title} location={object.location} ownerNickname={object.ownerNickname} />
            <div className="flex flex-col">
                {commentsList.map((comment) => {
                    return (
                        <Comment
                            key={comment.id + "comment_key"}
                            comment={comment}
                            onEditComment={onEditComment}
                            onDeleteComent={onDeleteComent}
                        />
                    );
                })}
            </div>

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
    );
};

export { ObjectComments };
