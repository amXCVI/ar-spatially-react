import { ReactNode } from "react";
import { Link } from "react-router-dom";

import { routes } from "@/shared/config";
import { SearchParamsConstants } from "@/shared/config/constants";
import { MarkerInterface, ObjectViewerModes } from "@/shared/types";

import ArIcon from "../assets/ar-icon.svg?react";
import CommentIcon from "../assets/comment-icon.svg?react";
import LikeIcon from "../assets/like-icon.svg?react";
import LocationIcon from "../assets/location-icon.svg?react";
import ShareIcon from "../assets/share-icon.svg?react";

import { useObjectActionsHook } from "../model";

const ObjectViewerActionButtons = ({
    object,
    userLike,
    setViewerModalMode,
    handleLikeObject,
}: {
    object: MarkerInterface;
    userLike: boolean;
    setViewerModalMode: (e: ObjectViewerModes) => void;
    handleLikeObject: () => void;
}) => {
    const { handleShareObject, handleCommentObject, handleViewObjectOnMap, handleViewArObject } = useObjectActionsHook({
        object,
        setViewerModalMode,
    });

    return (
        <div className="flex gap-4">
            <ActionButton action={handleLikeObject} icon={<LikeIcon style={{ fill: userLike ? "red" : "white" }} />} />
            <ActionButton action={handleCommentObject} icon={<CommentIcon />} />
            <ActionButton action={handleShareObject} icon={<ShareIcon />} />
            <Link
                to={`/${routes.map}?${SearchParamsConstants.objectIdSearchParamsKey}=${object.id}`}
                state={{ object: object }}
            >
                <ActionButton action={handleViewObjectOnMap} icon={<LocationIcon />} />
            </Link>

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
