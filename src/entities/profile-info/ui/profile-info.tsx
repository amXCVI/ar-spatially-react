import CopyIcon from "../assets/copy-icon.svg?react";
import DefaultUserAvatar from "../assets/default-avatar.svg?react";

import { useProfileHook } from "../model";

const ProfileInfo = ({ className }: { className?: string }) => {
    const { user, copyToClipboardNickname } = useProfileHook();

    return (
        <div
            className={`flex gap-6 lg:gap-9 items-center p-6
                border-2 border-silver-sand rounded-[30px] lg:rounded-[55px] ${className}`}
        >
            <div
                className={`border-2 border-raisin-black rounded-full overflow-hidden
                  bg-dark-gray min-w-24 lg:min-w-32 aspect-square
                    flex justify-center items-center cursor-pointer`}
            >
                {user?.avatarId ? (
                    <img
                        src={`${import.meta.env.VITE_APP_API_BASE_URL}gateway/file/get?fileId=${user.avatarId}`}
                        className="w-full h-full"
                    />
                ) : (
                    <DefaultUserAvatar />
                )}
            </div>
            {!!user && (
                <div className="flex flex-col gap-3 max-w-full overflow-hidden">
                    <h3 className="onest-bold-24 text-white text-wrap text-ellipsis overflow-hidden">
                        {user.name ?? user.nickname}
                    </h3>
                    <div className="flex gap-3 items-center flex-wrap w-full">
                        <div
                            className="flex gap-2.5 items-center px-2 py-1
                            manrope-regular-16 text-white
                            bg-dark-charcoal rounded-lg
                            cursor-pointer"
                            onClick={copyToClipboardNickname}
                        >
                            <span>@{user.nickname}</span>
                            <CopyIcon />
                        </div>
                        <span className="manrope-regular-16 text-american-silver max-w-full text-ellipsis overflow-hidden">
                            {user.email}
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
};

export { ProfileInfo };
