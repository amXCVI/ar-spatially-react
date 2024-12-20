import { MapBottomSheet, useMapBottomSheetHook } from "@/entities/map-bottom-sheet";
import { ObjectPreview } from "@/entities/object-preview";
import { useEffect } from "react";
import { Fragment } from "react/jsx-runtime";

import { useOutsideClick } from "@/shared/lib/use-outside-click";
import { MarkerInterface } from "@/shared/types";

import CloseViewerIcon from "../assets/close-viewer-icon.svg?react";
import LocationPathIcon from "../assets/location-path-icon.svg?react";

import { ViewerModes, useNftItemHook } from "../domain";
import {
    DesctopEditButton,
    DesctopReceiveButton,
    DesctopShareButton,
    DesctopViewArButton,
    EditButton,
    ReceiveButton,
    ShareButton,
    ViewArButton,
} from "./action-buttons";
import { NftEditForm } from "./nft-edit-form";

const renderDesctopContent = ({
    previewMode,
    selectedMarker,
    fullDescription,
    isMyObject,
    handlePreview,
    toggleFullDescriptionText,
    share,
}: {
    previewMode: ViewerModes;
    selectedMarker: MarkerInterface | null;
    fullDescription: boolean;
    isMyObject: boolean;
    handlePreview: () => void;
    toggleFullDescriptionText: () => void;
    share: ({ title, text, url }: { title: string; text: string; url: string }) => void;
}) => {
    switch (previewMode) {
        case ViewerModes.VIEW_INFO:
            return (
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
                            {fullDescription ? (
                                <Fragment>
                                    <span
                                        className="ml-2 text-blue-accent cursor-pointer"
                                        onClick={toggleFullDescriptionText}
                                    >
                                        {"Read less"}
                                    </span>
                                </Fragment>
                            ) : (
                                <Fragment>
                                    <span className="absolute top-14 left-0 bg-text-shadow bg-blend-darken w-[calc(100%-4rem)] h-6" />
                                    <span
                                        className="absolute top-14 right-0 bg-dark-gray text-white/80 cursor-pointer"
                                        onClick={toggleFullDescriptionText}
                                    >
                                        {"Read more"}
                                    </span>
                                </Fragment>
                            )}
                        </p>
                        <DesctopReceiveButton isMyObject={isMyObject} />
                    </div>
                    <div className="flex flex-col bg-nft-viewer-desc-bg rounded-[30px] w-full lg:w-96 h-60 min-h-40 relative">
                        <ObjectPreview modelId={selectedMarker?.modelId} previewId={selectedMarker?.previewId} />

                        <div className="flex justify-between items-center gap-3 px-2.5 absolute bottom-0 left-0 right-0 bg-eerie-black/35">
                            <DesctopViewArButton onClick={handlePreview} />
                            <DesctopShareButton
                                title={selectedMarker?.title}
                                description={selectedMarker?.description}
                                share={share}
                            />
                            <DesctopEditButton isMyObject={isMyObject} />
                        </div>
                    </div>
                    <CardHeader
                        name={selectedMarker?.title}
                        lat={selectedMarker?.location.lat}
                        lng={selectedMarker?.location.lng}
                        className="flex lg:hidden"
                    />
                </>
            );

        case ViewerModes.PREVIEW:
            return <ObjectPreview modelId={selectedMarker?.modelId} previewId={selectedMarker?.previewId} />;

        default:
            break;
    }
};

interface NftItemInterface {
    selectedMarker: MarkerInterface | null;
    onCloseViewer: () => void;
    updatedMarkerCallback: ({ updatedMarker }: { updatedMarker: MarkerInterface }) => void;
}

