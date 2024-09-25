import DefaultUserAvatar from "../assets/default-user-avatar.svg?react";

import { useUserAvatarHook } from "../domain";

const UserAvatar = ({ className }: { className?: string }) => {
    const { user, handleClickOnAvatar } = useUserAvatarHook();

    return (
        <div
            className={`border-2 border-raisin-black rounded-full overflow-hidden
                      bg-dark-gray h-14 w-14 aspect-square
                        flex justify-center items-center cursor-pointer ${className}`}
            onClick={handleClickOnAvatar}
        >
            {user?.avatarId ? (
                <img src={`${import.meta.env.VITE_APP_API_BASE_URL}gateway/file/get?fileId=${user.avatarId}`} />
            ) : (
                <DefaultUserAvatar />
            )}
        </div>
    );
};

export { UserAvatar };
