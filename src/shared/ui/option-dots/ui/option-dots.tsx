import { ReactNode } from "react";

import DotsIcon from "../assets/dots.svg?react";

import "./index.css";

import { useOptionDotsHook } from "../model";

const OptionDots = ({ children, className }: { children: ReactNode | ReactNode[]; className?: string }) => {
    const { isOpenPopup, optionDotsPopupRef, popupPosition, openPopup } = useOptionDotsHook();

    return (
        <div className={`option-dots relative ${className}`} ref={optionDotsPopupRef}>
            <button onClick={openPopup} className="px-3">
                <DotsIcon />
            </button>

            <Popup isOpenPopup={isOpenPopup} popupPosition={popupPosition}>
                {children}
            </Popup>
        </div>
    );
};

const Popup = ({
    isOpenPopup,
    popupPosition,
    children,
}: {
    isOpenPopup: boolean;
    popupPosition: {
        x: number;
        y: number;
    };
    children: ReactNode | ReactNode[];
}) => {
    const popupStyle = {
        top: `${Math.min(popupPosition.y, window.innerHeight - 100)}px`, // ограничиваем по высоте
        left: `${Math.min(popupPosition.x, window.innerWidth - 150)}px`, // ограничиваем по ширине
    };

    return (
        <div
            className={`option-dots__popup
                fixed flex flex-col gap-0.5 ${isOpenPopup ? "" : "hidden"}
                bg-gray70 rounded-xl overflow-hidden
                z-10`}
            style={popupStyle}
        >
            {children}
        </div>
    );
};

export { OptionDots };
