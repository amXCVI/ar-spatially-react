import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { ApiEndpoints } from "@/shared/api";
import { MarkerInterface } from "@/shared/types";

const useEditNftFormHook = ({
    selectedMarker,
    handleClosePreview,
    updatedMarkerCallback,
}: {
    selectedMarker: MarkerInterface | null;
    handleClosePreview: () => void;
    updatedMarkerCallback: ({ updatedMarker }: { updatedMarker: MarkerInterface }) => void;
}) => {
    const { register, handleSubmit, setValue } = useForm<{ title: string; description: string }>({ mode: "onBlur" });

    useEffect(() => {
        if (selectedMarker) {
            setValue("title", selectedMarker.title);
            setValue("description", selectedMarker.description);
        }
    }, [selectedMarker, setValue]);

    const handleSubmitEdit = (e: { title: string; description: string }) => {
        if (selectedMarker) {
            ApiEndpoints.object
                .updateObject({ title: e.title, description: e.description, id: selectedMarker.id })
                .then(() => {
                    updatedMarkerCallback({
                        updatedMarker: { ...selectedMarker, title: e.title, description: e.description },
                    });
                })
                .finally(() => {
                    handleClosePreview();
                });
        }
    };

    const handleRejectEdit = () => {
        handleClosePreview();
    };

    return { register, handleSubmit, handleSubmitEdit, handleRejectEdit };
};

export { useEditNftFormHook };
