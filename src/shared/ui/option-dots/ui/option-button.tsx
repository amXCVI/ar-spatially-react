import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
    icon?: ReactNode;
};
const OptionButton = (props: ButtonProps) => {
    return (
        <button className="flex px-3 py-1.5 bg-granite-gray/35" {...props}>
            {props.children}
        </button>
    );
};

export { OptionButton };
