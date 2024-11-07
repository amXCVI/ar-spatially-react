import { useUserContext } from "@/shared/stores";
import { ObjectCommentInterface } from "@/shared/types";

const useCommentHook = ({
    comment,
    onEditComment,
    onDeleteComent,
}: {
    comment: ObjectCommentInterface;
    onEditComment: ({ commentId, text }: { commentId: number; text: string }) => void;
    onDeleteComent: ({ commentId }: { commentId: number }) => void;
}) => {
    const { user } = useUserContext();

    const handleEditComment = () => {
        onEditComment({ commentId: comment.id, text: comment.commentText });
    };

    const handleDeleteComment = () => {
        onDeleteComent({ commentId: comment.id });
    };

    console.log(user, comment);

    return { isMyComment: user && user.userId === comment.author.userId, handleEditComment, handleDeleteComment };
};

export { useCommentHook };
