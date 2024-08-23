import { useOutsideClick } from "@ar-kit/shared/hooks";
import React from "react";

import AppleIcon from "./../icons/apple.svg?react";
import FacebookIcon from "./../icons/facebook.svg?react";
import GoogleIcon from "./../icons/google.svg?react";
import XIcon from "./../icons/x.svg?react";
import logo from "/images/login-popup/logo.svg";

import { useLoginHook } from "../model";
import { SignInPopupModes } from "./auth-provider";

const socials = [
    {
        id: "google",
        text: "Google",
        icon: <GoogleIcon />,
        href: "",
    },
    {
        id: "x",
        text: "",
        icon: <XIcon />,
        href: "",
    },
    {
        id: "apple",
        text: "iCloud",
        icon: <AppleIcon />,
        href: "",
    },
    {
        id: "facebook",
        text: "Facebook",
        icon: <FacebookIcon />,
        href: "",
    },
];

const LoginModal = () => {
    const {
        isOpenLoginPopup,
        closeLoginModal,
        toggleSigninModalMode,
        handleClickSignIn,
        handleClickSignUp,
        register,
        handleSubmit,
        errors,
    } = useLoginHook();

    const modalRef = useOutsideClick(() => {
        closeLoginModal();
    });

    if (isOpenLoginPopup) {
        // push to history when modal opens
        window.history.pushState(null, "", window.location.href);

        // close modal on 'back'
        window.onpopstate = () => {
            closeLoginModal();
        };
    }

    if (isOpenLoginPopup === SignInPopupModes.Closed) {
        return <div />;
    }

    return (
        <div
            className={`fixed top-0 right-0 bottom-0 left-0 flex justify-center items-center backdrop-blur-sm z-[100] p-0 sm:p-5 bg-white5`}
        >
            <div
                ref={modalRef}
                className="bg-dark-bg shadow-popup-shadow sm:rounded-[60px] p-14 flex flex-col gap-10
                            w-full max-w-2xl"
            >
                <div className="flex flex-col items-center gap-4">
                    <img src={logo} />
                    <div className="text-white60 manrope-medium-18">
                        create an account to get a better AR experience
                    </div>
                </div>

                <form
                    className="flex flex-col w-full gap-4"
                    onSubmit={
                        isOpenLoginPopup === SignInPopupModes.SignIn
                            ? handleSubmit(handleClickSignIn)
                            : handleSubmit(handleClickSignUp)
                    }
                >
                    <div className="flex flex-col w-full gap-2.5">
                        <TextField
                            {...register("login", {
                                required: "Required field",
                            })}
                            type="email"
                            label="Email"
                            id="email"
                            placeholder="Your Email"
                            errorMessage={errors.login?.message}
                        />
                    </div>

                    <div className="flex flex-col w-full gap-2.5">
                        <TextField
                            {...register("password", {
                                required: "Required field",
                            })}
                            id="password"
                            label="Password"
                            placeholder="Your Password"
                            type="password"
                            errorMessage={errors.password?.message}
                        />

                        {isOpenLoginPopup === SignInPopupModes.SignUp && (
                            <TextField
                                {...register("passwordAgain", {
                                    required: "Required field",
                                })}
                                id="password_again"
                                label=""
                                placeholder="Your Password Again"
                                type="password"
                                errorMessage={errors.passwordAgain?.message}
                            />
                        )}
                    </div>

                    <div className="flex flex-col-reverse lg:flex-row gap-4 w-full">
                        <button
                            type={isOpenLoginPopup === SignInPopupModes.SignIn ? "submit" : "button"}
                            onClick={
                                isOpenLoginPopup === SignInPopupModes.SignIn
                                    ? handleSubmit(handleClickSignIn)
                                    : () => toggleSigninModalMode(SignInPopupModes.SignIn)
                            }
                            className={`flex justify-center flex-nowrap w-full text-nowrap gap-2.5 border border-gray70 rounded-[18px] px-5 py-3 manrope-semibold-16 cursor-pointer ${isOpenLoginPopup === SignInPopupModes.SignIn ? "bg-white text-black" : "bg-none text-white"}`}
                        >
                            <span
                                className={isOpenLoginPopup === SignInPopupModes.SignIn ? "hidden" : "hidden md:block"}
                            >
                                Already have an account?
                            </span>
                            <a className="underline cursor-pointer">Sign in</a>
                        </button>
                        <button
                            type={isOpenLoginPopup === SignInPopupModes.SignUp ? "submit" : "button"}
                            onClick={
                                isOpenLoginPopup === SignInPopupModes.SignUp
                                    ? handleSubmit(handleClickSignUp)
                                    : () => toggleSigninModalMode(SignInPopupModes.SignUp)
                            }
                            className={`flex w-full text-nowrap justify-center items-center border border-gray70 rounded-[18px] px-5 py-3 manrope-semibold-16 cursor-pointer ${isOpenLoginPopup === SignInPopupModes.SignUp ? "bg-white text-black" : "bg-none text-white"}`}
                        >
                            Create an account
                        </button>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <span className="manrope-medium-18 text-white">Or join with</span>
                        <div className="flex gap-4">
                            {socials.map((item) => {
                                return <SocialButton key={item.id} text={item.text} icon={item.icon} />;
                            })}
                        </div>
                    </div>
                </form>

                <div
                    onClick={closeLoginModal}
                    className="mx-auto manrope-medium-22 text-white underline cursor-pointer"
                >
                    Skip for now
                </div>
            </div>
        </div>
    );
};

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label: string;
    errorMessage?: string;
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
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
                    className={`border ${errorMessage ? "border-gray70" : "border-gray70"} text-white onest-regular-18 px-6 py-3 rounded-[25px]`}
                    ref={ref}
                    {...props}
                />
                {/* <div className="absolute -bottom-4 manrope-regular-12 text-red-500">{errorMessage}</div> */}
            </div>
        );
    },
);

const SocialButton = ({ icon }: { text?: string; icon: JSX.Element }) => {
    return (
        <div className="rounded-[25px] px-4 py-3 flex items-center gap-2.5 cursor-pointer">
            {/* <span className="hidden md:block manrope-bold-18 text-white">{text}</span> */}
            {icon}
        </div>
    );
};

export { LoginModal };
