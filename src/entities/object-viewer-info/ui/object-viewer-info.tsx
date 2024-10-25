import { Fragment } from "react";

import { ObjectInterface } from "@/shared/types";

import { useObjectViewerInfoHook } from "../model";

const ObjectViewerInfo = ({ object }: { object: ObjectInterface }) => {
    const { fullDescription, toggleFullDescriptionText } = useObjectViewerInfoHook();

    return (
        <div className="flex flex-col gap-4 max-h-full overflow-y-auto">
            <ObjectViewerHeader title={object.title} location={object.location} ownerNickname={object.ownerNickname} />
            <p
                className={`manrope-regular-18 text-quick-silver relative 
                    ${fullDescription ? "" : "line-clamp-[10]"} duration-500
                    `}
            >
                {object?.description}
                {fullDescription ? (
                    <Fragment>
                        <span className="ml-2 text-blue-accent cursor-pointer" onClick={toggleFullDescriptionText}>
                            {"Read less"}
                        </span>
                    </Fragment>
                ) : (
                    <Fragment>
                        <span className="absolute bottom-0 left-0 bg-text-shadow bg-blend-darken w-[calc(100%-4rem)] h-7" />
                        <span
                            className="absolute bottom-0 right-0 bg-dark-gray text-white/80 cursor-pointer"
                            onClick={toggleFullDescriptionText}
                        >
                            {"Read more"}
                        </span>
                    </Fragment>
                )}
            </p>
        </div>
    );
};

const ObjectViewerHeader = ({
    title,
    location,
    ownerNickname,
}: {
    title: string;
    location: { lat: number; lng: number };
    ownerNickname?: string;
}) => {
    return (
        <Fragment>
            <div className="flex flex-col items-start mx-auto">
                <h1 className="text-4xl text-ellipsis overflow-hidden">{title}</h1>
                <span className="text-quick-silver text-sm">{`${location.lat.toFixed(6)}, ${location.lng.toFixed(6)}`}</span>
            </div>

            <div className="text-quick-silver text-sm mx-auto">{`@${ownerNickname}`}</div>
        </Fragment>
    );
};

export { ObjectViewerInfo, ObjectViewerHeader };
