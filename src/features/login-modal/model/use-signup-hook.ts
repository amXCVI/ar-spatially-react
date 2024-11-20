import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { ApiEndpoints } from "@/shared/api";
import { useAuthorizeHook } from "@/shared/lib/authorize-hook";
import { useUserContext } from "@/shared/stores";

import { SignUpFormInterface } from "../types";

const TIMER_SECONDS = 60;

const useSignUpHook = () => {
    const { onLogin } = useAuthorizeHook();

    const { setData } = useUserContext();

    const [signUpData, setSignUpData] = useState<{ email: string; password: string } | null>(null);

    const [waitingVerificationCode, setWaitingVerificationCode] = useState<string | false>(false);

    const [verifyCodeError, setVerifyCodeError] = useState<string | null>(null);

    const [remainingSeconds, setRemainingSeconds] = useState<number>(0);

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isValid },
    } = useForm<SignUpFormInterface>({ mode: "onBlur" });

    useEffect(() => {
        let interval = null;

        if (remainingSeconds > 0) {
            interval = setInterval(() => {
                setRemainingSeconds((prev) => prev - 1);
            }, 1000);
        } else if (remainingSeconds === 0 && interval) {
            clearInterval(interval);
            alert("Время вышло!");
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [remainingSeconds]);

    const handleClickSignUp = (e?: SignUpFormInterface) => {
        if (e) {
            // Запрос из формы
            if (isValid) {
                if (e.password !== e.passwordAgain) {
                    setError("password", { message: "passwords do not match" });
                    return;
                }

                setSignUpData({ email: e.login, password: e.password });

                ApiEndpoints.user
                    .getVerificationCode({ email: e.login })
                    .then(() => {
                        setWaitingVerificationCode("");
                        setRemainingSeconds(TIMER_SECONDS);
                    })
                    .catch((err) => {
                        setError("login", { message: err.error });
                        setRemainingSeconds(0);
                    });
            }
        } else {
            // Запрос повторно кода
            if (signUpData && !remainingSeconds) {
                ApiEndpoints.user
                    .getVerificationCode({ email: signUpData.email })
                    .then(() => {
                        setWaitingVerificationCode("");
                        setRemainingSeconds(TIMER_SECONDS);
                    })
                    .catch((err) => {
                        setError("login", { message: err.error });
                        setRemainingSeconds(0);
                    });
            }
        }
    };

    const checkVerifyCode = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault();

        if (waitingVerificationCode && signUpData) {
            ApiEndpoints.user
                .signup({
                    code: waitingVerificationCode,
                    login: signUpData.email,
                    password: signUpData.password,
                })
                .then((res) => {
                    onLogin({ token: res.token });
                    setData({ user: res.user });
                })
                .catch((err) => {
                    setVerifyCodeError(err.error);
                });
        }
    };

    const onChangeVerifyCode = (e: ChangeEvent<HTMLInputElement>) => {
        setVerifyCodeError(null);
        setWaitingVerificationCode(e.target.value);
    };

    const maskEmail = (email: string) => {
        return email.replace(/^(.{2})(.*)(@.*)$/, "$1" + "***" + "$3");
    };

    return {
        handleClickSignUp,
        register,
        handleSubmit,
        checkVerifyCode,
        onChangeVerifyCode,
        maskEmail,
        errors,
        waitingVerificationCode,
        signUpData,
        verifyCodeError,
        remainingSeconds,
    };
};

export { useSignUpHook };
