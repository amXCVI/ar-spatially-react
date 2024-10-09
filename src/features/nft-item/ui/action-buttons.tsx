import { MouseEvent } from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

import EdtIcon from "../assets/edit-icon.svg?react";
import ShareIcon from "../assets/share-icon.svg?react";
import ViewArIcon from "../assets/view-ar-icon.svg?react";

export const ShareButton = ({
    share,
    title,
    description,
    isMyObject,
}: {
    share: ({ title, text, url }: { title: string; text: string; url: string }) => void;
    title?: string;
    description?: string;
    isMyObject: boolean;
}) => {
    return (
        <div
            onClick={() => {
                share({
                    title: title ?? "Marker",
                    text: description ?? "",
                    url: window.location.href,
                });
            }}
            className={`flex gap-3 justify-center items-center p-2
                        cursor-pointer h-10 aspect-square
                        rounded-[30px] border border-white/25 bg-granite-gray/35 backdrop-blur-sm
                        ${!isMyObject && "roboto-regular-13 text-white text-nowrap w-full"}
                      `}
        >
            <ShareIcon />
            {!isMyObject && "Share NFT"}
        </div>
    );
};

export const EditButton = ({
    isMyObject,
    onClick,
}: {
    isMyObject: boolean;
    onClick: (e: MouseEvent<HTMLDivElement>) => void;
}) => {
    if (!isMyObject) {
        return <Fragment />;
    }

    return (
        <div
            className="flex gap-3 ${isActive ? justify-center items-center p-2
                       cursor-pointer h-10 aspect-square
                       rounded-[30px] border border-white/25 bg-granite-gray/35 backdrop-blur-sm
                      "
            onClick={onClick}
        >
            <EdtIcon />
        </div>
    );
};

export const ViewArButton = ({
    isMyObject,
    onClick,
}: {
    isMyObject: boolean;
    onClick: (e: MouseEvent<HTMLDivElement>) => void;
}) => {
    return (
        <div
            className={`flex gap-3 justify-center items-center p-2
                        cursor-pointer h-10 aspect-square
                        rounded-[30px] border border-white/25 bg-granite-gray/35 backdrop-blur-sm
                        ${!isMyObject && "roboto-regular-13 text-white text-nowrap w-full"}
                       `}
            onClick={onClick}
        >
            <ViewArIcon />
            {!isMyObject && "View AR"}
        </div>
    );
};

export const ReceiveButton = ({ isMyObject }: { isMyObject: boolean }) => {
    if (!isMyObject) {
        return <Fragment />;
    }

    return (
        <Link to={import.meta.env.VITE_APP_DGES_URL} className="w-full">
            <div
                className={`flex gap-3 justify-center items-center p-2
                        cursor-pointer h-10 aspect-square
                        rounded-[30px] border border-white/25 bg-granite-gray/35 backdrop-blur-sm
                        roboto-regular-13 text-white text-nowrap w-full
                      `}
            >
                Recieve NFT
            </div>
        </Link>
    );
};

export const DesctopReceiveButton = ({ isMyObject }: { isMyObject: boolean }) => {
    if (!isMyObject) {
        return <Fragment />;
    }

    return (
        <Link to={import.meta.env.VITE_APP_DGES_URL} className="w-full">
            <div
                className={`flex gap-3 justify-center items-center p-2
                        cursor-pointer h-10 aspect-square
                        rounded-[30px] border-2 border-white/25 bg-dark-gray backdrop-blur-sm
                        onest-regular-18 text-white text-nowrap w-full
                      `}
            >
                Recieve NFT
            </div>
        </Link>
    );
};

export const DesctopViewArButton = ({ onClick }: { onClick: (e: MouseEvent<HTMLDivElement>) => void }) => {
    return (
        <div
            className={`flex items-center gap-2.5 px-4 py-3 onest-regular-18 text-white cursor-pointer`}
            onClick={onClick}
        >
            <ViewArIcon />
            View AR
        </div>
    );
};

export const DesctopShareButton = ({
    share,
    title,
    description,
}: {
    share: ({ title, text, url }: { title: string; text: string; url: string }) => void;
    title?: string;
    description?: string;
}) => {
    return (
        <div
            onClick={() => {
                share({
                    title: title ?? "Marker",
                    text: description ?? "",
                    url: window.location.href,
                });
            }}
            className={`flex gap-3 justify-center items-center p-2
                        cursor-pointer h-10 aspect-square
                        ml-auto
                      `}
        >
            <ShareIcon />
        </div>
    );
};

export const DesctopEditButton = ({ isMyObject }: { isMyObject: boolean }) => {
    if (!isMyObject) {
        return <Fragment />;
    }

    return (
        <div
            className="flex gap-3 justify-center items-center p-2
                        cursor-pointer h-10 aspect-square
                      "
        >
            <EdtIcon />
        </div>
    );
};
