import { useRef } from "react";

const useSelectPreviewHook = ({ glbModelFile }: { glbModelFile: File }) => {
    const modelSrc = useRef<string>(URL.createObjectURL(glbModelFile));

    return { modelSrc: modelSrc.current };
};

export { useSelectPreviewHook };
