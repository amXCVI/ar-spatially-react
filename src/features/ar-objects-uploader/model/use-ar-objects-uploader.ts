import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const useArObjectsUploader = () => {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        console.log(acceptedFiles);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { "model/gltf-binary": [".glb"] },
    });

    return { getRootProps, getInputProps, isDragActive };
};

export { useArObjectsUploader };
