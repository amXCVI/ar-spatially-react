import { useUserContext } from "@/shared/stores";
import { useAuthContext } from "@/shared/stores/auth-provider";
import { MarkerInterface, ObjectViewerModes } from "@/shared/types";

const useObjectActionsHook = ({
    object,
    setViewerModalMode,
    handleLikeObject,
}: {
    object: MarkerInterface;
    setViewerModalMode: (e: ObjectViewerModes) => void;
    handleLikeObject: () => void;
}) => {
    const { checkAuth } = useAuthContext();
    const { user } = useUserContext();

    const likeObject = () => {
        checkAuth().then(() => {
            handleLikeObject();
        });
    };

    const handleShareObject = () => {
        if (navigator.share) {
            navigator
                .share({
                    title: object.title,
                    text: object.description,
                    url: window.location.href,
                })
                .then(() => console.log("Удалось поделиться"))
                .catch((error) => console.log("Не удалось поделиться", error));
        }
    };
    const handleCommentObject = () => {
        checkAuth().then(() => {
            setViewerModalMode(ObjectViewerModes.COMMENT);
        });
    };
    const handleViewObjectOnMap = () => {};
    const handleViewArObject = () => {
        setViewerModalMode(ObjectViewerModes.AR_VIEW);
    };
    const handleEditIcon = () => {};

    return {
        handleShareObject,
        handleCommentObject,
        handleViewObjectOnMap,
        handleViewArObject,
        likeObject,
        handleEditIcon,
        isMyObject: user?.userId === object.ownerId,
    };
};

export { useObjectActionsHook };
