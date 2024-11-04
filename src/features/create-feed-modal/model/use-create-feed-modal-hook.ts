import { useState } from "react";

import { useOutsideClick } from "@/shared/lib/use-outside-click";

const useCreateFeedModalHook = () => {
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

    const modalRef = useOutsideClick(() => {
        setIsOpenModal(false);
    });

    const toggleIsOpenModal = () => {
        setIsOpenModal((e) => !e);
    };

    return { isOpenModal, toggleIsOpenModal, modalRef };
};

export { useCreateFeedModalHook };
