import { useEffect, useState } from "react";

import { ApiEndpoints } from "@/shared/api";
import { PostCommentInterface, PostImageInterface, PostVideoInterface } from "@/shared/types";

const useFeedDetailsHook = ({ feedId, countComments }: { feedId: string; countComments: number }) => {
    const [feedImages, setFeedImages] = useState<PostImageInterface[]>([]);
    const [feedVideos, setFeedVideos] = useState<PostVideoInterface[]>([]);
    const [feedComments, setFeedComments] = useState<PostCommentInterface[]>([]);

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

    return { feedImages, feedVideos, feedComments };
};

export { useFeedDetailsHook };
