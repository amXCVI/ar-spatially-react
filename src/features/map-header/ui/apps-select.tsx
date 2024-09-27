import { MapBottomSheet, useMapBottomSheetHook } from "@/entities/map-bottom-sheet";

import { LayerInterface, LayerStatus } from "@/shared/types";

import AddAppIcon from "../assets/add-app.svg?react";
import AppsIcon from "../assets/apps-icon.svg?react";
import RemoveAppIcon from "../assets/remove-app.svg?react";

import { useAppsSelectHook } from "../domain";

const AppsSelect = ({ className }: { className?: string }) => {
    const { appsSelectRef, isActive, toggleIsActiveSearchField, handleClickApp, layersList } = useAppsSelectHook();

    const { openBottomSheet, closeBottomSheet, isOpen } = useMapBottomSheetHook();

    return (
        <div
            className={`flex flex-col duration-500 
                        border border-white rounded-[30px] bg-dark-gray
                        relative w-10 h-10 lg:w-auto lg:h-14 aspect-square ${className}`}
        >
            <div
                className={`flex gap-3 ${isActive ? "justify-start" : "justify-center"} items-center p-2 lg:px-4 m-auto
                            cursor-pointer
                           `}
                onClick={() => {
                    toggleIsActiveSearchField();
                    openBottomSheet();
                }}
            >
                <AppsIcon className="z-10 lg:w-6 lg:h-6" />

                <span
                    className={`onest-regular-22 text-quick-silver whitespace-nowrap overflow-hidden text-ellipsis
                                hidden lg:block z-10`}
                >
                    {"Apps"}
                </span>
            </div>
            <div
                ref={appsSelectRef}
                className={`hidden xl:flex flex-row gap-6 justify-between flex-wrap
                            absolute xl:-top-1 xl:-left-1 w-56 ${isActive ? "max-w-80" : "max-w-0"}
                            bg-dark-gray rounded-[30px]
                            border-2 border-raisin-black
                            ${isActive ? "p-4 pb-14 xl:pb-0 xl:pt-14" : "p-0"} duration-500`}
            >
                {isActive &&
                    layersList.map((appItem) => {
                        const isSelectedApp = appItem.status === LayerStatus.ACTIVE;

                        return (
                            <AppItem
                                key={appItem.id}
                                appItem={appItem}
                                handleClickApp={handleClickApp}
                                isSelectedApp={isSelectedApp}
                            />
                        );
                    })}
            </div>

            <MapBottomSheet isOpen={isOpen} closeBottomSheet={closeBottomSheet} className="xl:hidden">
                <div
                    ref={appsSelectRef}
                    className={`flex flex-row gap-6 justify-between flex-wrap
                                p-4 pb-24 lg:pb-32`}
                >
                    {layersList.map((appItem) => {
                        const isSelectedApp = appItem.status === LayerStatus.ACTIVE;

                        return (
                            <AppItem
                                key={appItem.id}
                                appItem={appItem}
                                handleClickApp={handleClickApp}
                                isSelectedApp={isSelectedApp}
                            />
                        );
                    })}
                </div>
            </MapBottomSheet>
        </div>
    );
};

const AppItem = ({
    appItem,
    handleClickApp,
    isSelectedApp,
}: {
    appItem: LayerInterface;
    handleClickApp: (e: string) => void;
    isSelectedApp: boolean;
}) => {
    return (
        <div
            className="flex flex-col items-center gap-3 relative cursor-pointer"
            key={appItem.id}
            onClick={() => handleClickApp(appItem.id)}
        >
            <div
                className={`w-16 lg:w-20 h-16 lg:h-20 border ${isSelectedApp ? "border-blue-accent" : "border-white"} 
                            rounded-full flex justify-center items-center overflow-hidden`}
            >
                {appItem.iconId ? (
                    <img
                        src={`${import.meta.env.VITE_APP_API_BASE_URL}gateway/file/get?fileId=${appItem.iconId}`}
                        className="w-16 h-16"
                    />
                ) : (
                    <span className="text-6xl font-bold uppercase">{appItem.title[0]}</span>
                )}
            </div>
            <span className="roboto-bold-13 text-white text-nowrap">{appItem.title}</span>
            <div className="absolute top-0 -right-2 cursor-pointer">
                {isSelectedApp ? <RemoveAppIcon /> : <AddAppIcon />}
            </div>
        </div>
    );
};

export { AppsSelect, AppItem };
