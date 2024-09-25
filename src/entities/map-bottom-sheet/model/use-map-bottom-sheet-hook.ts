import { useState } from "react";

const useMapBottomSheetHook = () => {
    const [isOpen, setOpen] = useState(false);

    const openBottomSheet = () => {
        setOpen(true);
    };

    const closeBottomSheet = () => {
        setOpen(false);
    };

    return { openBottomSheet, closeBottomSheet, isOpen };
};

export { useMapBottomSheetHook };
