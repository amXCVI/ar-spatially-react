import AddAppIcon from "../assets/add-app.svg?react";
import AppsIcon from "../assets/apps-icon.svg?react";
import RemoveAppIcon from "../assets/remove-app.svg?react";

import { useAppsSelectHook } from "../domain";

const AppsSelect = ({ className }: { className?: string }) => {
    const { appsSelectRef, isActive, toggleIsActiveSearchField, handleClickApp, apps } = useAppsSelectHook();

    return (
        <div
            ref={appsSelectRef}
            className={`flex flex-col duration-500 ${isActive ? `w-32 md:w-96` : ""}
                        border-2 border-raisin-black rounded-[30px] bg-dark-gray
                        relative ${className}`}
        >
            <div
                className={`flex gap-3 ${isActive ? "justify-start" : "justify-center"} items-center p-4
                            cursor-pointer
                           `}
                onClick={() => toggleIsActiveSearchField()}
            >
                <AppsIcon className="z-10 min-w-6" />

                <span
                    className={`onest-regular-22 text-quick-silver whitespace-nowrap overflow-hidden text-ellipsis
                                hidden xl:block z-10`}
                >
                    {"Apps"}
                </span>
            </div>
            <div
                className={`flex flex-col gap-1 bg-dark-gray
                            absolute bottom-8 lg:bottom-auto lg:top-8 -left-0.5 -right-0.5 
                            rounded-t-[30px] lg:rounded-t-none lg:rounded-b-[30px]
                            border-r-2 border-l-2 border-raisin-black
                            ${isActive ? "p-4" : "p-0"}`}
            >
                {isActive &&
                    apps.map((appItem) => {
                        const isSelectedApp = appItem.isSelected;

                        return (
                            <div className="flex flex-col items-center gap-3 flex-nowrap w-full relative">
                                <div className="w-20 h-20 border border-white rounded-full flex justify-center items-center">
                                    {appItem.iconSrc({ style: { width: "4rem", height: "4rem" } })}
                                </div>
                                <span className="roboto-bold-13 text-white ">{appItem.label}</span>
                                <div
                                    onClick={() => handleClickApp(appItem.id)}
                                    className="absolute top-0 -right-0 cursor-pointer"
                                >
                                    {isSelectedApp ? <RemoveAppIcon /> : <AddAppIcon />}
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export { AppsSelect };
