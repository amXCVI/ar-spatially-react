import { Fragment } from "react/jsx-runtime";

import DefaultUserAvatar from "../assets/default-user-avatar.svg?react";

import { useUserAvatarHook } from "../domain";

const UserAvatar = () => {
    const { authenticated, user } = useUserAvatarHook();

    if (!authenticated) {
        return <Fragment />;
    } else {
        return (
            <div className="border-2 border-raisin-black rounded-full bg-dark-gray h-[60px] w-[60px] flex justify-center items-center">
                {user?.avatarId ? <img /> : <DefaultUserAvatar />}
            </div>
        );
    }
};

export { UserAvatar };
