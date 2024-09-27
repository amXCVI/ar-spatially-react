import UploadObjectIcon from "../assets/upload-object-icon.svg?react";

import { useArObjectsUploader } from "../model";

const ArObjectUploader = ({ className }: { className?: string }) => {
    const { getRootProps, getInputProps, isDragActive } = useArObjectsUploader();

    return (
        <div className={`flex flex-col gap-4 w-full ${className}`}>
            <h4 className="onest-semibold-18 text-white">Load AR Object</h4>
            <div
                className={`flex flex-col justify-center items-center aspect-square
                            border-2 border-dashed ${isDragActive ? "border-spanish-gray" : "border-silver-sand hover:border-spanish-gray"}
                            duration-300 cursor-pointer rounded-[25px]`}
                {...getRootProps()}
            >
                <input {...getInputProps()} accept=".glb" />
                <div className="p-5">
                    <UploadObjectIcon />
                </div>
                <span className="roboto-medium-15 text-spanish-gray text-center">
                    Select or drag files <br />
                    (.glb)
                </span>
            </div>
        </div>
    );
};

export { ArObjectUploader };
