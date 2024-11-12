import dayjs from "dayjs";

import { ObjectCommentInterface } from "@/shared/types";
import { OptionButton, OptionDots } from "@/shared/ui/option-dots";
import { AutoTags } from "@/shared/ui/text-with-tags";
import { UserAvatar } from "@/shared/ui/user-avatar";

import { useCommentHook } from "../model";

const Comment = ({
    comment,
    onEditComment,
    onDeleteComent,
}: {
    comment: ObjectCommentInterface;
    onEditComment: ({ commentId, text }: { commentId: number; text: string }) => void;
    onDeleteComent: ({ commentId }: { commentId: number }) => void;
}) => {
    const { isMyComment, handleEditComment, handleDeleteComment } = useCommentHook({
        comment,
        onEditComment,
        onDeleteComent,
    });

    return (
        <div className="flex flex-col w-full">
            <div className="flex gap-2 items-center">
                <div className="w-9 h-9 aspect-square rounded-full overflow-hidden">
                    <UserAvatar avatarId={comment.author.avatarId} className="w-full h-full" />
                </div>
                <div className="flex flex-col text-white">
                    <span>{comment.author.name ?? comment.author.nickname}</span>
                    <div className="flex gap-2">
                        <span>{`@${comment.author.nickname}`}</span>
                        <span>{dayjs(comment.createdAt).format("DD/MM/YYYY")}</span>
                    </div>
                </div>

                {isMyComment && (
                    <OptionDots className="ml-auto">
                        <OptionButton onClick={handleEditComment}>Edit</OptionButton>
                        <OptionButton onClick={handleDeleteComment}>delete</OptionButton>
                    </OptionDots>
                )}
            </div>
            <AutoTags text={comment.commentText} tags={comment.commentTags} />
        </div>
    );
};

export { Comment };
