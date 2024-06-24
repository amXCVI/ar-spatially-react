import { CSSProperties, ReactNode } from "react";
import ModalContainer from "./modal-container";
import Modal from "./modal";

const ModalComponent = ({
    children,
    isIconClose,
    style,
    isCloseOutsideClick = true,
    onCloseModal = () => {
        return;
    },
    isOpenModal,
}: {
    children: ReactNode;
    isIconClose?: boolean;
    style?: CSSProperties;
    isCloseOutsideClick?: boolean;
    onCloseModal?: () => void;
    isOpenModal: boolean;
}) => {
    if (!isOpenModal) return <></>;
    else
        return (
            <ModalContainer
                isIconClose={isIconClose}
                style={style}
                isCloseOutsideClick={isCloseOutsideClick}
                onCloseModal={onCloseModal}
                isOpenModal={isOpenModal}
            >
                <Modal>{children}</Modal>
            </ModalContainer>
        );
};

export default ModalComponent;
