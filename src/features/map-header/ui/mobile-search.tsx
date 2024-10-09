import { Fragment, useRef } from "react";

import { useOutsideClick } from "@/shared/lib/use-outside-click";

import SearchIcon from "../assets/search-icon.svg?react";

import { useMobileSearchFieldHook, useSearchFieldHook } from "../domain";
import { ObjectItem, PlaceItem } from "./search-field";

interface MapHeaderProps {
    onChangeMapCenter: (e: { lat: number; lng: number; zoom: number }) => void;
    className?: string;
}

const MobileSearch = ({ onChangeMapCenter, className }: MapHeaderProps) => {
    const inputRef = useRef(null);

    const {
        predictionResults,
        searchInputValue,
        onChangeInputValue,
        handleSuggestionClick,
        findedObjects,
        resetSearch,
    } = useSearchFieldHook({ onChangeMapCenter: onChangeMapCenter });

    const { fieldMode, handleSearch, handleSetInactive, FieldModes } = useMobileSearchFieldHook({
        resetSearch: resetSearch,
    });

    const searchFieldRef = useOutsideClick(() => {
        resetSearch();
        handleSetInactive();
    });

    return (
        <Fragment>
            <div
                className={`flex justify-center items-center duration-500 
                            border border-white/25 rounded-[30px] bg-granite-gray/35 backdrop-blur-sm
                            relative w-10 h-10 lg:w-auto lg:h-14 aspect-square ${className}`}
                onClick={handleSearch}
            >
                <SearchIcon className="lg:w-6 lg:h-6 m-auto" />
            </div>

            {fieldMode === FieldModes.SEARCH && (
                <div
                    ref={searchFieldRef}
                    className="fixed bottom-7 lg:bottom-10 left-0 right-0 flex flex-col-reverse gap-2 z-[1000]"
                >
                    <form
                        className="container mx-auto bg-granite-gray/35 rounded-[30px] p-2 lg:p-4 border border-white/25 backdrop-blur-2xl"
                        onSubmit={() => {
                            resetSearch();
                            handleSetInactive();
                        }}
                    >
                        <input
                            ref={inputRef}
                            onChange={onChangeInputValue}
                            className="w-full border-none outline-none manrope-medium-18 text-white pl-2 bg-transparent"
                            value={searchInputValue}
                            placeholder="Search"
                            autoFocus
                            type="search"
                            onSubmit={() => alert("!!! DONE !!!")}
                            onBlur={() => {
                                setTimeout(() => {
                                    resetSearch();
                                    handleSetInactive();
                                }, 500);
                            }}
                        />
                    </form>

                    <div
                        className={`container mx-auto flex flex-col gap-1 rounded-[30px] bg-dark-charcoal/75 backdrop-blur-sm
                                    ${findedObjects.length || predictionResults.length ? "p-1 border border-white/25" : ""}
                                    duration-200`}
                    >
                        {findedObjects.map((item) => (
                            <ObjectItem
                                key={item.id}
                                item={item}
                                searchStr={searchInputValue}
                                onSelect={(e) => {
                                    handleSuggestionClick(e);
                                    resetSearch();
                                    handleSetInactive();
                                }}
                                className="px-4 flex-nowrap text-nowrap rounded-[16px]"
                            />
                        ))}
                        {predictionResults.map((item) => (
                            <PlaceItem
                                key={item.place_id}
                                item={item}
                                searchStr={searchInputValue}
                                onSelect={(e) => {
                                    handleSuggestionClick(e);
                                    resetSearch();
                                    handleSetInactive();
                                }}
                                className="px-4 flex-nowrap text-nowrap rounded-[20px]"
                            />
                        ))}
                    </div>
                </div>
            )}
        </Fragment>
    );
};

export { MobileSearch };
