import { useEffect, useState } from "react";

import { useUserContext } from "@/shared/stores";

const useNftItemHook = ({ ownerId }: { ownerId: string }) => {
    const [previewMode, setPreviewMode] = useState<boolean>(false);
    const [fullDescription, setFullDescription] = useState<boolean>(false);
    const [isMyObject, setIsMyObject] = useState<boolean>(false);

    const { user } = useUserContext();

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

    const share = ({ title, text, url }: { title: string; text: string; url: string }) => {
        if (navigator.share) {
            navigator
                .share({
                    title: title,
                    text: text,
                    url: url,
                })
                .then(() => console.log("Удалось поделиться"))
                .catch((error) => console.log("Не удалось поделиться", error));
        }
    };

    return {
        previewMode,
        handlePreview,
        handleClosePreview,
        fullDescription,
        toggleFullDescriptionText,
        isMyObject,
        share,
    };
};

export { useNftItemHook };
