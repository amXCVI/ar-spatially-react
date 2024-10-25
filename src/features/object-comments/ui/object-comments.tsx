import { Comment } from "@/entities/comment";
import { ObjectViewerHeader } from "@/entities/object-viewer-info";

import { ObjectInterface } from "@/shared/types";

import { useObjectCommentsHook } from "../model";

const ObjectComments = ({ object }: { object: ObjectInterface }) => {
    const { commentsList } = useObjectCommentsHook({ objectId: object.id, countComments: object.countComments });

    return (
        <div className="flex flex-col gap-4 max-h-full overflow-y-auto">
            <ObjectViewerHeader title={object.title} location={object.location} ownerNickname={object.ownerNickname} />
            <div className="flex flex-col">
                {commentsList.map((comment) => {
                    return <Comment key={comment.id + "comment_key"} comment={comment} />;
                })}
            </div>
        </div>
    );
};

export { ObjectComments };
