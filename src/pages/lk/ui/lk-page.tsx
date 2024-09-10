import { LogoutButton } from "@/entities/logout-button";

import Header from "@/features/header";

import { DarkLayout } from "@/shared/ui/layouts";

import AccountIcon from "../assets/account-icon.svg?react";
import CopyIcon from "../assets/copy-icon.svg?react";
import DefaultUserAvatar from "../assets/default-avatar.svg?react";
import MetamaskWalletIcon from "../assets/metamask-icon.svg?react";
import UploadObjectIcon from "../assets/upload-object-icon.svg?react";

import { useProfileHook } from "../model";

const LkPage = () => {
    const { user } = useProfileHook();

    return (
        <DarkLayout
            className="flex flex-col 
               bg-[url(/images/product/bg.svg)] bg-cover bg-no-repeat bg-center
               "
        >
            <Header white />

            <div
                className="grid grid-cols-4
                    container mx-auto h-full px-6"
            >
                <div className="col-span-4 lg:col-span-3 flex flex-col gap-14 py-12 lg:mx-9">
                    <div className="flex flex-col gap-6">
                        <h1 className="onest-extra-bold text-white">Profile</h1>
                        <div
                            className="flex gap-6 lg:gap-9 items-center p-6
                                        border-2 border-silver-sand rounded-[30px] lg:rounded-[55px]"
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
                            <div className="flex flex-col gap-3">
                                <h3 className="onest-bold-24 text-white">{user?.name}</h3>
                                <div className="flex gap-3 items-center flex-wrap">
                                    <div
                                        className="flex gap-2.5 items-center px-2 py-1
                                                    manrope-regular-16 text-white
                                                    bg-dark-charcoal rounded-lg"
                                    >
                                        <span>@{user?.nickname}</span>
                                        <CopyIcon />
                                    </div>
                                    <span className="manrope-regular-16 text-american-silver">{user?.email}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <RightPanel className="lg:col-span-1" />
            </div>
        </DarkLayout>
    );
};

const RightPanel = ({ className }: { className?: string }) => {
    return (
        <div
            className={`flex flex-col gap-9 pl-9 h-full
            border-l-2 border-silver-sand
            min-h-[calc(100vh-160px)] ${className}`}
        >
            <div className="flex flex-col gap-4 w-full">
                <h4 className="onest-semibold-18 text-white">Your wallet</h4>
                <div
                    className="flex items-center
                    border-2 border-silver-sand hover:border-spanish-gray duration-300 cursor-pointer rounded-[25px]"
                >
                    <div className="p-5">
                        <MetamaskWalletIcon />
                    </div>
                    <span className="roboto-medium-15 text-white">Connect digital wallet</span>
                </div>
            </div>
            <div className="flex flex-col gap-4 w-full">
                <h4 className="onest-semibold-18 text-white">Account settings</h4>
                <div
                    className="flex items-center
                    border-2 border-silver-sand hover:border-spanish-gray duration-300 cursor-pointer rounded-[25px]"
                >
                    <div className="p-5">
                        <AccountIcon />
                    </div>
                    <span className="roboto-medium-15 text-white">Account settings</span>
                </div>
                <LogoutButton />
            </div>
            <div className="flex flex-col gap-4 w-full">
                <h4 className="onest-semibold-18 text-white">Load AR Object</h4>
                <div
                    className="flex flex-col justify-center items-center aspect-square
                    border-2 border-dashed border-silver-sand hover:border-spanish-gray duration-300 cursor-pointer rounded-[25px]"
                >
                    <div className="p-5">
                        <UploadObjectIcon />
                    </div>
                    <span className="roboto-medium-15 text-spanish-gray text-center">
                        Select or drag files <br />
                        (.glb)
                    </span>
                </div>
            </div>
        </div>
    );
};

export { LkPage };
