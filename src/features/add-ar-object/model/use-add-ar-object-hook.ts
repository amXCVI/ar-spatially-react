import { ChangeEvent, useEffect, useState } from "react";

import { ApiEndpoints } from "@/shared/api";

const useAddArObjectHook = () => {
    const [isOpenMapModal, setIsOpenMapModal] = useState<boolean>(false);
    const [step, setStep] = useState<number>(0);
    const [disabledNextStep, setDisabledNextStep] = useState<boolean>(false);

    const [objectName, setObjectName] = useState<string>("");
    const [objectDescription, setObjectDescription] = useState<string>("");
    const [glbModelFile, setGlbModelFile] = useState<File | null>(null);
    const [modelPreviewFile, setModelPreviewFile] = useState<File | null>(null);
    const [selectedLayerId, setSelectedLayerId] = useState<string | undefined>(undefined);
    const [objectLocation, setObjectLocation] = useState<{ lat: number; lng: number } | null>(null);

    const openMapModal = () => {
        setIsOpenMapModal(true);
    };

    const closeMapModal = () => {
        setIsOpenMapModal(false);
        setObjectName("");
        setObjectDescription("");
        setGlbModelFile(null);
        setModelPreviewFile(null);
        setObjectLocation(null);
    };

    useEffect(() => {
        if (step === 0) {
            if (objectName && glbModelFile && modelPreviewFile && selectedLayerId) {
                setDisabledNextStep(false);
            } else {
                setDisabledNextStep(true);
            }
        }
        if (step === 1) {
            if (objectLocation) {
                setDisabledNextStep(false);
            } else {
                setDisabledNextStep(true);
            }
        }
    }, [glbModelFile, modelPreviewFile, objectName, step, objectLocation, selectedLayerId]);

    const nextStep = () => {
        if (!disabledNextStep) {
            switch (step) {
                case 0:
                    // to map
                    setStep(1);
                    break;

                case 1:
                    // save object
                    saveObject();
                    break;

                default:
                    setStep(0);
            }
        }
    };

    const prevStep = () => {
        switch (step) {
            case 1:
                // to data
                setStep(0);
                break;

            case 0:
                // close
                closeMapModal();
                break;

            default:
                setStep(0);
        }
    };

    const onDropGlbModelCallback = (file: File) => {
        setGlbModelFile(file);
    };

    const onDropModelPreviewCallback = (file: File) => {
        setModelPreviewFile(file);
    };

    const onChangeObjectName = (e: ChangeEvent<HTMLInputElement>) => {
        setObjectName(e.target.value);
    };

    const onChangeObjectDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setObjectDescription(e.target.value);
    };

    const onChangeSelectLayer = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedLayerId(e.target.value);
    };

    const onChangeObjectLocation = (e: { lat: number; lng: number }) => {
        setObjectLocation(e);
    };

    const saveObject = () => {
        if (glbModelFile && modelPreviewFile && objectLocation && selectedLayerId) {
            ApiEndpoints.object
                .uploadObject({
                    modelFile: glbModelFile,
                    previewFile: modelPreviewFile,
                    title: objectName,
                    description: objectDescription,
                    layerId: selectedLayerId,
                    lat: objectLocation.lat,
                    lng: objectLocation.lng,
                    width: 1,
                    height: 1,
                    alt: 1,
                })
                .then((res) => {
                    closeMapModal();
                    console.log(res);
                });
        }
    };

    return {
        isOpenMapModal,
        step,
        disabledNextStep,
        openMapModal,
        closeMapModal,
        nextStep,
        prevStep,

        previewSrc: modelPreviewFile ? URL.createObjectURL(modelPreviewFile) : undefined,
        onDropGlbModelCallback,
        glbModelFileName: glbModelFile?.name,
        onDropModelPreviewCallback,
        objectName,
        onChangeObjectName,
        objectDescription,
        onChangeObjectDescription,
        selectedLayerId,
        onChangeSelectLayer,
        objectLocation,
        onChangeObjectLocation,
    };
};

export { useAddArObjectHook };
