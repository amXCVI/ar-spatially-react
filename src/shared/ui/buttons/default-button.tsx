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
    const variants = `px-6 min-w-32 !h-12 flex justify-center items-center
    rounded-full
    backdrop-blur
    border border-blue-accent
    button-font
    ${className ?? ""}
    duration-300
    hover:invert`;
    return (
        <button className={variants} onClick={onClick} disabled={disabled}>
            <span>{children}</span>
        </button>
    );
};
