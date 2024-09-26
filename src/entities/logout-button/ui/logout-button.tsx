import LogoutIcon from "../assets/logout-icon.svg?react";

import { useLogoutHook } from "../model";

const LogoutButton = () => {
    const { handleLogout } = useLogoutHook();

    return (
        <div
            className="flex items-center
    border-2 border-silver-sand hover:border-spanish-gray duration-300 cursor-pointer rounded-[90px] "
            onClick={handleLogout}
        >
            <div className="p-5">
                <LogoutIcon />
            </div>
            <span className="roboto-medium-15 text-white">Logout</span>
        </div>
    );
};

export { LogoutButton };
