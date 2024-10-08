import { MapBottomSheet, useMapBottomSheetHook } from "@/entities/map-bottom-sheet";

import { useOutsideClick } from "@/shared/lib/use-outside-click";
import { LayerInterface, LayerStatus } from "@/shared/types";

import AddAppIcon from "../assets/add-app.svg?react";
import AppsIcon from "../assets/apps-icon.svg?react";
import RemoveAppIcon from "../assets/remove-app.svg?react";

import { useAppsSelectHook } from "../domain";

const AppsSelect = ({ className }: { className?: string }) => {
    const { isActive, toggleIsActiveSearchField, handleClickApp, layersList } = useAppsSelectHook();

    const { openBottomSheet, closeBottomSheet, isOpen } = useMapBottomSheetHook();

    return (
        <div
            className={`flex flex-col rounded-[30px]
                       
                        relative h-10 lg:h-14 ${className}`}
        >
            <div
                className={`flex gap-3 ${isActive ? "justify-start" : "justify-center"} items-center p-2 lg:px-4 m-auto
                            cursor-pointer
                            rounded-[30px] border border-white/25 bg-granite-gray/35 backdrop-blur-sm
                            h-10 lg:h-14
                            aspect-square lg:aspect-auto
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
            {/* <div
                ref={appsSelectRef}
                className={`hidden xl:flex flex-row gap-6 justify-between flex-wrap
                            absolute xl:-top-1 xl:-left-1 w-56 ${isActive ? "max-w-80" : "max-w-0"}
                            border-white/25 rounded-[30px] bg-granite-gray/35 backdrop-blur-sm
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
            </div> */}

            <MapBottomSheet isOpen={isOpen} closeBottomSheet={closeBottomSheet} className="xl:hidden">
                <div
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

            <AppsPopup
                layersList={layersList}
                isOpenAppsPopup={isActive}
                className="hidden xl:flex"
                handleClickApp={handleClickApp}
                toggleIsActiveSearchField={toggleIsActiveSearchField}
            />
        </div>
    );
};

export const AppsPopup = ({
    className,
    layersList,
    isOpenAppsPopup,
    handleClickApp,
    toggleIsActiveSearchField,
}: {
    className?: string;
    layersList: LayerInterface[];
    isOpenAppsPopup: boolean;
    handleClickApp: (e: string) => void;
    toggleIsActiveSearchField: () => void;
}) => {
    const appsSelectRef = useOutsideClick(() => {
        if (isOpenAppsPopup) {
            toggleIsActiveSearchField();
        }
    });

    return (
        <div
            className={`fixed top-0 ${isOpenAppsPopup ? "right-0 bottom-0 left-0 z-10" : "!h-0 overflow-hidden"} flex justify-center items-center ${className}`}
        >
            <div
                className={`container duration-500 flex flex-col items-center justify-between overflow-hidden z-50
                backdrop-blur-xl rounded-[34px] border border-white/25 h-min
                mx-10 max-w-prose
                p-9
                `}
                style={{
                    background:
                        "linear-gradient(105.87deg, rgba(133, 133, 133, 0.4) 3.04%, rgba(82, 82, 82, 0.24) 99.24%)",
                }}
                ref={appsSelectRef}
            >
                <div className="flex justify-center w-full cursor-pointer">
                    <b className="text-white roboto-regular-24">Apps</b>
                </div>
                <div className={`flex gap-1 flex-wrap justify-center my-5`}>
                    {layersList.map((item) => {
                        const isSelectedApp = item.status === LayerStatus.ACTIVE;

                        return (
                            <AppItem
                                key={item.id}
                                appItem={item}
                                handleClickApp={handleClickApp}
                                isSelectedApp={isSelectedApp}
                            />
                        );
                    })}
                </div>
            </div>
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
            className={`flex flex-col items-center gap-1.5 relative cursor-pointer
                       px-3 py-1.5 rounded-[14px]
                       ${isSelectedApp ? "bg-blue-accent/35" : "bg-granite-gray/35"}`}
            key={appItem.id}
            onClick={(e) => {
                e.preventDefault();
                handleClickApp(appItem.id);
            }}
        >
            <div
                className={`border border-black/10 bg-granite-gray/35
                            rounded-full flex justify-center items-center overflow-hidden aspect-square`}
            >
                {appItem.iconId ? (
                    <img
                        src={`${import.meta.env.VITE_APP_API_BASE_URL}gateway/file/get?fileId=${appItem.iconId}`}
                        className="w-16 lg:w-20 h-16 lg:h-20"
                    />
                ) : (
                    <span className="text-6xl font-bold uppercase">{appItem.title[0]}</span>
                )}
            </div>
            <span className={`roboto-bold-13 ${isSelectedApp ? "text-blue-accent" : "text-white"} text-nowrap`}>
                {appItem.title}
            </span>
            <div className="absolute top-1.5 right-1.5 cursor-pointer">
                {isSelectedApp ? <RemoveAppIcon /> : <AddAppIcon />}
            </div>
        </div>
    );
};

export { AppsSelect, AppItem };