const NftItem = ({ selectedMarker, onCloseViewer, updatedMarkerCallback }: NftItemInterface) => {
    const {
        previewMode,
        handlePreview,
        handleEdit,
        handleClosePreview,
        fullDescription,
        toggleFullDescriptionText,
        isMyObject,
        share,
        distanceStr,
    } = useNftItemHook({ selectedMarker });

    const nftViewerRef = useOutsideClick(() => {
        if (window.innerWidth > 1024) {
            onCloseViewer();
            handleClosePreview();
        }
    });

    const { openBottomSheet, closeBottomSheet, isOpen } = useMapBottomSheetHook();

    useEffect(() => {
        if (selectedMarker) {
            openBottomSheet();
        }

        return () => {
            closeBottomSheet();
        };
    }, [closeBottomSheet, openBottomSheet, selectedMarker]);

    return window.innerWidth > 1024 ? (
        <div
            className={`fixed ${selectedMarker ? "top-0" : ""} right-0 bottom-0 left-0 
                         flex justify-center items-end lg:items-center z-20`}
        >
            <div
                ref={nftViewerRef}
                className={`hidden lg:${selectedMarker ? "flex" : "hidden"}
                          bg-dark-gray rounded-[30px] lg:rounded-[60px] ${previewMode === ViewerModes.PREVIEW ? "" : "p-6 lg:p-11"} border-2 border-raisin-black
                            flex-col-reverse lg:flex-row gap-6
                            max-h-[calc(100vh-14rem)] min-w-[90vw] md:min-w-96
                            ${previewMode === ViewerModes.PREVIEW ? "container max-h-[70vh] aspect-video" : ""} relative mb-28 lg:mb-0`}
            >
                <div
                    className="absolute top-4 right-4 lg:top-8 lg:right-8 cursor-pointer z-10"
                    onClick={() => {
                        if (previewMode === ViewerModes.PREVIEW) {
                            handleClosePreview();
                        } else {
                            onCloseViewer();
                        }
                    }}
                >
                    <CloseViewerIcon />
                </div>
                {renderDesctopContent({
                    previewMode: previewMode,
                    selectedMarker: selectedMarker,
                    fullDescription: fullDescription,
                    isMyObject: isMyObject,
                    handlePreview: handlePreview,
                    toggleFullDescriptionText: toggleFullDescriptionText,
                    share: share,
                })}
            </div>
        </div>
    ) : (
        <MapBottomSheet
            isOpen={isOpen}
            closeBottomSheet={closeBottomSheet}
            onCloseStart={() => {
                onCloseViewer();
                handleClosePreview();
            }}
            className="lg:hidden"
        >
            <div className="flex flex-col gap-4 px-4 max-h-[90vh] overflow-y-auto">
                <div className="flex flex-col gap-1">
                    <h1 className="roboto-regular-24 text-white">{selectedMarker?.title}</h1>
                    <div className="flex gap-2.5">
                        <LocationPathIcon />
                        <span className="roboto-medium-13 text-white">{distanceStr}</span>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex flex-col bg-nft-viewer-desc-bg rounded-[30px] w-full lg:w-96 h-60 min-h-40 relative">
                        <ObjectPreview modelId={selectedMarker?.modelId} previewId={selectedMarker?.previewId} />
                    </div>

                    {previewMode === ViewerModes.VIEW_INFO || previewMode === ViewerModes.PREVIEW ? (
                        <div className="flex gap-2 px-2.5 w-full">
                            <ShareButton
                                title={selectedMarker?.title}
                                description={selectedMarker?.description}
                                share={share}
                                isMyObject={isMyObject}
                            />
                            <EditButton isMyObject={isMyObject} onClick={handleEdit} />
                            <ViewArButton isMyObject={isMyObject} onClick={handlePreview} />
                            <ReceiveButton isMyObject={isMyObject} />
                        </div>
                    ) : (
                        <Fragment />
                    )}
                </div>

                {previewMode === ViewerModes.EDIT ? (
                    <NftEditForm
                        selectedMarker={selectedMarker}
                        handleClosePreview={handleClosePreview}
                        updatedMarkerCallback={updatedMarkerCallback}
                    />
                ) : (
                    <div className="flex flex-col">
                        <p
                            className={`manrope-regular-13 text-quick-silver relative 
                    ${fullDescription ? "" : "line-clamp-2"} duration-500
                    `}
                        >
                            {selectedMarker?.description}
                        </p>
                        <span
                            className={`roboto-medium-13 ${fullDescription ? "text-blue-accent" : "text-white"} cursor-pointer mt-2.5`}
                            onClick={toggleFullDescriptionText}
                        >
                            {fullDescription ? "Read less" : "Read more"}
                        </span>
                    </div>
                )}
                <div className="min-h-5"></div>
            </div>
        </MapBottomSheet>
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

export { NftItem };
