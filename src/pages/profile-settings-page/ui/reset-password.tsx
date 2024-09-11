import { UserProviders } from "@/shared/types";

import ViewPassswordIcon from "../assets/view-password-icon.svg?react";

import { useResetPasswordHook } from "../model";
import { ProfileSettingsGroup, TextField } from "./components";

export const ResetPasswordBlock = () => {
    const { register, handleSubmit, handleEditPassword, toggleFieldsMode, fieldsMode, userProvider } =
        useResetPasswordHook();

    if (userProvider === UserProviders.EMAIL)
        return (
            <ProfileSettingsGroup title="Password">
                <form onSubmit={handleSubmit(handleEditPassword)} className="flex flex-col gap-6 w-full">
                    <TextField
                        label="Old password"
                        {...register("password", {
                            required: "Required field",
                        })}
                        placeholder="Enter your last password"
                        type={fieldsMode}
                        icon={
                            <ViewPassswordIcon
                                className="absolute w-6 h-6 -translate-y-1/2 top-1/2 right-4 z-[2] cursor-pointer"
                                onClick={toggleFieldsMode}
                            />
                        }
                    />
                    <TextField
                        label="New password"
                        {...register("newPassword", {
                            required: "Required field",
                        })}
                        placeholder="Create new password"
                        type={fieldsMode}
                        icon={
                            <ViewPassswordIcon
                                className="absolute w-6 h-6 -translate-y-1/2 top-1/2 right-4 z-[2] cursor-pointer"
                                onClick={toggleFieldsMode}
                            />
                        }
                    />
                    <button className="ml-auto px-4 py-2 border border-white rounded-[20px]" role="submit">
                        Reset password
                    </button>
                </form>
            </ProfileSettingsGroup>
        );
};
