import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { ApiEndpoints } from "@/shared/api";
import { useUserContext } from "@/shared/stores";
import { UserProviders } from "@/shared/types";

const useProfileSettingsGroupHook = () => {
    const {
        register,
        handleSubmit,
        setValue,
        setError,
        control,
        formState: { errors, isValid },
    } = useForm<{ name: string; nickname: string; email: string }>({ mode: "onBlur" });

    const { user, setData } = useUserContext();

    useEffect(() => {
        if (user) {
            setValue("name", user.name ?? user.nickname);
            setValue("nickname", `@${user.nickname}`);
            setValue("email", user.email);
        }
    }, [setValue, user]);

    const handleEditPersonalInfo = (e: { name: string; nickname: string; email: string }) => {
        if (isValid && user) {
            ApiEndpoints.user
                .updateUser({
                    userId: user.userId,
                    name: e.name,
                    nickname: e.nickname.replace("@", ""),
                    email: user.provider === UserProviders.EMAIL ? "" : e.email,
                })
                .then((res) => {
                    setData({ user: res });
                })
                .catch((err) => {
                    // Если ошибка - в поле nickname
                    if (err.status === 409) {
                        setError("nickname", { message: "Nickname already exists" });
                    }
                    // ! Добавить обработку остальных ошибок
                });
        }
    };

    return { register, handleSubmit, errors, handleEditPersonalInfo, control, userProvider: user?.provider };
};

export { useProfileSettingsGroupHook };
