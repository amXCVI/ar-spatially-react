import { UserProviders } from "@/shared/types";

import { useProfileSettingsGroupHook } from "../model";
import { ProfileSettingsGroup, TextField } from "./components";

export const PersonalInfoBlock = () => {
    const { register, handleSubmit, handleEditPersonalInfo, userProvider } = useProfileSettingsGroupHook();

    return (
        <ProfileSettingsGroup title="Personal info">
            <form onSubmit={handleSubmit(handleEditPersonalInfo)} className="flex flex-col gap-6 w-full">
                <div className="flex gap-5 items-start w-full">
                    <h2 className="onest-extra-bold-34 text-white">{"Personal info"}</h2>

                    <button className="ml-auto px-2 py-1 rounded-[8px] bg-dark-charcoal" role="submit">
                        Save
                    </button>
                </div>

                <TextField
                    label="Your name"
                    {...register("name", {
                        required: "Required field",
                    })}
                />
                <TextField
                    label="Your nickname"
                    {...register("nickname", {
                        required: "Required field",
                    })}
                />
                <TextField
                    label="Your email"
                    {...register("email", {
                        required: "Required field",
                    })}
                    type="email"
                    disabled={userProvider === UserProviders.EMAIL}
                />
            </form>
        </ProfileSettingsGroup>
    );
};
