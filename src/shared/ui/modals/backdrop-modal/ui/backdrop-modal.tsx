import { ReactNode } from "react";

import { useBackdropModalHook } from "../model";

interface BackdropModalProps {
    isOpen: boolean;
    closeModal?: () => void;
    children: ReactNode;
    className?: string;
}

const BackdropModal = ({ isOpen, closeModal, children, className }: BackdropModalProps) => {
    const { modalRef } = useBackdropModalHook({ closeModal, isOpenModal: isOpen });

    return (
        <div
            className={`fixed top-0 ${isOpen ? "right-0 bottom-0 left-0 z-10" : "!h-0 overflow-hidden backdrop-blur-none"} flex justify-center items-center
            before:content-[''] before:backdrop-blur-sm before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0`}
        >
            <div
                className={`md:container duration-500 ${
                    isOpen ? "opacity-1" : "opacity-0"
                } flex flex-col items-center justify-between z-50
                md:rounded-[34px] md:border border-white
                w-full md:mx-10 md:max-w-prose
                h-full md:h-min
                relative overflow-scroll
                bg-modal-gradient
                backdrop-blur-xl
                ${className}
                `}
                ref={modalRef}
            >
                {children}
            </div>
        </div>
    );
};

export { BackdropModal };
