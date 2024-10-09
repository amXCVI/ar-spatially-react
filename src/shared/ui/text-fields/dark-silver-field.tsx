import React, { Fragment } from "react";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    errorMessage?: string;
}

export const DarkSilverTextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
    ({ id, label, errorMessage, ...props }: TextFieldProps, ref) => {
        return (
            <div className="flex flex-col gap-2 w-full">
                <label className="roboto-regular-13 text-gray20" htmlFor={id}>
                    {label}
                </label>

                <input
                    {...props}
                    className="roboto-regular-14 text-white w-full border-none outline-none h-8 px-4 z-[1]
                             bg-dark-silver/20 rounded-[20px] overflow-hidden border border-white/15"
                    id={id}
                    ref={ref}
                />
                {errorMessage ? <div className="regular-16 text-error px-4">{errorMessage}</div> : <Fragment />}
            </div>
        );
    },
);

interface DarkSilverTextAreaFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    errorMessage?: string;
}

export const DarkSilverTextAreaField = React.forwardRef<HTMLTextAreaElement, DarkSilverTextAreaFieldProps>(
    ({ id, label, errorMessage, ...props }: DarkSilverTextAreaFieldProps, ref) => {
        return (
            <div className="flex flex-col gap-2 w-full">
                <label className="roboto-regular-13 text-gray20" htmlFor={id}>
                    {label}
                </label>

                <textarea
                    {...props}
                    className="roboto-regular-14 text-white w-full border-none outline-none px-4 py-2 z-[1]
                             bg-dark-silver/20 rounded-[20px] overflow-scroll border border-white/15
                             "
                    id={id}
                    ref={ref}
                />
                {errorMessage ? <div className="regular-16 text-error px-4">{errorMessage}</div> : <Fragment />}
            </div>
        );
    },
);
