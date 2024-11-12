import { ObjectPreview } from "@/entities/object-preview";
import { ObjectViewerActionButtons } from "@/entities/object-viewer-action-buttons";
import { ObjectViewerInfo } from "@/entities/object-viewer-info";
import { Fragment } from "react/jsx-runtime";

import { ObjectComments } from "@/features/object-comments";

import { ObjectInterface, ObjectViewerModes } from "@/shared/types";
import { BackdropModal } from "@/shared/ui/modals";

import { useObjectViewerHook } from "../model";

const ObjectViewer = () => {
    const {
        isOpenMapModal,
        loading,
        selectedObject,
        viewerModalMode,
        likesData,
        closeModal,
        setViewerModalMode,
        handleLikeObject,
    } = useObjectViewerHook();

    return (
        <BackdropModal isOpen={isOpenMapModal} closeModal={closeModal} className="!bg-dark-bg">
            <div
                className="grid md:grid-cols-2 gap-6 p-6
                            w-full h-full md:h-[60vh] lg:h-[50vh] xl:h-[40vh]"
            >
                {renderModalContent({
                    loading,
                    selectedObject,
                    viewerModalMode,
                    likesData,
                    setViewerModalMode,
                    handleLikeObject,
                })}
            </div>
        </BackdropModal>
    );
};

const renderModalContent = ({
    selectedObject,
    loading,
    viewerModalMode,
    likesData,
    setViewerModalMode,
    handleLikeObject,
}: {
    selectedObject: ObjectInterface | null;
    loading: boolean;
    viewerModalMode: ObjectViewerModes;
    likesData: {
        likes: number;
        userLike: boolean;
    };
    setViewerModalMode: (e: ObjectViewerModes) => void;
    handleLikeObject: () => void;
}) => {
    if (loading || !selectedObject) {
        return <Fragment />;
    }

    switch (viewerModalMode) {
        case ObjectViewerModes.COMMENT:
            return (
                <Fragment>
                    <ObjectComments object={selectedObject} />
                    <div className="flex flex-col items-center gap-4">
                        <ObjectPreview modelId={selectedObject.modelId} previewId={selectedObject.previewId} />
                        <ObjectViewerActionButtons
                            object={selectedObject}
                            userLike={likesData.userLike}
                            handleLikeObject={handleLikeObject}
                            setViewerModalMode={setViewerModalMode}
                        />
                    </div>
                </Fragment>
            );

        case ObjectViewerModes.EDIT:
            return <Fragment />;

        default:
            return (
                <Fragment>
                    <ObjectViewerInfo object={selectedObject} likesCount={likesData.likes} />
                    <div className="flex flex-col items-center gap-4">
                        <ObjectPreview modelId={selectedObject.modelId} previewId={selectedObject.previewId} />
                        <ObjectViewerActionButtons
                            object={selectedObject}
                            userLike={likesData.userLike}
                            handleLikeObject={handleLikeObject}
                            setViewerModalMode={setViewerModalMode}
                        />
                    </div>
                </Fragment>
            );
    }
};

export { ObjectViewer };
