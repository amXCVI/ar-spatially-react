import { ApiEndpoints } from "@/shared/api";
import { allFeedsActions, selectedFeedActions, subscribtionsActions } from "@/shared/stores/feeds-store";

import { useAppDispatch } from "../redux-service";

const useFeedActionsHook = () => {
    const dispatch = useAppDispatch();

    // Лайк/Дизлайк поста
    // Если в общей ленте - меняю состояние стора в redux
    // Если на странице поста - тоже меняю состояние стора
    // Если не в общей ленте - вызываю likeCallback
    const handleLikePost = ({
        postId,
        likeCallback,
    }: {
        postId: string;
        likeCallback?: (e: { userLike: boolean; likesCount: number }) => void;
    }) => {
        ApiEndpoints.post.likeUnlikeByPostId({ postId }).then((res) => {
            dispatch(allFeedsActions.setLikeToPost({ postId: postId, userLike: res.userLike, likesCount: res.likes }));
            dispatch(selectedFeedActions.setLikeToCurrentFeed({ userLike: res.userLike, likesCount: res.likes }));

            if (likeCallback) {
                likeCallback({ userLike: res.userLike, likesCount: res.likes });
            }
        });
    };

    const handleSubscribeUser = ({ userId }: { userId: string }) => {
        ApiEndpoints.user.subscribeUser({ userIdFrom: userId }).then((res) => {
            if (res) {
                dispatch(subscribtionsActions.addSubscribtion({ subscribtion: { userId: userId } }));
            } else {
                dispatch(subscribtionsActions.deleteSubscribtion({ subscribtionId: userId }));
            }
        });
    };

    return { handleLikePost, handleSubscribeUser };
};

export { useFeedActionsHook };
