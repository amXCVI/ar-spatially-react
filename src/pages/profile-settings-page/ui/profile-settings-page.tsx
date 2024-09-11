import { LogoutButton } from "@/entities/logout-button";
import { ProfileInfo } from "@/entities/profile-info";

import Header from "@/features/header";

import { routes } from "@/shared/config";
import { DarkLayout } from "@/shared/ui/layouts";

import BackIcon from "../assets/back-icon.svg?react";

import { PersonalInfoBlock } from "./personal-info";
import { ResetPasswordBlock } from "./reset-password";
import { UserStatusBlock } from "./user-status";

const ProfileSettingsPage = () => {
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

                    <div className="flex flex-col xl:flex-row gap-6 max-w-screen-2sm xl:max-w-full w-full">
                        <PersonalInfoBlock />

                        <ResetPasswordBlock />

                        <UserStatusBlock />
                    </div>
                </div>

                <RightPanel className="hidden lf:flex" />
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
                <a href={`${routes.lk}`}>
                    <div
                        className="flex items-center
                    border-2 border-silver-sand hover:border-spanish-gray duration-300 cursor-pointer rounded-[25px]"
                    >
                        <div className="p-5 min-w-16 flex justify-center">
                            <BackIcon />
                        </div>
                        <span className="roboto-medium-15 text-white">Back</span>
                    </div>
                </a>
                <LogoutButton />
            </div>
        </div>
    );
};

export { ProfileSettingsPage };
