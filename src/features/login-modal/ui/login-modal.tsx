import { useOutsideClick } from "@ar-kit/shared/hooks";
import { Fragment } from "react";

import { SignInPopupModes } from "@/shared/stores/auth-provider";

import AppleIcon from "./../icons/apple.svg?react";
import FacebookIcon from "./../icons/facebook.svg?react";
import GoogleIcon from "./../icons/google.svg?react";
import XIcon from "./../icons/x.svg?react";
import logo from "/images/login-popup/logo.svg";

import { useGoogleOauthHook, useLoginHook, useXOauthHook } from "../model";
import { LoginSocialButton } from "./components";
import { SignInForm } from "./signin-form";
import { SignUpForm } from "./signup-form";

const LoginModal = () => {
    const { isOpenLoginPopup, closeLoginModal, toggleSigninModalMode } = useLoginHook();

    const { handleGoogleLogin } = useGoogleOauthHook();

    const { handleXAuth } = useXOauthHook();

    const socials = [
        {
            id: "google",
            text: "Google",
            icon: <GoogleIcon />,
            href: "",
            onClick: handleGoogleLogin,
        },
        {
            id: "x",
            text: "",
            icon: <XIcon />,
            href: "",
            onClick: handleXAuth,
        },
        {
            id: "apple",
            text: "iCloud",
            icon: <AppleIcon />,
            href: "",
            onClick: () => {},
        },
        {
            id: "facebook",
            text: "Facebook",
            icon: <FacebookIcon />,
            href: "",
            onClick: () => {},
        },
    ];

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
        return <Fragment />;
    }

    return (
        <div
            className={`fixed top-0 right-0 bottom-0 left-0 
                        flex justify-center items-center 
                        backdrop-blur-sm z-[101] p-0 sm:px-5 bg-white5`}
        >
            <div
                ref={modalRef}
                className="bg-dark-bg shadow-popup-shadow sm:rounded-[60px] p-14 flex flex-col gap-10
                            w-full max-w-2xl max-h-dvh overflow-y-scroll"
            >
                <div className="flex flex-col items-center gap-4">
                    <img src={logo} alt="AR Spatially logo" />
                    <div className="text-white60 manrope-medium-18">
                        create an account to get a better AR experience
                    </div>
                </div>

                {renderLoginModalContent({ isOpenLoginPopup, toggleSigninModalMode })}

                <div className="flex flex-col items-center gap-4">
                    <span className="manrope-medium-18 text-white">Or join with</span>
                    <div className="flex gap-4">
                        {socials.map((item) => {
                            return (
                                <LoginSocialButton
                                    key={item.id}
                                    text={item.text}
                                    icon={item.icon}
                                    onClick={item.onClick}
                                />
                            );
                        })}
                    </div>
                    {/* <div className="g-signin2" data-onsuccess="onSignIn"></div> */}
                </div>

                <div
                    onClick={() => closeLoginModal()}
                    className="mx-auto manrope-medium-22 text-white underline cursor-pointer"
                >
                    Skip for now
                </div>
            </div>
        </div>
    );
};

const renderLoginModalContent = ({
    isOpenLoginPopup,
    toggleSigninModalMode,
}: {
    isOpenLoginPopup: SignInPopupModes;
    toggleSigninModalMode: (e: SignInPopupModes) => void;
}) => {
    if (isOpenLoginPopup === SignInPopupModes.SignIn) {
        return <SignInForm toggleSigninModalMode={toggleSigninModalMode} />;
    } else {
        return <SignUpForm toggleSigninModalMode={toggleSigninModalMode} />;
    }
};

export { LoginModal };
