import { useContext, useEffect, useState } from "react";

import { UserContext } from "@/shared/stores";

const useNftItemHook = ({ ownerId }: { ownerId: string }) => {
    const [previewMode, setPreviewMode] = useState<boolean>(false);
    const [fullDescription, setFullDescription] = useState<boolean>(false);
    const [isMyObject, setIsMyObject] = useState<boolean>(false);

    const { user } = useContext(UserContext);

    useEffect(() => {
        if (user && user.userId === ownerId) {
            setIsMyObject(true);
        } else {
            false;
        }
    }, [ownerId, user]);

    const handlePreview = () => {
        setPreviewMode(true);
    };

    const handleClosePreview = () => {
        setPreviewMode(false);
        setFullDescription(false);
    };

    const toggleFullDescriptionText = () => {
        setFullDescription((e) => !e);
    };

    return { previewMode, handlePreview, handleClosePreview, fullDescription, toggleFullDescriptionText, isMyObject };
};

export { useNftItemHook };
