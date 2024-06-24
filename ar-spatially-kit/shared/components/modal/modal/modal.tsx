import { ReactNode } from "react";

import { ModalWrapper } from "./modal.style";

interface ModalProps {
    children: ReactNode;
}

const Modal = ({ children }: ModalProps) => {
    return <ModalWrapper id="modal">{children}</ModalWrapper>;
};
export default Modal;
