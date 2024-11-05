import DefaultUserAvatar from "../assets/default-user-avatar.svg?react";

import { useUserAvatarHook } from "../domain";

const UserAvatar = ({ className }: { className?: string }) => {
    const { user, handleClickOnAvatar } = useUserAvatarHook();

    return (
        <div
            className={`border border-white/25 bg-granite-gray/35 backdrop-blur-sm rounded-full overflow-hidden
                       h-14 w-14 aspect-square
                        flex justify-center items-center cursor-pointer ${className}`}
            onClick={handleClickOnAvatar}
        >
            {user?.avatarId ? (
                <img
                    src={`${import.meta.env.VITE_APP_API_BASE_URL}gateway/file/get?fileId=${user.avatarId}`}
                    alt={user.name}
                />
            ) : (
                <DefaultUserAvatar />
            )}
        </div>
    );
};

export { UserAvatar };
