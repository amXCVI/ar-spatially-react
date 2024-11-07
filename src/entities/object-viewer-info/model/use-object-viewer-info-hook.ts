import { useState } from "react";

const useObjectViewerInfoHook = () => {
    const [fullDescription, setFullDescription] = useState<boolean>(false);

    const toggleFullDescriptionText = () => {
        setFullDescription((e) => !e);
    };

    return { fullDescription, toggleFullDescriptionText };
};

export { useObjectViewerInfoHook };
