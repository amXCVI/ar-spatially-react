import { CSSProperties, FC, ReactElement } from "react";
import { Container, CloseIcon } from "./modal-container.style";
import iconClose from "@ar-kit/assets/icons/icon-close.svg";
import { useOutsideClick } from "@ar-kit/shared/hooks";

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
                    <img src={iconClose} />
                </CloseIcon>
            )}
            {children}
        </Container>
    );
};
export default ModalContainer;
