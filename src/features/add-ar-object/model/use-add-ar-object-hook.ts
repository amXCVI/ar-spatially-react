import { useState } from "react";

const useAddArObjectHook = () => {
    const [isOpenMapModal, setIsOpenMapModal] = useState<boolean>(false);

    const googpeMapApiKey = import.meta.env.VITE_APP_GOOGLE_MAP_API_KEY;

    const openMapModal = () => {
        setIsOpenMapModal(true);
    };

    const closeMapModal = () => {
        setIsOpenMapModal(false);
    };

    return { isOpenMapModal, googpeMapApiKey, openMapModal, closeMapModal };
};

export { useAddArObjectHook };
