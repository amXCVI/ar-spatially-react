import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { routes } from "@/shared/config";
import { LSConstants } from "@/shared/config/constants";

import { loginApi } from "../api";
import { LoginFormInterface } from "../types";
import { AuthContext, SignInPopupModes } from "../ui";

const useLoginHook = () => {
    const navigate = useNavigate();

    const { isOpenLoginPopup, closeLoginModal, openLoginModal, setAuthenticated } = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<LoginFormInterface>();

    const login = (e: LoginFormInterface) => {
        return loginApi.login(e);
    };

    const signup = (e: LoginFormInterface) => {
        return loginApi.signup(e);
    };

    const handleClickSignIn = (e: LoginFormInterface) => {
        if (isValid) {
            login(e).then((res) => {
                localStorage.setItem(LSConstants.accessToken, res.token);
                setAuthenticated(true);
                navigate(routes.lk);
                closeLoginModal();
            });
        }
    };

    const handleClickSignUp = (e: LoginFormInterface) => {
        if (isValid && e.password === e.passwordAgain) {
            signup(e).then((res) => {
                localStorage.setItem(LSConstants.accessToken, res.token);
                setAuthenticated(true);
                navigate(routes.lk);
                closeLoginModal();
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
