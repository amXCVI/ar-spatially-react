import { LogoutButton } from "@/entities/logout-button";
import { ProfileInfo } from "@/entities/profile-info";

import Header from "@/features/header";

import { routes } from "@/shared/config";
import { DarkLayout } from "@/shared/ui/layouts";

import AccountIcon from "../assets/account-icon.svg?react";
import MetamaskWalletIcon from "../assets/metamask-icon.svg?react";
import UploadObjectIcon from "../assets/upload-object-icon.svg?react";

const LkPage = () => {
    return (
        <DarkLayout className="flex flex-col">
            <Header white />

            <div
                className="grid grid-cols-4
                    container mx-auto h-full px-6"
            >
                <div className="col-span-4 lg:col-span-3 flex flex-col gap-14 py-12 lg:mx-9">
                    <div className="flex flex-col gap-6">
                        <h1 className="onest-extra-bold text-white">Profile</h1>
                        <ProfileInfo />
                    </div>
                </div>

                <RightPanel className="col-span-4 lg:col-span-1" />
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
                <a href={`${routes.lk}/${routes.profileSettings}`}>
                    <div
                        className="flex items-center
                    border-2 border-silver-sand hover:border-spanish-gray duration-300 cursor-pointer rounded-[25px]"
                    >
                        <div className="p-5">
                            <AccountIcon />
                        </div>
                        <span className="roboto-medium-15 text-white">Account settings</span>
                    </div>
                </a>
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
