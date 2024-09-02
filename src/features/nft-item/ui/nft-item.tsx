import { MarkerInterface } from "@ar-kit/lib";
import { useOutsideClick } from "@ar-kit/shared/hooks";

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

    return (
        <div
            className={`fixed ${selectedMarker ? "top-0" : ""} right-0 bottom-0 left-0 
                         flex justify-center items-center`}
        >
            <div
                ref={nftViewerRef}
                className={`bg-dark-gray rounded-[60px] p-11 border-2 border-raisin-black
                            flex-col-reverse lg:flex-row gap-6 ${selectedMarker ? "flex" : "hidden"}
                            max-h-[calc(100vh-16rem)] overflow-scroll`}
            >
                <div className="flex flex-col gap-8 mt-auto max-w-screen-3sm">
                    <div className="flex flex-col gap-5">
                        <h2 className="sloth-semibold-36 text-white">{selectedMarker?.name}</h2>
                        <div className="flex flex-col">
                            <span className="onest-regular-22 text-white">address</span>
                            <span className="manrope-regular-18 text-quick-silver">{`${selectedMarker?.lat}, ${selectedMarker?.lng}`}</span>
                        </div>
                    </div>
                    <p className="manrope-regular-18 text-quick-silver">{selectedMarker?.description}</p>
                    <button
                        className="onest-regular-18 text-white
                                   border-2 border-raisin-black rounded-[30px]
                                   px-6 py-3.5 "
                    >
                        Preview
                    </button>
                </div>
                <div className="flex flex-col bg-eerie-black rounded-[30px]">
                    <img
                        src={`${selectedMarker?.previewUrl ?? selectedMarker?.imageUrl}`}
                        className="h-full w-full object-contain max-w-screen-3sm"
                    />
                    <div className="flex justify-between items-center gap-6 p-2.5">
                        {/* <button className="flex items-center gap-2.5 px-4 py-3 onest-regular-18 text-white">
                            <ViewArIcon />
                            View AR
                        </button>
                        <button className="px-4 py-3">
                            <EdtIcon />
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export { NftItem };
