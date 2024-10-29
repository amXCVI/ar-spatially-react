import { useUserContext } from "@/shared/stores";
import { ObjectCommentInterface, PostCommentInterface } from "@/shared/types";

const useCommentHook = ({
    comment,
    onEditComment,
    onDeleteComent,
}: {
    comment: ObjectCommentInterface | PostCommentInterface;
    onEditComment?: ({ commentId, text }: { commentId: number; text: string }) => void;
    onDeleteComent?: ({ commentId }: { commentId: number }) => void;
}) => {
    const { user } = useUserContext();

    const handleEditComment = () => {
        if (onEditComment) {
            onEditComment({ commentId: comment.id, text: comment.commentText });
        }
    };

    const handleDeleteComment = () => {
        if (onDeleteComent) {
            onDeleteComent({ commentId: comment.id });
        }
    };

    return { isMyComment: user && user.userId === comment.author.userId, handleEditComment, handleDeleteComment };
};

export { useCommentHook };
