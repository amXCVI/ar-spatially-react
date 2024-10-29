import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";

import { ApiEndpoints } from "@/shared/api";
import { PostCommentInterface, PostImageInterface, PostVideoInterface } from "@/shared/types";

const useFeedDetailsHook = ({ feedId, countComments }: { feedId: string; countComments: number }) => {
    const [feedImages, setFeedImages] = useState<PostImageInterface[]>([]);
    const [feedVideos, setFeedVideos] = useState<PostVideoInterface[]>([]);
    const [feedComments, setFeedComments] = useState<PostCommentInterface[]>([]);

    const [newCommentValue, setNewCommentValue] = useState<string>("");
    const [editingCommentId, setEditingCommentId] = useState<number | null>(null);

    const inputRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        // Получаю для поста весь контент
        // Все картинки
        // Все видео
        // Все комментарии
        ApiEndpoints.post.getImagesByPostId({ postId: feedId }).then((res) => {
            if (res) {
                setFeedImages(res);
            }
        });
        ApiEndpoints.post.getVideosByPostId({ postId: feedId }).then((res) => {
            if (res) {
                setFeedVideos(res);
            }
        });

        if (countComments > 0) {
            ApiEndpoints.post.getCommentsByPostId({ postId: feedId }).then((res) => {
                setFeedComments(res);
            });
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
        ApiEndpoints.post.deleteCommentById({ commentId }).then(() => {
            setFeedComments((e) => e.filter((item) => item.id !== commentId));
        });
    };

    const handleCreateComment = () => {
        if (!newCommentValue) {
            return;
        }

        if (editingCommentId) {
            ApiEndpoints.post
                .updateCommentById({ commentId: editingCommentId, commentText: newCommentValue })
                .then((res) => {
                    setFeedComments((e) =>
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
            ApiEndpoints.post
                .createComment({ postId: feedId, commentText: newCommentValue })
                .then((res) => {
                    setFeedComments((e) => [...e, res]);
                })
                .finally(() => {
                    setNewCommentValue("");
                });
        }
    };

    return {
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
    };
};

export { useFeedDetailsHook };
