import AddAppIcon from "../assets/add-app.svg?react";
import AppsIcon from "../assets/apps-icon.svg?react";
import RemoveAppIcon from "../assets/remove-app.svg?react";

import { useAppsSelectHook } from "../domain";

const AppsSelect = ({ className }: { className?: string }) => {
    const { appsSelectRef, isActive, toggleIsActiveSearchField, handleClickApp, apps } = useAppsSelectHook();

    return (
        <div
            ref={appsSelectRef}
            className={`flex flex-col duration-500 ${isActive ? `w-32 md:w-[${apps.length * 100}px]` : ""}
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
                className={`flex flex-col lg:flex-row gap-1 bg-dark-gray
                            absolute bottom-8 lg:bottom-auto lg:top-8 -left-0.5 -right-0.5 
                            rounded-t-[30px] lg:rounded-t-none lg:rounded-b-[30px]
                            border-r-2 border-l-2 border-raisin-black
                            ${isActive ? "p-4" : "p-0"} duration-500`}
            >
                {isActive &&
                    apps.map((appItem) => {
                        const isSelectedApp = appItem.isSelected;

                        return (
                            <div
                                className="flex flex-col items-center gap-3 flex-nowrap w-full relative"
                                key={appItem.layer.id}
                            >
                                <div className="w-20 h-20 border border-white rounded-full flex justify-center items-center">
                                    {appItem.iconSrc ? (
                                        <img src={appItem.iconSrc} className="w-16 h-16" />
                                    ) : (
                                        <span className="text-6xl font-bold uppercase">{appItem.layer.title[0]}</span>
                                    )}
                                </div>
                                <span className="roboto-bold-13 text-white ">{appItem.layer.title}</span>
                                <div
                                    onClick={() => handleClickApp(appItem.layer.id)}
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
