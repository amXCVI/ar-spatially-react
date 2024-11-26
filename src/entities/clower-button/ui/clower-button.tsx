import { Fragment } from "react/jsx-runtime";

import { BackdropModal, CloseModalIcon } from "@/shared/ui/modals";

import AddAppIcon from "../assets/add-app.svg?react";
import AttemptionIcon from "../assets/attemption-icon.svg?react";
import ClowerIcon from "../assets/clower.svg?react";
import RemoveAppIcon from "../assets/remove-app.svg?react";

import { useAppsHook, useClowerButtonHook } from "../model";
import { AppInterface } from "../types";

const ClowerButton = () => {
    const { isOpenAppsModal, openAppsModal, closeAppsModal } = useClowerButtonHook();

    const { apps, handleClickApp } = useAppsHook();

    return (
        <Fragment>
            <div
                className={`flex justify-center items-center z-[1]
                        cursor-pointer hover:bg-white50 w-14 h-14
                        border border-blue-accent bg-white30 rounded-full backdrop-blur
                        overflow-hidden`}
                onClick={openAppsModal}
            >
                <ClowerIcon />
            </div>

            <BackdropModal
                isOpen={isOpenAppsModal}
                closeModal={closeAppsModal}
                // className="bg-modal-gradient backdrop-blur-xl"
            >
                <div className="flex flex-col gap-6 p-6 w-full">
                    <div className="flex justify-between items-center w-full cursor-pointer" onClick={closeAppsModal}>
                        <div className="w-4" />
                        <b className="text-white">My apps</b>
                        <CloseModalIcon />
                    </div>

                    <div className="flex flex-col gap-2 roboto-regular-14 text-white">
                        <p className="flex gap-2 items-center">
                            <AttemptionIcon />
                            Customize your experience
                        </p>
                        <p>
                            In this section you can find, add, activate, deactivate and remove apps available. Added
                            apps will show in your menu below and activated apps will show on your home screen.
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-6">
                        {apps.map((appItem) => {
                            return (
                                <AppItem key={appItem.id + "_app"} appItem={appItem} handleClickApp={handleClickApp} />
                            );
                        })}
                    </div>
                </div>
            </BackdropModal>
        </Fragment>
    );
};

const AppItem = ({ appItem, handleClickApp }: { appItem: AppInterface; handleClickApp: (e: AppInterface) => void }) => {
    return (
        <div
            className={`flex flex-col items-center gap-1.5 relative cursor-pointer
                       px-3 py-1.5 rounded-[14px]
                       ${appItem.isActive ? "bg-blue-accent/35" : "bg-granite-gray/35"}`}
            key={appItem.id}
            onClick={(e) => {
                e.preventDefault();
                handleClickApp(appItem);
            }}
        >
            <div
                className={`border border-black/10 bg-granite-gray/35
                            rounded-full flex justify-center items-center overflow-hidden aspect-square
                            w-16 lg:w-20 p-4`}
            >
                {appItem.iconSrc ? (
                    <img src={appItem.iconSrc} alt={appItem.title} className="" />
                ) : (
                    <span className="text-6xl font-bold uppercase">{appItem.title[0]}</span>
                )}
            </div>
            <span className={`roboto-bold-13 ${appItem.isActive ? "text-blue-accent" : "text-white"} text-nowrap`}>
                {appItem.title}
            </span>
            {!appItem.default && (
                <div className="absolute top-1.5 right-1.5 cursor-pointer">
                    {appItem.isActive ? <RemoveAppIcon /> : <AddAppIcon />}
                </div>
            )}
        </div>
    );
};

export { ClowerButton };
