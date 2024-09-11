import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { ApiEndpoints } from "@/shared/api";
import { useUserHook } from "@/shared/stores";

const useProfileSettingsGroupHook = () => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors, isValid },
    } = useForm<{ name: string; nickname: string; email: string }>();

    const { user, setData } = useUserHook();

    useEffect(() => {
        if (user) {
            setValue("name", user.name ?? "");
            setValue("nickname", user.nickname);
            setValue("email", user.email);
        }
    }, [setValue, user]);

    const handleEditPersonalInfo = (e: { name: string; nickname: string; email: string }) => {
        if (isValid && user) {
            ApiEndpoints.user.updateUser({ userId: user.userId, name: e.name, nickname: e.nickname }).then((res) => {
                setData({ user: res });
            });
        }
    };

    return { register, handleSubmit, errors, handleEditPersonalInfo };
};

export { useProfileSettingsGroupHook };
