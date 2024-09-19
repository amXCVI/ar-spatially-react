import { Controller } from "react-hook-form";

import { UserProviders } from "@/shared/types";

import { useProfileSettingsGroupHook } from "../model";
import { ProfileSettingsGroup, TextField } from "./components";

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

                <TextField label="Your name" {...register("name")} errorMessage={errors.name?.message} />
                <Controller
                    control={control}
                    name="nickname"
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
                        <TextField
                            label="Your nickname"
                            {...field}
                            onChange={(e) => {
                                if (e.target.value) {
                                    field.onChange(e);
                                }
                            }}
                            errorMessage={errors.nickname?.message}
                        />
                    )}
                />

                <TextField
                    label="Your email"
                    {...register("email")}
                    type="email"
                    errorMessage={errors.email?.message}
                    disabled={userProvider === UserProviders.EMAIL}
                />
            </form>
        </ProfileSettingsGroup>
    );
};
