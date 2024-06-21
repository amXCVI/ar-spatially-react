import { CSSProperties, ReactNode } from 'react';

declare const ModalComponent: ({ children, isIconClose, style, isCloseOutsideClick, onCloseModal, isOpenModal, }: {
    children: ReactNode;
    isIconClose?: boolean;
    style?: CSSProperties;
    isCloseOutsideClick?: boolean;
    onCloseModal?: () => void;
    isOpenModal: boolean;
}) => import("react/jsx-runtime").JSX.Element;
export default ModalComponent;
