import { useOutsideClick } from "@ar-kit/shared/hooks";
import { CSSProperties, FC, ReactElement } from "react";

import iconClose from "@ar-kit/assets/icons/icon-close.svg";

import { CloseIcon, Container } from "./modal-container.style";

type ModalContainerProps = {
    children?: ReactElement;
    isIconClose?: boolean;
    style?: CSSProperties;
    isCloseOutsideClick?: boolean;
    onCloseModal?: () => void;
    isOpenModal: boolean;
};

const ModalContainer: FC<ModalContainerProps> = ({
    children,
    isIconClose,
    style,
    isCloseOutsideClick = true,
    onCloseModal = () => {
        return;
    },
    isOpenModal,
}: ModalContainerProps) => {
    const onClose = () => {
        onCloseModal();
    };

    const ref = useOutsideClick(() => {
        if (isCloseOutsideClick) {
            onClose();
        }
    });

    onpopstate = function (event) {
        if (isOpenModal) {
            event.preventDefault();
            event.stopPropagation();
            onClose();
        }
    };

    return (
        <Container ref={ref} style={style}>
            {isIconClose && (
                <CloseIcon onClick={onClose}>
                    <img src={iconClose} alt="" />
                </CloseIcon>
            )}
            {children}
        </Container>
    );
};
export default ModalContainer;
