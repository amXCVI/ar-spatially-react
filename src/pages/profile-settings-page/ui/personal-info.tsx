import { UserProviders } from "@/shared/types";
import { useProfileSettingsGroupHook } from "../model";
import { ProfileSettingsGroup, TextField } from "./components";

export const PersonalInfoBlock = () => {
    const { register, handleSubmit, handleEditPersonalInfo, userProvider } = useProfileSettingsGroupHook();

    return (
        <ProfileSettingsGroup title="Personal info">
            <form onSubmit={handleSubmit(handleEditPersonalInfo)} className="flex flex-col gap-6 w-full">
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
                <button className="ml-auto px-4 py-2 border border-white rounded-[20px]" role="submit">
                    Edit info
                </button>
            </form>
        </ProfileSettingsGroup>
    );
};