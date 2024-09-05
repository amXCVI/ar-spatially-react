import { useRef } from "react";

import { useOutsideClick } from "@/shared/lib/use-outside-click";

import AppsIcon from "../assets/apps-icon.svg?react";
import CloseIcon from "../assets/close.svg?react";
import SearchIcon from "../assets/search-icon.svg?react";

import { useAppsSelectHook, useMobileSearchFieldHook, useSearchFieldHook } from "../domain";
import { AppItem } from "./apps-select";
import { ObjectItem, PlaceItem } from "./search-field";

interface MapHeaderProps {
    onChangeMapCenter: (e: { lat: number; lng: number; zoom: number }) => void;
    className?: string;
}

const MobileSearchField = ({ onChangeMapCenter }: MapHeaderProps) => {
    const inputRef = useRef(null);

    const {
        predictionResults,
        searchInputValue,
        onChangeInputValue,
        handleSuggestionClick,
        findedObjects,
        resetSearch,
    } = useSearchFieldHook({ onChangeMapCenter: onChangeMapCenter });

    const { fieldMode, handleSearch, handleApps, handleSetInactive, FieldModes } = useMobileSearchFieldHook({
        resetSearch: resetSearch,
    });

    const { handleClickApp, apps } = useAppsSelectHook();

    const searchFieldRef = useOutsideClick(() => {
        resetSearch();
        handleSetInactive();
    });

    return (
        <div className="container mx-auto">
            <div
                className={`flex flex-col-reverse duration-500
                            bg-davy-grey/50 backdrop-blur-[2.5px]
                            border border-white/40 rounded-[30px] 
                            p-4 gap-1
                            `}
                ref={searchFieldRef}
            >
                <div className="flex gap-3 justify-between items-center ">
                    {fieldMode === FieldModes.APPS ? (
                        <div className={`flex gap-3 items-center`}>
                            <AppsIcon />
                            <span className="onest-medium-22 text-white">Apps</span>
                        </div>
                    ) : (
                        <div className={`flex gap-3 items-center cursor-pointer relative`} onClick={handleSearch}>
                            <SearchIcon className="absolute w-6 h-6 -translate-y-1/2 top-1/2 z-[-1]" />
                            <input
                                ref={inputRef}
                                onChange={onChangeInputValue}
                                className="w-full border-none outline-none onest-medium-22 text-white pl-10 bg-transparent"
                                value={searchInputValue}
                                placeholder="Search"
                            />
                        </div>
                    )}
                    {/* Если какой-то режим выбран - рисую CloseIcon */}
                    {fieldMode !== FieldModes.INACTIVE ? (
                        <div className={`cursor-pointer`} onClick={handleSetInactive}>
                            <CloseIcon />
                        </div>
                    ) : (
                        <div className={`cursor-pointer`} onClick={handleApps}>
                            <AppsIcon />
                        </div>
                    )}
                </div>

                {findedObjects.map((item) => (
                    <ObjectItem key={item.id} item={item} onSelect={handleSuggestionClick} />
                ))}
                {predictionResults.map((item) => (
                    <PlaceItem key={item.place_id} item={item} onSelect={handleSuggestionClick} />
                ))}

                {fieldMode === FieldModes.APPS &&
                    apps.map((appItem) => {
                        const isSelectedApp = appItem.isSelected;

                        return (
                            <AppItem
                                key={appItem.layer.id}
                                appItem={appItem}
                                handleClickApp={handleClickApp}
                                isSelectedApp={isSelectedApp}
                            />
                        );
                    })}
            </div>
        </div>
    );
};

export { MobileSearchField };
