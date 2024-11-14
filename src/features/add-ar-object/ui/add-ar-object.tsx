import { APIProvider } from "@ar-kit/lib";
import { ChangeEvent, Fragment } from "react";

import { BackdropModal } from "@/shared/ui/modals";

import PlusIcon from "../assets/plus-icon.svg?react";

import { useAddArObjectHook } from "../model";
import { MapComponent } from "./map-component";
import { ObjectData } from "./object-data";
import { PreviewComponent } from "./preview-component";

const AddArObject = () => {
    const {
        isOpenMapModal,
        step,
        disabledNextStep,
        openMapModal,
        closeMapModal,
        nextStep,
        prevStep,
        onDropGlbModelCallback,
        glbModelFile,
        previewSrc,
        objectLocation,
        objectName,
        onChangeObjectName,
        objectDescription,
        onChangeObjectDescription,
        onChangeObjectLocation,
        onChangeSelectLayer,
        selectedLayerId,
    } = useAddArObjectHook();

    return (
        <Fragment>
            <div
                className="hidden 
                           lg:flex items-center h-min w-full
                           border-2 border-silver-sand hover:border-spanish-gray duration-300 cursor-pointer rounded-[90px]"
                onClick={openMapModal}
            >
                <div className="p-5">
                    <PlusIcon />
                </div>
                <span className="roboto-medium-15 text-white">Add ar object to world</span>
            </div>

            <BackdropModal isOpen={isOpenMapModal} closeModal={closeMapModal} className="!bg-dark-bg">
                {renderPopupContent({
                    step,
                    objectName,
                    previewSrc: previewSrc ?? undefined,
                    objectDescription,
                    objectLocation,
                    onChangeObjectName,
                    onChangeObjectDescription,
                    onDropGlbModelCallback,
                    glbModelFile,
                    onChangeObjectLocation,
                    selectedLayerId,
                    onChangeSelectLayer,
                })}
                <div className="flex w-full justify-around bottom-0 left-0 right-0 z-10 p-4">
                    <button onClick={prevStep} className="px-10 py-1 border rounded-xl bg-black">
                        back
                    </button>
                    <button
                        onClick={nextStep}
                        className="px-10 py-1 border rounded-xl bg-black"
                        disabled={disabledNextStep}
                    >
                        next
                    </button>
                </div>
            </BackdropModal>
        </Fragment>
    );
};

const renderPopupContent = ({
    step,
    objectName,
    previewSrc,
    objectDescription,
    objectLocation,
    selectedLayerId,
    glbModelFile,
    onChangeObjectName,
    onChangeObjectDescription,
    onChangeSelectLayer,
    onDropGlbModelCallback,

    onChangeObjectLocation,
}: {
    step: number;
    objectName: string;
    objectDescription: string;
    previewSrc?: string;
    selectedLayerId?: string;
    objectLocation: {
        lat: number;
        lng: number;
    } | null;
    glbModelFile: File | null;
    onChangeObjectName: (e: ChangeEvent<HTMLInputElement>) => void;
    onChangeObjectDescription: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    onChangeSelectLayer: (e: ChangeEvent<HTMLSelectElement>) => void;
    onDropGlbModelCallback: (e: File) => void;
    onChangeObjectLocation: (e: { lat: number; lng: number }) => void;
}) => {
    switch (step) {
        case 0:
            return (
                <ObjectData
                    objectName={objectName}
                    objectDescription={objectDescription}
                    glbModelFileName={glbModelFile?.name}
                    selectedLayerId={selectedLayerId}
                    onChangeSelectLayer={onChangeSelectLayer}
                    onChangeObjectName={onChangeObjectName}
                    onChangeObjectDescription={onChangeObjectDescription}
                    onDropGlbModelCallback={onDropGlbModelCallback}
                />
            );

        case 1:
            if (glbModelFile) {
                return <PreviewComponent glbModelFile={glbModelFile} />;
            }
            return <Fragment />;

        case 2:
            return (
                <APIProvider apiKey={import.meta.env.VITE_APP_GOOGLE_MAP_API_KEY} region="EN" language="en">
                    <MapComponent
                        previewSrc={previewSrc}
                        objectLocation={objectLocation}
                        onChangeObjectLocation={onChangeObjectLocation}
                    />
                </APIProvider>
            );

        default:
            break;
    }
};

export { AddArObject };
