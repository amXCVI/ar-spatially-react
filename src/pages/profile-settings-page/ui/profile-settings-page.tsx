import { LogoutButton } from "@/entities/logout-button";
import { ProfileInfo } from "@/entities/profile-info";
import { ReactNode } from "react";
import React from "react";

import Header from "@/features/header";

import { routes } from "@/shared/config";
import { UserProviders, UserStatus } from "@/shared/types";
import { DarkLayout } from "@/shared/ui/layouts";

import BackIcon from "../assets/back-icon.svg?react";
import EditIcon from "../assets/edit-icon.svg?react";
import ViewPassswordIcon from "../assets/view-password-icon.svg?react";

import { useProfileSettingsGroupHook, useResetPasswordHook, useUserStatusHook } from "../model";

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

                <RightPanel />
            </div>
        </DarkLayout>
    );
};

const PersonalInfoBlock = () => {
    const { register, handleSubmit, handleEditPersonalInfo } = useProfileSettingsGroupHook();

    return (
        <ProfileSettingsGroup title="Personal info">
            <form onSubmit={handleSubmit(handleEditPersonalInfo)} className="flex flex-col gap-6 w-full">
                <TextField
                    label="Your name"
                    {...register("name", {
                        required: "Required field",
                    })}
                />
                <TextField
                    label="Your nickname"
                    {...register("nickname", {
                        required: "Required field",
                    })}
                />
                <TextField
                    label="Your email"
                    {...register("email", {
                        required: "Required field",
                    })}
                    type="email"
                    disabled
                    icon={<div />}
                />
                <button className="ml-auto px-4 py-2 border border-white rounded-[20px]" role="submit">
                    Edit info
                </button>
            </form>
        </ProfileSettingsGroup>
    );
};

const ResetPasswordBlock = () => {
    const { register, handleSubmit, handleEditPassword, toggleFieldsMode, fieldsMode, userProvider } =
        useResetPasswordHook();

    if (userProvider === UserProviders.LOCAL)
        return (
            <ProfileSettingsGroup title="Password">
                <form onSubmit={handleSubmit(handleEditPassword)} className="flex flex-col gap-6 w-full">
                    <TextField
                        label="Old password"
                        {...register("password", {
                            required: "Required field",
                        })}
                        placeholder="Enter your last password"
                        type={fieldsMode}
                        icon={
                            <ViewPassswordIcon
                                className="absolute w-6 h-6 -translate-y-1/2 top-1/2 right-4 z-[2] cursor-pointer"
                                onClick={toggleFieldsMode}
                            />
                        }
                    />
                    <TextField
                        label="New password"
                        {...register("newPassword", {
                            required: "Required field",
                        })}
                        placeholder="Create new password"
                        type={fieldsMode}
                        icon={
                            <ViewPassswordIcon
                                className="absolute w-6 h-6 -translate-y-1/2 top-1/2 right-4 z-[2] cursor-pointer"
                                onClick={toggleFieldsMode}
                            />
                        }
                    />
                    <button className="ml-auto px-4 py-2 border border-white rounded-[20px]" role="submit">
                        Reset password
                    </button>
                </form>
            </ProfileSettingsGroup>
        );
};

const UserStatusBlock = () => {
    const { handleChaangeStatus, userStatus } = useUserStatusHook();

    return (
        <ProfileSettingsGroup title="Your status">
            <div className="flex gap-1 w-full">
                {Object.values(UserStatus).map((statusItem) => {
                    const isSelected = userStatus === statusItem;
                    return (
                        <div
                            key={statusItem + "_user_role"}
                            className={`flex justify-center w-full py-1.5 border rounded-[20px] 
                                    ${isSelected ? "bg-white text-dark-bg" : "text-white"}
                                    roboto-medium-15 cursor-pointer duration-500`}
                            onClick={() => handleChaangeStatus(statusItem)}
                        >
                            {statusItem.charAt(0).toUpperCase() + statusItem.slice(1).toLocaleLowerCase()}
                        </div>
                    );
                })}
            </div>
        </ProfileSettingsGroup>
    );
};

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    errorMessage?: string;
    icon?: ReactNode;
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
    ({ id, label, icon, ...props }: TextFieldProps, ref) => {
        return (
            <div className="flex flex-col gap-2 w-full">
                <label className="roboto-regular-13 text-gray20" htmlFor={id}>
                    {label}
                </label>
                <div className="relative flex items-center w-full bg-dark-bg rounded-[20px] overflow-hidden">
                    {icon ?? <EditIcon className="absolute w-6 h-6 -translate-y-1/2 top-1/2 right-4 z-[0]" />}
                    <input
                        {...props}
                        className="w-full border-none outline-none h-8 px-4 bg-transparent z-[1]"
                        id={id}
                        ref={ref}
                    />
                </div>
            </div>
        );
    },
);

const ProfileSettingsGroup = ({ children, title }: { children: ReactNode; title: string }) => {
    return (
        <div className="flex flex-col gap-6 p-6 bg-silver-sand rounded-[42px] w-full h-min">
            <h2 className="onest-extra-bold-34 text-white">{title}</h2>
            {children}
        </div>
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
