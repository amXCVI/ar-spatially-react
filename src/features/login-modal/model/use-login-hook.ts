import { useForm } from "react-hook-form";

import { ApiEndpoints } from "@/shared/api";
import { useAuthorizeHook } from "@/shared/lib/authorize-hook";
import { useUserContext } from "@/shared/stores";
import { SignInPopupModes, useAuthContext } from "@/shared/stores/auth-provider";

import { LoginFormInterface } from "../types";

const useLoginHook = () => {
    const { onLogin } = useAuthorizeHook();

    const { isOpenLoginPopup, closeLoginModal, openLoginModal } = useAuthContext();
    const { setData } = useUserContext();

    const {
        register,
        handleSubmit,
        setError,
        reset,
        watch,
        formState: { errors, isValid },
    } = useForm<LoginFormInterface>({ mode: "onBlur" });

    const login = (e: LoginFormInterface) => {
        return ApiEndpoints.user.login(e);
    };

    const signup = (e: LoginFormInterface) => {
        return ApiEndpoints.user.signup(e);
    };

    const handleClickSignIn = (e: LoginFormInterface) => {
        if (isValid) {
            login(e)
                .then((res) => {
                    setData({ user: res.user });
                    onLogin({ token: res.token });
                })
                .catch((err) => {
                    setError("login", { message: err.error });
                    setError("password", { message: err.error });
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
        reset(watch(), { keepValues: false, keepDirty: false, keepDefaultValues: false });

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
