import { LogoutButton } from "@/entities/logout-button";
import { ProfileInfo } from "@/entities/profile-info";
import { WalletConnectButton } from "@/entities/wallet-connect-button";
import { Link } from "react-router-dom";

import { ArObjectUploader } from "@/features/ar-objects-uploader";
import Header from "@/features/header";
import { MyArObjectsList } from "@/features/my-ar-objects-list";

import { routes } from "@/shared/config";
import { DarkLayout } from "@/shared/ui/layouts";

import AccountIcon from "../assets/account-icon.svg?react";
import PlusIcon from "../assets/plus-icon.svg?react";

const LkPage = () => {
    return (
        <DarkLayout className="flex flex-col">
            <Header white actionButton={<HeaderActionButton />} />

            <div
                className="grid grid-cols-4
                    container mx-auto h-full px-6"
            >
                <div className="col-span-4 lg:col-span-3 flex flex-col gap-14 py-12 lg:mx-9">
                    <div className="flex flex-col gap-6">
                        <h1 className="onest-extra-bold text-white">Profile</h1>
                        <ProfileInfo />
                    </div>

                    <MyArObjectsList />
                </div>

                <RightPanel className="col-span-4 lg:col-span-1" />
            </div>
        </DarkLayout>
    );
};

const RightPanel = ({ className }: { className?: string }) => {
    return (
        <div
            className={`flex flex-col gap-9 lg:pl-9 h-full
            lg:border-l-2 border-silver-sand
            min-h-[calc(100vh-160px)] ${className}`}
        >
            <WalletConnectButton />
            <div className="flex flex-col gap-4 w-full">
                <h4 className="onest-semibold-18 text-white">Account settings</h4>
                <Link to={routes.profileSettings}>
                    <div
                        className="flex items-center
                    border-2 border-silver-sand hover:border-spanish-gray duration-300 cursor-pointer rounded-[25px]"
                    >
                        <div className="p-5">
                            <AccountIcon />
                        </div>
                        <span className="roboto-medium-15 text-white">Account settings</span>
                    </div>
                </Link>

                <LogoutButton />

                <ArObjectUploader className="hidden lg:flex" />
            </div>
        </div>
    );
};

const HeaderActionButton = () => {
    return (
        <div
            className={`flex justify-center items-center z-[1]
                cursor-pointer hover:bg-white50 w-20 h-20
                border border-blue-accent bg-white30 rounded-full p-4 backdrop-blur
                overflow-hidden`}
        >
            <PlusIcon />
        </div>
    );
};

export { LkPage };
