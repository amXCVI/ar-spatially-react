import React, { Fragment } from "react";
import { ReactNode } from "react";

import EditIcon from "../assets/edit-icon.svg?react";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    errorMessage?: string;
    icon?: ReactNode;
    children?: ReactNode;
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
    ({ id, label, errorMessage, icon, children, ...props }: TextFieldProps, ref) => {
        return (
            <div className="flex flex-col gap-2 w-full">
                <label className="roboto-regular-13 text-gray20" htmlFor={id}>
                    {label}
                </label>
                <div className="relative flex items-center w-full bg-dark-bg rounded-[20px] overflow-hidden">
                    {icon ?? <EditIcon className="absolute w-6 h-6 -translate-y-1/2 top-1/2 right-4 z-[0]" />}
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

export const ProfileSettingsGroup = ({ children }: { children: ReactNode; title: string }) => {
    return <div className="flex flex-col gap-6 p-6 bg-silver-sand rounded-[42px] w-full h-min">{children}</div>;
};
