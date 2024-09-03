import { Fragment } from "react/jsx-runtime";

import DefaultUserAvatar from "../assets/default-user-avatar.svg?react";

import { useUserAvatarHook } from "../domain";

const UserAvatar = ({ className }: { className?: string }) => {
    const { authenticated, user } = useUserAvatarHook();

    if (!authenticated) {
        return <Fragment />;
    } else {
        return (
            <div
                className={`border-2 border-raisin-black rounded-full overflow-hidden
                          bg-dark-gray h-[60px] w-[60px] 
                            flex justify-center items-center  ${className}`}
            >
                {user?.avatarId ? (
                    <img src={`${import.meta.env.VITE_APP_API_BASE_URL}gateway/file/get?fileId=${user.avatarId}`} />
                ) : (
                    <DefaultUserAvatar />
                )}
            </div>
        );
    }
};

export { UserAvatar };
