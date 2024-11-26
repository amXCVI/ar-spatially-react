import { forwardRef } from "react";

import { SignInPopupModes } from "@/shared/stores/auth-provider";

export const LoginSocialButton = ({ icon, onClick }: { text?: string; icon: JSX.Element; onClick: () => void }) => {
    return (
        <div
            className="rounded-[25px] px-4 py-3 flex items-center gap-2.5 cursor-pointer g_id_signin"
            onClick={onClick}
        >
            {/* <span className="hidden md:block manrope-bold-18 text-white">{text}</span> */}
            {icon}
        </div>
    );
};

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label: string;
    errorMessage?: string;
}

export const LoginTextField = forwardRef<HTMLInputElement, TextFieldProps>(
    ({ id, label, className, errorMessage, ...props }: TextFieldProps, ref) => {
        return (
            <div className={`relative flex flex-col gap-2.5 ${className}`}>
                {label && (
                    <label htmlFor={id} className="manrope-bold-18 text-white">
                        {label}
                    </label>
                )}

                <input
                    id={id}
                    className={`border ${errorMessage ? "border-red-500" : "border-gray70"} bg-dark-bg text-white onest-regular-18 px-6 py-3 rounded-[25px] duration-300`}
                    ref={ref}
                    {...props}
                />
                <div className="absolute -bottom-4 left-6 manrope-regular-12 text-red-500">{errorMessage}</div>
            </div>
        );
    },
);

export const LoginActionButtons = ({
    signInPopupMode,
    handleSubmitForm,
    toggleSigninModalMode,
}: {
    signInPopupMode: SignInPopupModes;
    handleSubmitForm: () => void;
    toggleSigninModalMode: (e: SignInPopupModes) => void;
}) => {
    return (
        <div className="flex flex-col-reverse lg:flex-row gap-4 w-full">
            <button
                type={signInPopupMode === SignInPopupModes.SignIn ? "submit" : "button"}
                onClick={
                    signInPopupMode === SignInPopupModes.SignIn
                        ? handleSubmitForm
                        : () => toggleSigninModalMode(SignInPopupModes.SignIn)
                }
                className={`flex justify-center flex-nowrap w-full text-nowrap gap-2.5 border border-gray70 rounded-[25px] px-5 py-3 manrope-semibold-16 cursor-pointer ${signInPopupMode === SignInPopupModes.SignIn ? "bg-white text-black" : "bg-none text-white"}`}
            >
                <span className={signInPopupMode === SignInPopupModes.SignIn ? "hidden" : "hidden md:block"}>
                    Already have an account?
                </span>
                <a className="underline cursor-pointer">Sign in</a>
            </button>
            <button
                type={signInPopupMode === SignInPopupModes.SignUp ? "submit" : "button"}
                onClick={
                    signInPopupMode === SignInPopupModes.SignUp
                        ? handleSubmitForm
                        : () => toggleSigninModalMode(SignInPopupModes.SignUp)
                }
                className={`flex w-full text-nowrap justify-center items-center border border-gray70 rounded-[25px] px-5 py-3 manrope-semibold-16 cursor-pointer ${signInPopupMode === SignInPopupModes.SignUp ? "bg-white text-black" : "bg-none text-white"}`}
            >
                Create an account
            </button>
        </div>
    );
};
