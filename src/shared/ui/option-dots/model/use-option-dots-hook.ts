import { MouseEvent, useState } from "react";

import { useOutsideClick } from "@/shared/lib/use-outside-click";

const useOptionDotsHook = () => {
    const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);

    const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });

    const openPopup = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setPopupPosition({ x: event.clientX, y: event.clientY });
        setIsOpenPopup(true);
    };

    const optionDotsPopupRef = useOutsideClick(() => {
        setIsOpenPopup(false);
    });

    return { isOpenPopup, optionDotsPopupRef, popupPosition, openPopup };
};

export { useOptionDotsHook };
