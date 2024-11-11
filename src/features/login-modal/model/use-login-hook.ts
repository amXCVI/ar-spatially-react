import { useForm } from "react-hook-form";

import { ApiEndpoints } from "@/shared/api";
import { useAuthorizeHook } from "@/shared/lib/authorize-hook";
import { SignInPopupModes, useAuthContext } from "@/shared/stores/auth-provider";

import { LoginFormInterface } from "../types";

const useLoginHook = () => {
    const { onLogin } = useAuthorizeHook();

    const { isOpenLoginPopup, closeLoginModal, openLoginModal } = useAuthContext();

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<LoginFormInterface>();

    const login = (e: LoginFormInterface) => {
        return ApiEndpoints.user.login(e);
    };

    const signup = (e: LoginFormInterface) => {
        return ApiEndpoints.user.signup(e);
    };

    const handleClickSignIn = (e: LoginFormInterface) => {
        if (isValid) {
            login(e).then((res) => {
                onLogin({ token: res.token });
            });
        }
    };

    const handleClickSignUp = (e: LoginFormInterface) => {
        if (isValid && e.password === e.passwordAgain) {
            signup(e).then((res) => {
                onLogin({ token: res.token });
            });
        }
    };

    const toggleSigninModalMode = (e: SignInPopupModes) => {
        openLoginModal(e);
    };

    return {
        isOpenLoginPopup,
        closeLoginModal,
        toggleSigninModalMode,
        handleClickSignIn,
        handleClickSignUp,
        register,
        handleSubmit,
        errors,
    };
};

export { useLoginHook };
