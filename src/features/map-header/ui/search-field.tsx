import { useRef } from "react";

import { useOutsideClick } from "@/shared/lib/use-outside-click";
import { ObjectInterface } from "@/shared/types";

import GooglePlaceIcon from "../assets/google-place-icon.svg?react";
import ObjectIcon from "../assets/object-icon.svg?react";
import SearchIcon from "../assets/search-icon.svg?react";

import { useSearchFieldHook } from "../domain";

interface MapHeaderProps {
    onChangeMapCenter: (e: { lat: number; lng: number; zoom: number }) => void;
    className?: string;
}

const SearchField = ({ className, onChangeMapCenter }: MapHeaderProps) => {
    const inputRef = useRef(null);

    const {
        isActiveField,
        toggleIsActiveSearchField,
        predictionResults,
        searchInputValue,
        onChangeInputValue,
        handleSuggestionClick,
        selectedPlaceDescription,
        findedObjects,
        resetSearch,
    } = useSearchFieldHook({ onChangeMapCenter: onChangeMapCenter });

    const searchFieldRef = useOutsideClick(() => {
        resetSearch();
    });

    return (
        <div
            className={`flex flex-col justify-center ${isActiveField || selectedPlaceDescription ? "w-96" : ""} duration-500
                        border border-white/25 rounded-[30px] bg-granite-gray/35 backdrop-blur-sm
                        relative ${className}`}
            ref={searchFieldRef}
        >
            <div
                className={`flex gap-3 ${isActiveField ? "justify-start" : "justify-center mt-1"} items-center px-4 h-12
                            cursor-pointer
                           `}
                onClick={() => toggleIsActiveSearchField(true)}
            >
                <SearchIcon className="z-10 min-w-6" />
                {isActiveField ? (
                    <input
                        ref={inputRef}
                        onChange={onChangeInputValue}
                        autoFocus
                        className="w-full border-none outline-none z-10 bg-transparent onest-medium-22 text-quick-silver"
                        value={searchInputValue}
                        type="search"
                    />
                ) : (
                    <span
                        className={`onest-regular-22 text-quick-silver whitespace-nowrap overflow-hidden text-ellipsis
                                    z-10 hidden xl:block`}
                    >
                        {selectedPlaceDescription ? selectedPlaceDescription : "Search"}
                    </span>
                )}
            </div>

            <div
                className={`flex flex-col gap-1
                             bottom-8 lg:bottom-auto lg:top-8 -left-0.5 -right-0.5 
                            rounded-t-[30px] lg:rounded-t-none lg:rounded-b-[30px]
                            
                            max-h-[80vh] overflow-scroll
                            ${isActiveField && (predictionResults.length || findedObjects.length) ? "p-4" : "p-0"}`}
            >
                {isActiveField &&
                    findedObjects.map((item) => (
                        <ObjectItem
                            key={item.id}
                            item={item}
                            searchStr={searchInputValue}
                            onSelect={handleSuggestionClick}
                        />
                    ))}
                {isActiveField &&
                    predictionResults.map((item) => (
                        <PlaceItem
                            key={item.place_id}
                            item={item}
                            searchStr={searchInputValue}
                            onSelect={handleSuggestionClick}
                        />
                    ))}
            </div>
        </div>
    );
};

const getHighlightedText = (text: string, highlight: string) => {
    // Split on highlight term and include term into parts, ignore case
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return (
        <span>
            {parts.map((part, i) => (
                <span key={i} style={part.toLowerCase() === highlight.toLowerCase() ? { color: "white" } : {}}>
                    {part}
                </span>
            ))}
        </span>
    );
};

export const PlaceItem = ({
    item,
    onSelect,
    searchStr,
    className,
}: {
    item: google.maps.places.AutocompletePrediction;
    onSelect: (e: string) => void;
    searchStr: string;
    className?: string;
}) => {
    return (
        <div
            onClick={() => onSelect(item.place_id)}
            className={`flex gap-2.5 items-center lg:px-4 py-3 rounded-[15px] hover:bg-[#6565657f] lg:border lg:border-white/25 hover:border-[#9c9c9c26] cursor-pointer ${className}`}
        >
            <GooglePlaceIcon className="min-h-3.5 min-w-5" />
            <span className="overflow-hidden text-ellipsis max-w-full regular-16 text-white/35">
                {getHighlightedText(item.description, searchStr)}
            </span>
        </div>
    );
};

export const ObjectItem = ({
    item,
    onSelect,
    searchStr,
    className,
}: {
    item: ObjectInterface;
    onSelect: (e: string) => void;
    searchStr: string;
    className?: string;
}) => {
    return (
        <div
            onClick={() => onSelect(item.id)}
            className={`flex gap-2.5 items-center lg:px-4 py-3 rounded-[15px] hover:bg-[#6565657f] lg:border lg:border-white/25 hover:border-[#9c9c9c26] cursor-pointer ${className}`}
        >
            <ObjectIcon className="min-h-3.5 min-w-5" />
            <span className="overflow-hidden text-ellipsis max-w-full regular-16 text-white/35">
                {getHighlightedText(item.title, searchStr)}
            </span>
        </div>
    );
};

export default SearchField;
