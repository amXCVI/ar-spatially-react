import { MarkerInterface } from "@ar-kit/lib";
import { useOutsideClick } from "@ar-kit/shared/hooks";

import { TextP, Title } from "@/shared/ui/text-components";

import closeIcon from "/images/map/close-icon.svg";
import locationIcon from "/images/map/location-icon.svg";

interface NftItemInterface {
    selectedMarker: MarkerInterface | null;
    onCloseViewer: () => void;
}

const NftItem = ({ selectedMarker, onCloseViewer }: NftItemInterface) => {
    const nftViewerRef = useOutsideClick(() => {
        onCloseViewer();
    });

    if (!selectedMarker) {
        return <div />;
    }

    return (
        <div
            className="fixed top-0 right-0 bottom-0 left-0 bg-white30
                           flex justify-center items-center
                           p-5 md:p-10 lg:p-20 pt-40 md:pt-10"
        >
            <div className="h-full max-w-full bg-gray90 rounded-3xl overflow-hidden relative" ref={nftViewerRef}>
                <div
                    className="absolute top-3 right-3 bg-gray70 rounded-full p-4 
                                cursor-pointer hover:opacity-50 duration-300"
                    onClick={onCloseViewer}
                >
                    <img src={closeIcon} />
                </div>
                <img
                    src={`${selectedMarker.previewUrl ?? selectedMarker.imageUrl}`}
                    className="h-full w-full object-contain"
                />
                <div
                    className="absolute left-0 bottom-0 right-0 p-4
                               bg-nft-viewer-desc-bg
                               flex flex-col gap-2"
                >
                    <div className="flex gap-2 items-end">
                        <img src={locationIcon} />
                        <span className="light-12 text-gray70">{`${selectedMarker.lat}, ${selectedMarker.lng}`}</span>
                    </div>
                    <Title title={selectedMarker.name} className="text-white" />
                    <TextP className="text-white">{selectedMarker.description}</TextP>
                </div>
            </div>
        </div>
    );
};

export { NftItem };
