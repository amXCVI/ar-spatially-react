import { useForm } from "react-hook-form";

import { ApiEndpoints } from "@/shared/api";
import { useAuthorizeHook } from "@/shared/lib/authorize-hook";
import { useUserContext } from "@/shared/stores";

import { SignInFormInterface } from "../types";

const useSignInHook = () => {
    const { onLogin } = useAuthorizeHook();

    const { setData } = useUserContext();

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isValid },
    } = useForm<SignInFormInterface>({ mode: "onBlur" });

    const handleClickSignIn = (e: SignInFormInterface) => {
        if (isValid) {
            ApiEndpoints.user
                .login(e)
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

    return { handleClickSignIn, register, handleSubmit, errors };
};

export { useSignInHook };
