import { useOutsideClick } from "@ar-kit/shared/hooks";

import { MarkerInterface } from "@/shared/types";

import { useNftItemHook } from "../domain";

// import EdtIcon from "../assets/edit-icon.svg?react";
// import ViewArIcon from "../assets/view-ar-icon.svg?react";

interface NftItemInterface {
    selectedMarker: MarkerInterface | null;
    onCloseViewer: () => void;
}

const NftItem = ({ selectedMarker, onCloseViewer }: NftItemInterface) => {
    const nftViewerRef = useOutsideClick(() => {
        onCloseViewer();
    });

    useNftItemHook({ modelId: selectedMarker?.modelId });

    return (
        <div
            className={`fixed ${selectedMarker ? "top-0" : ""} right-0 bottom-0 left-0 
                         flex justify-center items-center`}
        >
            <div
                ref={nftViewerRef}
                className={`bg-dark-gray rounded-[60px] p-11 border-2 border-raisin-black
                            flex-col-reverse lg:flex-row gap-6 ${selectedMarker ? "flex" : "hidden"}
                            max-h-[calc(100vh-16rem)] min-w-96 overflow-scroll`}
            >
                <div className="flex flex-col gap-8 mt-auto max-w-screen-3sm">
                    <CardHeader className="hidden lg:flex" />
                    <p className="manrope-regular-18 text-quick-silver">{selectedMarker?.description}</p>
                    <button
                        className="onest-regular-18 text-white
                                   border-2 border-raisin-black rounded-[30px]
                                   px-6 py-3.5 "
                    >
                        Preview
                    </button>
                </div>
                <div className="flex flex-col bg-nft-viewer-desc-bg rounded-[30px]">
                    <model-viewer
                        src={`${import.meta.env.VITE_APP_API_BASE_URL}gateway/file/get?fileId=${selectedMarker?.modelId}`}
                        id={selectedMarker?.modelId}
                        loading="lazy"
                        shadow-intensity="1"
                        camera-controls
                        touch-action="pan-y"
                        auto-rotate
                        auto-rotate-delay="0"
                        rotation-per-second="30deg"
                        orbit-sensitivity="0.6"
                        data-ar
                        ar-status="not-presenting"
                        ar-modes="webxr scene-viewer quick-look"
                        poster={`${import.meta.env.VITE_APP_API_BASE_URL}gateway/file/get?fileId=${selectedMarker?.previewId}`}
                        className="max-h-44 w-full lg:h-full object-contain max-w-screen-3sm"
                        onLoad={(e) => console.log("loading", e)}
                    />
                    {/* <img
                        src={`${import.meta.env.VITE_APP_API_BASE_URL}gateway/file/get?fileId=${selectedMarker?.previewId}`}
                        className="max-h-44 lg:h-full w-full object-contain max-w-screen-3sm"
                    /> */}
                    {/* <div className="flex justify-between items-center gap-6 p-2.5">
                        <button className="flex items-center gap-2.5 px-4 py-3 onest-regular-18 text-white">
                            <ViewArIcon />
                            View AR
                        </button>
                        <button className="px-4 py-3">
                            <EdtIcon />
                        </button>
                    </div> */}
                </div>
                <CardHeader
                    name={selectedMarker?.title}
                    lat={selectedMarker?.location.lat}
                    lng={selectedMarker?.location.lng}
                    className="flex lg:hidden"
                />
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
export { NftItem };
