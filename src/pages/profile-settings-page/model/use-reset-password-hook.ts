import { useState } from "react";
import { useForm } from "react-hook-form";

import { ApiEndpoints } from "@/shared/api";
import { useUserContext } from "@/shared/stores";

const useResetPasswordHook = () => {
    const [fieldsMode, setFieldsMode] = useState<"password" | "text">("password");

    const { user } = useUserContext();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<{ password: string; newPassword: string; pushToken: string }>();

    const handleEditPassword = (e: { password: string; newPassword: string; pushToken: string }) => {
        ApiEndpoints.user.updateUserPassword({ newPassword: e.newPassword, password: e.password, pushToken: "" });
    };

    const toggleFieldsMode = () => {
        setFieldsMode((e) => (e === "text" ? "password" : "text"));
    };

    return {
        register,
        handleSubmit,
        errors,
        handleEditPassword,
        toggleFieldsMode,
        fieldsMode,
        userProvider: user?.provider,
    };
};

export { useResetPasswordHook };
