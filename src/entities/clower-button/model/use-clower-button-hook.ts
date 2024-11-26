import { useState } from "react";

const useClowerButtonHook = () => {
    const [isOpenAppsModal, setIsOpenAppsModal] = useState<boolean>(false);

    const openAppsModal = () => {
        setIsOpenAppsModal(true);
    };

    const closeAppsModal = () => {
        setIsOpenAppsModal(false);
    };

    return { isOpenAppsModal, openAppsModal, closeAppsModal };
};

export { useClowerButtonHook };
