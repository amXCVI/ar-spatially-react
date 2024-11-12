import { Controller } from "react-hook-form";

import { UserProviders } from "@/shared/types";

import EditIcon from "../assets/edit-icon.svg?react";

import { useProfileSettingsGroupHook } from "../model";
import { BlackTextField, ProfileSettingsGroup } from "./components";

export const PersonalInfoBlock = () => {
    const { register, handleSubmit, handleEditPersonalInfo, control, userProvider, errors } =
        useProfileSettingsGroupHook();

    return (
        <ProfileSettingsGroup title="Personal info">
            <form onSubmit={handleSubmit(handleEditPersonalInfo)} className="flex flex-col gap-6 w-full">
                <div className="flex gap-5 items-start w-full">
                    <h2 className="onest-extra-bold-34 text-white">{"Personal info"}</h2>

                    <button className="ml-auto px-2 py-1 rounded-[8px] bg-dark-charcoal" role="submit">
                        Save
                    </button>
                </div>

                <BlackTextField
                    label="Your name"
                    {...register("name")}
                    errorMessage={errors.name?.message}
                    icon={<EditIcon className="absolute w-6 h-6 -translate-y-1/2 top-1/2 right-4 z-[0]" />}
                />
                <Controller
                    control={control}
                    name="nickname"
                    defaultValue=""
                    rules={{
                        required: "Required field",
                        pattern: {
                            value: /^@[a-zA-Z0-9]*$/,
                            message: "Invalid nickname",
                        },
                        // maxLength: { value: 10, message: `Максимум ${10} знаков` },
                        minLength: { value: 2, message: `Nickname cannot be empty` },
                    }}
                    render={({ field }) => (
                        <BlackTextField
                            label="Your nickname"
                            {...field}
                            onChange={(e) => {
                                if (e.target.value) {
                                    field.onChange(e);
                                }
                            }}
                            errorMessage={errors.nickname?.message}
                            icon={<EditIcon className="absolute w-6 h-6 -translate-y-1/2 top-1/2 right-4 z-[0]" />}
                        />
                    )}
                />

                <BlackTextField
                    label="Your email"
                    {...register("email")}
                    type="email"
                    errorMessage={errors.email?.message}
                    disabled={userProvider === UserProviders.EMAIL}
                    icon={<EditIcon className="absolute w-6 h-6 -translate-y-1/2 top-1/2 right-4 z-[0]" />}
                />
            </form>
        </ProfileSettingsGroup>
    );
};
