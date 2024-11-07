import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";

import { ApiEndpoints } from "@/shared/api";
import { ObjectCommentInterface } from "@/shared/types";

const useObjectCommentsHook = ({ objectId, countComments }: { objectId: string; countComments?: number }) => {
    const inputRef = useRef<HTMLTextAreaElement>(null);
    const [commentsList, setCommentsList] = useState<ObjectCommentInterface[]>([]);

    const [newCommentValue, setNewCommentValue] = useState<string>("");
    const [editingCommentId, setEditingCommentId] = useState<number | null>(null);

    useEffect(() => {
        if (countComments) {
            ApiEndpoints.objectComment.findComentsByObject({ objectId }).then((res) => {
                setCommentsList(res);
            });
        }
    }, [countComments, objectId]);

    const handleKeyDown = async (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleCreateComment();
        }
    };

    const onChangeComment = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setNewCommentValue(e.target.value);
    };

    const onEditComment = ({ commentId, text }: { commentId: number; text: string }) => {
        setNewCommentValue(text);
        setEditingCommentId(commentId);
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    const onDeleteComent = ({ commentId }: { commentId: number }) => {
        ApiEndpoints.objectComment.deleteCommentById({ commentId }).then(() => {
            setCommentsList((e) => e.filter((item) => item.id !== commentId));
        });
    };

    const handleCreateComment = () => {
        if (!newCommentValue) {
            return;
        }

        if (editingCommentId) {
            ApiEndpoints.objectComment
                .updateCommentById({ commentId: editingCommentId, commentText: newCommentValue })
                .then((res) => {
                    setCommentsList((e) =>
                        e.map((item) =>
                            item.id === res.id
                                ? { ...item, updatedAt: res.updatedAt, commentText: res.commentText }
                                : item,
                        ),
                    );
                })
                .finally(() => {
                    setEditingCommentId(null);
                    setNewCommentValue("");
                });
        } else {
            ApiEndpoints.objectComment
                .createComment({ objectId, commentText: newCommentValue })
                .then((res) => {
                    console.log(res);
                    //! setCommentsList((e) => [...e, res]);
                })
                .finally(() => {
                    setNewCommentValue("");
                });
        }
    };

    return {
        inputRef,
        commentsList,
        newCommentValue,
        handleKeyDown,
        onChangeComment,
        onEditComment,
        onDeleteComent,
        handleCreateComment,
    };
};

export { useObjectCommentsHook };
