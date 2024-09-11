import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";

import { ApiEndpoints } from "@/shared/api";
import { UserContext } from "@/shared/stores";
import { UserProviders } from "@/shared/types";

const useProfileSettingsGroupHook = () => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors, isValid },
    } = useForm<{ name: string; nickname: string; email: string }>();

    const { user, setData } = useContext(UserContext);

    useEffect(() => {
        if (user) {
            setValue("name", user.name ?? "");
            setValue("nickname", user.nickname);
            setValue("email", user.email);
        }
    }, [setValue, user]);

    const handleEditPersonalInfo = (e: { name: string; nickname: string; email: string }) => {
        if (isValid && user) {
            ApiEndpoints.user
                .updateUser({
                    userId: user.userId,
                    name: e.name,
                    nickname: e.nickname,
                    email: user.provider === UserProviders.EMAIL ? "" : e.email,
                })
                .then((res) => {
                    setData({ user: res });
                });
        }
    };

    return { register, handleSubmit, errors, handleEditPersonalInfo, userProvider: user?.provider };
};

export { useProfileSettingsGroupHook };
