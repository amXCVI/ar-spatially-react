import { FC, PropsWithChildren } from "react";

interface PropsButton {
    type?: "primary" | "secondary";
    className?: string;
    size?: "normal" | "small";
    onClick?: () => void;
    disabled?: boolean;
}

export const DefaultButton: FC<PropsWithChildren<PropsButton>> = ({
    children,
    // type = "primary",
    className,
    // size = "normal",
    onClick,
    disabled = false,
}) => {
    const variants = `py-4 px-6 min-w-32
    bg-gray90/30 rounded-full
    backdrop-blur`;
    return (
        <button className={variants} onClick={onClick} disabled={disabled}>
            <span className={className}>{children}</span>
        </button>
    );
};
