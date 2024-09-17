import { UserStatus } from "@/shared/types";

import { useUserStatusHook } from "../model";
import { ProfileSettingsGroup } from "./components";

export const UserStatusBlock = () => {
    const { handleChaangeStatus, userStatus } = useUserStatusHook();

    return (
        <ProfileSettingsGroup title="Your status">
            <div className="flex gap-5 items-start w-full">
                <h2 className="onest-extra-bold-34 text-white">{"Your status"}</h2>
            </div>
            <div className="flex gap-1 w-full">
                {Object.values(UserStatus).map((statusItem) => {
                    const isSelected = userStatus === statusItem;
                    return (
                        <div
                            key={statusItem + "_user_role"}
                            className={`flex justify-center w-full py-1.5 border rounded-[20px] 
                                    ${isSelected ? "bg-white text-dark-bg" : "text-white"}
                                    roboto-medium-15 cursor-pointer duration-500`}
                            onClick={() => handleChaangeStatus(statusItem)}
                        >
                            {statusItem.charAt(0).toUpperCase() + statusItem.slice(1).toLocaleLowerCase()}
                        </div>
                    );
                })}
            </div>
        </ProfileSettingsGroup>
    );
};
