import { ModelViewerElement } from "@google/model-viewer";
import { ChangeEvent, useEffect, useState } from "react";

import { ApiEndpoints } from "@/shared/api";
import { useAppDispatch } from "@/shared/lib/redux-service";
import { useAuthContext } from "@/shared/stores/auth-provider";
import { allObjectsActions } from "@/shared/stores/objects-store";
import { useUserHook } from "@/shared/stores/user/use-user-hook";
import { MarkerStatusEnum } from "@/shared/types";

const useAddArObjectHook = () => {
    const dispatch = useAppDispatch();

    const { user } = useUserHook();
    const { checkAuth } = useAuthContext();

    const [isOpenMapModal, setIsOpenMapModal] = useState<boolean>(false);
    const [step, setStep] = useState<number>(2);
    const [disabledNextStep, setDisabledNextStep] = useState<boolean>(false);

    const [objectName, setObjectName] = useState<string>("");
    const [objectDescription, setObjectDescription] = useState<string>("");
    const [glbModelFile, setGlbModelFile] = useState<File | null>(null);
    const [modelPreviewSrc, setModelPreviewSrc] = useState<string | null>(null);
    const [selectedLayerId, setSelectedLayerId] = useState<string | undefined>(undefined);
    const [objectLocation, setObjectLocation] = useState<{ lat: number; lng: number } | null>(null);

    const openMapModal = () => {
        checkAuth().then(() => {
            setIsOpenMapModal(true);
        });
    };

    const closeMapModal = () => {
        setIsOpenMapModal(false);
        setObjectName("");
        setObjectDescription("");
        setGlbModelFile(null);
        setObjectLocation(null);
        setStep(0);
    };

    useEffect(() => {
        if (step === 0) {
            if (objectName && glbModelFile && selectedLayerId) {
                setDisabledNextStep(false);
            } else {
                setDisabledNextStep(true);
            }
        }
        if (step === 1) {
            setDisabledNextStep(false);
        }
        if (step === 2) {
            if (objectLocation) {
                setDisabledNextStep(false);
            } else {
                setDisabledNextStep(true);
            }
        }
    }, [glbModelFile, objectName, step, objectLocation, selectedLayerId, modelPreviewSrc]);

    const nextStep = () => {
        if (!disabledNextStep) {
            switch (step) {
                case 0:
                    // to preview
                    setStep(1);
                    break;

                case 1:
                    // to map
                    getPreviewFromGlbModel().then(() => {
                        setStep(2);
                    });
                    break;

                case 2:
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
            case 2:
                // to preview
                setStep(1);
                break;

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

    const getPreviewFromGlbModel = async () => {
        if (glbModelFile) {
            const modelViewer: ModelViewerElement = document.getElementById(glbModelFile.name) as ModelViewerElement;

            if (modelViewer) {
                const blob = await modelViewer.toBlob({ idealAspect: false });

                setModelPreviewSrc(URL.createObjectURL(blob));
            }
        }
    };

    const saveObject = async () => {
        if (glbModelFile && modelPreviewSrc && objectLocation && selectedLayerId && user) {
            const alt = 1;
            const width = 1;
            const height = 1;

            const previewFile = await fetch(modelPreviewSrc).then((response) => response.blob());

            ApiEndpoints.object
                .uploadObject({
                    modelFile: glbModelFile,
                    previewFile: new File([previewFile], `${objectName}.png`),
                    title: objectName,
                    description: objectDescription,
                    layerId: selectedLayerId,
                    lat: objectLocation.lat,
                    lng: objectLocation.lng,
                    width: width,
                    height: height,
                    alt: alt,
                })
                .then((res) => {
                    dispatch(
                        allObjectsActions.unshiftObjectToList({
                            object: {
                                anchorList: [],
                                description: objectDescription,
                                id: res.id,
                                location: { ...objectLocation, alt: alt },
                                modelId: res.modelId,
                                ownerId: user.userId,
                                previewId: res.previewId,
                                size: { width: width, height: height },
                                status: MarkerStatusEnum.NEW,
                                title: objectName,
                                userFavorite: false,
                                userLike: false,
                                likes: 0,
                            },
                        }),
                    );
                    closeMapModal();
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

        previewSrc: modelPreviewSrc,
        glbModelFile,
        onDropGlbModelCallback,
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
