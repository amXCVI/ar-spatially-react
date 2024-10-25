import { ReactNode } from "react";

import { MarkerInterface, ObjectViewerModes } from "@/shared/types";

import ArIcon from "../assets/ar-icon.svg?react";
import CommentIcon from "../assets/comment-icon.svg?react";
import LikeIcon from "../assets/like-icon.svg?react";
import LocationIcon from "../assets/location-icon.svg?react";
import ShareIcon from "../assets/share-icon.svg?react";

import { useObjectActionsHook } from "../model";

const ObjectViewerActionButtons = ({
    object,
    setViewerModalMode,
}: {
    object: MarkerInterface;
    setViewerModalMode: (e: ObjectViewerModes) => void;
}) => {
    const { handleShareObject, handleLikeObject, handleCommentObject, handleViewObjectOnMap, handleViewArObject } =
        useObjectActionsHook({ object, setViewerModalMode });

    return (
        <div className="flex gap-4">
            <ActionButton action={handleLikeObject} icon={<LikeIcon />} />
            <ActionButton action={handleCommentObject} icon={<CommentIcon />} />
            <ActionButton action={handleShareObject} icon={<ShareIcon />} />
            <ActionButton action={handleViewObjectOnMap} icon={<LocationIcon />} />
            <ActionButton action={handleViewArObject} icon={<ArIcon />} />
        </div>
    );
};

const ActionButton = ({ icon, action }: { icon: ReactNode; action: () => void }) => {
    return (
        <div onClick={action} className="cursor-pointer p-1">
            {icon}
        </div>
    );
};

export { ObjectViewerActionButtons };
