import { UserProviders } from "@/shared/types";

import ViewPassswordIcon from "../assets/view-password-icon.svg?react";

import { useResetPasswordHook } from "../model";
import { BlackTextField, ProfileSettingsGroup } from "./components";

export const ResetPasswordBlock = () => {
    const { register, handleSubmit, handleEditPassword, toggleFieldsMode, fieldsMode, userProvider, errors } =
        useResetPasswordHook();

    if (userProvider === UserProviders.EMAIL)
        return (
            <ProfileSettingsGroup title="Password">
                <form onSubmit={handleSubmit(handleEditPassword)} className="flex flex-col gap-6 w-full">
                    <div className="flex gap-5 items-start w-full">
                        <h2 className="onest-extra-bold-34 text-white">{"Password"}</h2>

                        <button className="ml-auto px-2 py-1 rounded-[8px] bg-dark-charcoal" role="submit">
                            Save
                        </button>
                    </div>

                    <BlackTextField
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
                        errorMessage={errors.password?.message}
                    />
                    <BlackTextField
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
                    {/* <button className="ml-auto px-4 py-2 border border-white rounded-[20px]" role="submit">
                        Reset password
                    </button> */}
                </form>
            </ProfileSettingsGroup>
        );
};
