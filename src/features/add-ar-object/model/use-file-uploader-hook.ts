import { useCallback } from "react";
import { Accept, useDropzone } from "react-dropzone";

const useFileUploaderHook = ({
    accept,
    onDropFileCallback,
}: {
    accept: Accept;
    onDropFileCallback: (e: File) => void;
}) => {
    const onDrop = useCallback(
        (acceptedFiles: File[]) => {
            if (acceptedFiles.length) {
                onDropFileCallback(acceptedFiles[0]);
            }
        },
        [onDropFileCallback],
    );

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: accept,
    });

    return { getRootProps, getInputProps, isDragActive };
};

export { useFileUploaderHook };
