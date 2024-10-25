import { MarkerInterface, ObjectViewerModes } from "@/shared/types";

const useObjectActionsHook = ({
    object,
    setViewerModalMode,
}: {
    object: MarkerInterface;
    setViewerModalMode: (e: ObjectViewerModes) => void;
}) => {
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
    const handleLikeObject = () => {};
    const handleCommentObject = () => {
        setViewerModalMode(ObjectViewerModes.COMMENT);
    };
    const handleViewObjectOnMap = () => {};
    const handleViewArObject = () => {};
    return { handleShareObject, handleLikeObject, handleCommentObject, handleViewObjectOnMap, handleViewArObject };
};

export { useObjectActionsHook };
