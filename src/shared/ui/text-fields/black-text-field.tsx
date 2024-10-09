import React, { Fragment } from "react";
import { ReactNode } from "react";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    errorMessage?: string;
    icon?: ReactNode;
    children?: ReactNode;
}

export const BlackTextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
    ({ id, label, errorMessage, icon, children, ...props }: TextFieldProps, ref) => {
        return (
            <div className="flex flex-col gap-2 w-full">
                <label className="roboto-regular-13 text-gray20" htmlFor={id}>
                    {label}
                </label>
                <div className="relative flex items-center w-full bg-dark-bg rounded-[20px] overflow-hidden">
                    {icon}
                    <input
                        {...props}
                        className="w-full border-none outline-none h-8 px-4 bg-transparent z-[1]"
                        id={id}
                        ref={ref}
                    />
                    {children ?? <Fragment />}
                </div>
                {errorMessage ? <div className="regular-16 text-error px-4">{errorMessage}</div> : <Fragment />}
            </div>
        );
    },
);
