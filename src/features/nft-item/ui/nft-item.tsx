import { useOutsideClick } from "@ar-kit/shared/hooks";
import { Fragment } from "react/jsx-runtime";

import { MarkerInterface } from "@/shared/types";

import CloseViewerIcon from "../assets/close-viewer-icon.svg?react";
import EdtIcon from "../assets/edit-icon.svg?react";
import ViewArIcon from "../assets/view-ar-icon.svg?react";

import { useNftItemHook } from "../domain";

interface NftItemInterface {
    selectedMarker: MarkerInterface | null;
    onCloseViewer: () => void;
}

const NftItem = ({ selectedMarker, onCloseViewer }: NftItemInterface) => {
    const { previewMode, handlePreview, handleClosePreview, fullDescription, toggleFullDescriptionText, isMyObject } =
        useNftItemHook({ ownerId: selectedMarker?.ownerId ?? "" });

    const nftViewerRef = useOutsideClick(() => {
        onCloseViewer();
        handleClosePreview();
    });

    return (
        <div
            className={`fixed ${selectedMarker ? "top-0" : ""} right-0 bottom-0 left-0 
                         flex justify-center items-end lg:items-center z-20`}
        >
            <div
                ref={nftViewerRef}
                className={`bg-dark-gray rounded-[30px] lg:rounded-[60px] ${previewMode ? "" : "p-6 lg:p-11"} border-2 border-raisin-black
                            flex-col-reverse lg:flex-row gap-6 ${selectedMarker ? "flex" : "hidden"}
                            max-h-[calc(100vh-14rem)] min-w-[90vw] md:min-w-96
                            ${previewMode ? "container max-h-[70vh] aspect-video" : ""} relative mb-28 lg:mb-0`}
            >
                <div
                    className="absolute top-4 right-4 lg:top-8 lg:right-8 cursor-pointer z-10"
                    onClick={() => {
                        if (previewMode) {
                            handleClosePreview();
                        } else {
                            onCloseViewer();
                        }
                    }}
                >
                    <CloseViewerIcon />
                </div>
                {previewMode ? (
                    <ModelViewer modelId={selectedMarker?.modelId} previewId={selectedMarker?.previewId} />
                ) : (
                    <>
                        <div className="flex flex-col gap-8 mt-auto lg:pt-8 max-w-screen-3sm max-h-48 lg:max-h-96 overflow-scroll">
                            <CardHeader
                                name={selectedMarker?.title}
                                lat={selectedMarker?.location.lat}
                                lng={selectedMarker?.location.lng}
                                className="hidden lg:flex"
                            />
                            <p
                                className={`manrope-regular-18 text-quick-silver relative 
                                ${fullDescription ? "" : "line-clamp-3"} duration-500
                                `}
                            >
                                {selectedMarker?.description}
                                {!fullDescription && (
                                    <Fragment>
                                        <span className="absolute top-14 left-0 bg-text-shadow bg-blend-darken w-[calc(100%-4rem)] h-6" />
                                        <span
                                            className="absolute top-14 right-0 bg-dark-gray text-white/80 cursor-pointer"
                                            onClick={toggleFullDescriptionText}
                                        >
                                            Read more
                                        </span>
                                    </Fragment>
                                )}
                            </p>
                            {/* <button
                                className="onest-regular-18 text-white
                                   border-2 border-raisin-black rounded-[30px]
                                   px-6 py-3.5 "
                                onClick={handlePreview}
                            >
                                Preview
                            </button> */}
                        </div>
                        <div className="flex flex-col bg-nft-viewer-desc-bg rounded-[30px] w-full lg:w-96 h-60 min-h-40 relative">
                            <ModelViewer modelId={selectedMarker?.modelId} previewId={selectedMarker?.previewId} />
                            {/* <img
                                src={`${import.meta.env.VITE_APP_API_BASE_URL}gateway/file/get?fileId=${selectedMarker?.previewId}`}
                                className="max-h-44 lg:h-full w-full object-contain max-w-screen-3sm"
                            /> */}
                            <div className="flex justify-between items-center gap-6 px-2.5 absolute bottom-0 left-0 right-0 bg-eerie-black/35">
                                <button
                                    className="flex items-center gap-2.5 px-4 py-3 onest-regular-18 text-white"
                                    onClick={handlePreview}
                                >
                                    <ViewArIcon />
                                    View AR
                                </button>
                                {isMyObject && (
                                    <button className="px-4 py-3">
                                        <EdtIcon />
                                    </button>
                                )}
                            </div>
                        </div>
                        <CardHeader
                            name={selectedMarker?.title}
                            lat={selectedMarker?.location.lat}
                            lng={selectedMarker?.location.lng}
                            className="flex lg:hidden"
                        />
                    </>
                )}
            </div>
        </div>
    );
};

const CardHeader = ({
    name,
    lat,
    lng,
    className,
}: {
    name?: string;
    lat?: number;
    lng?: number;
    className?: string;
}) => {
    return (
        <div className={`flex flex-col gap-5 ${className}`}>
            <h2 className="sloth-semibold-36 text-white">{name}</h2>
            {lat && lng && (
                <div className="flex flex-col">
                    <span className="onest-regular-22 text-white">address</span>
                    <span className="manrope-regular-18 text-quick-silver">{`${lat.toFixed(6)}, ${lng.toFixed(6)}`}</span>
                </div>
            )}
        </div>
    );
};

const ModelViewer = ({ modelId, previewId }: { modelId?: string; previewId?: string }) => {
    return (
        <model-viewer
            src={`${import.meta.env.VITE_APP_API_BASE_URL}gateway/file/get?fileId=${modelId}`}
            id={modelId}
            loading="lazy"
            shadow-intensity="1"
            camera-controls
            touch-action="pan-y"
            auto-rotate
            auto-rotate-delay="0"
            rotation-per-second="20deg"
            orbit-sensitivity="0.6"
            autoplay
            data-ar
            ar-status="not-presenting"
            ar-modes="webxr scene-viewer quick-look"
            poster={`${import.meta.env.VITE_APP_API_BASE_URL}gateway/file/get?fileId=${previewId}`}
            style={{ width: "100%", height: "100%" }}
        />
    );
};

export { NftItem };
