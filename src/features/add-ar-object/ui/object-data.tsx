import { ChangeEvent, ReactNode } from "react";
import { Accept } from "react-dropzone";

import { useAppSelector } from "@/shared/lib/redux-service";
import { DarkSilverTextAreaField, DarkSilverTextField } from "@/shared/ui/text-fields";

import UploadObjectIcon from "../assets/upload-object-icon.svg?react";

import { useFileUploaderHook } from "../model";

const ObjectData = ({
    objectName,
    glbModelFileName,
    objectDescription,
    selectedLayerId,
    onChangeObjectName,
    onChangeObjectDescription,
    onChangeSelectLayer,
    onDropGlbModelCallback,
}: {
    objectName: string;
    glbModelFileName?: string;
    objectDescription: string;
    selectedLayerId?: string;
    onChangeObjectName: (e: ChangeEvent<HTMLInputElement>) => void;
    onChangeObjectDescription: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    onChangeSelectLayer: (e: ChangeEvent<HTMLSelectElement>) => void;
    onDropGlbModelCallback: (e: File) => void;
}) => {
    const { layersList } = useAppSelector((state) => state.layersSlice);

    return (
        <div className="flex flex-col gap-6 w-full p-4">
            <span className="onest-extra-bold-34 text-white">Add object</span>
            <DarkSilverTextField label="Name" className="w-full" value={objectName} onChange={onChangeObjectName} />
            <div className="grid sm:grid-cols-2 gap-6">
                <FileUploader
                    title="Load AR Object"
                    label={
                        glbModelFileName ?? (
                            <span>
                                Select or drag file <br />
                                (.glb)
                            </span>
                        )
                    }
                    accept={{ "model/gltf-binary": [".glb"] }}
                    onDropFileCallback={onDropGlbModelCallback}
                />
                {/* <FileUploader
                    title="Load AR Object preview"
                    label={
                        <span>
                            Select or drag preview file <br />
                            (.jpeg, .png)
                        </span>
                    }
                    previewSrc={previewSrc}
                    accept={{ "image/jpeg": [".jpeg", ".png"] }}
                    onDropFileCallback={onDropModelPreviewCallback}
                /> */}
            </div>
            <DarkSilverTextAreaField
                label="Description"
                value={objectDescription}
                onChange={onChangeObjectDescription}
            />
            <select value={selectedLayerId} onChange={onChangeSelectLayer}>
                {layersList.map((item) => {
                    return (
                        <option key={item.id} value={item.id}>
                            {item.title}
                        </option>
                    );
                })}
                <option></option>
            </select>
            <div className="grid grid-cols-2">
                <div className="flex gap-4">Object width: 1</div>
                <div className="flex gap-4">Object height: 1</div>
            </div>
        </div>
    );
};

const FileUploader = ({
    className,
    title,
    label,
    previewSrc,
    accept,
    onDropFileCallback,
}: {
    className?: string;
    title: string;
    label: ReactNode;
    previewSrc?: string;
    accept: Accept;
    onDropFileCallback: (e: File) => void;
}) => {
    const { getRootProps, getInputProps, isDragActive } = useFileUploaderHook({ accept, onDropFileCallback });

    return (
        <div className={`flex flex-col gap-4 w-full ${className}`}>
            <h4 className="onest-semibold-18 text-white">{title}</h4>
            <div
                className={`flex flex-col justify-center items-center aspect-square
                    border-2 border-dashed ${isDragActive ? "border-spanish-gray" : "border-silver-sand hover:border-spanish-gray"}
                    duration-300 cursor-pointer rounded-[25px]
                    relative overflow-hidden`}
                {...getRootProps()}
            >
                <input {...getInputProps()} accept=".glb" />
                <div className="p-5 z-10">
                    <UploadObjectIcon />
                </div>
                <span className="roboto-medium-15 text-spanish-gray text-center z-10">{label}</span>
                {previewSrc ? <img src={previewSrc} alt={title} className="absolute z-0" /> : <div />}
            </div>
        </div>
    );
};

export { ObjectData };
