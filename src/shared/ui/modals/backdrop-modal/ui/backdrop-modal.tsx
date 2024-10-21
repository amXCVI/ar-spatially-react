import { ReactNode } from "react";

import { useBackdropModalHook } from "../model";

interface BackdropModalProps {
    isOpen: boolean;
    closeModal?: () => void;
    children: ReactNode;
}

const BackdropModal = ({ isOpen, closeModal, children }: BackdropModalProps) => {
    const { modalRef } = useBackdropModalHook({ closeModal });

    return (
        <div
            className={`fixed top-0 ${isOpen ? "right-0 bottom-0 left-0 z-10" : "!h-0 overflow-hidden"} flex justify-center items-center`}
        >
            <div
                className={`container duration-500 ${
                    isOpen ? "opacity-1" : "opacity-0"
                } flex flex-col items-center justify-between overflow-hidden z-50
                backdrop-blur-xl rounded-[34px] border border-white h-min
                mx-10 max-w-prose
                `}
                style={{
                    background:
                        "linear-gradient(105.87deg, rgba(133, 133, 133, 0.4) 3.04%, rgba(82, 82, 82, 0.24) 99.24%)",
                }}
                ref={modalRef}
            >
                {children}
            </div>
        </div>
    );
};

export { BackdropModal };
