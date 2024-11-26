import { FC, PropsWithChildren } from "react";

interface PropsButton {
    type?: "primary" | "secondary";
    className?: string;
    size?: "normal" | "small";
    onClick?: () => void;
    disabled?: boolean;
}

export const BigOutlineButton: FC<PropsWithChildren<PropsButton>> = ({
    children,
    // type = "primary",
    className,
    // size = "normal",
    onClick,
    disabled = false,
}) => {
    const variants = `flex items-center h-min w-full
                      border-2 border-silver-sand hover:border-spanish-gray duration-300 cursor-pointer rounded-[90px] ${className}`;
    return (
        <button className={variants} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};
