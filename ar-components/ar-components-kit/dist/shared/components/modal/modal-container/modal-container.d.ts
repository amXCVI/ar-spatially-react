import { CSSProperties, FC, ReactElement } from 'react';

type ModalContainerProps = {
    children?: ReactElement;
    isIconClose?: boolean;
    style?: CSSProperties;
    isCloseOutsideClick?: boolean;
    onCloseModal?: () => void;
    isOpenModal: boolean;
};
declare const ModalContainer: FC<ModalContainerProps>;
export default ModalContainer;
