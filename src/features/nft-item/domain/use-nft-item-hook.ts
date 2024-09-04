import { useState } from "react";

const useNftItemHook = () => {
    const [previewMode, setPreviewMode] = useState<boolean>(false);

    const handlePreview = () => {
        setPreviewMode(true);
    };

    const handleClosePreview = () => {
        setPreviewMode(false);
    };

    return { previewMode, handlePreview, handleClosePreview };
};

export { useNftItemHook };
