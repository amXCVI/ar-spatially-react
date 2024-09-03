import { useRef } from "react";

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
        searchFieldRef,
        findedObjects,
    } = useSearchFieldHook({ onChangeMapCenter: onChangeMapCenter });

    return (
        <div
            className={`flex flex-col ${isActiveField || selectedPlaceDescription ? "w-96" : ""} duration-500
                        border-2 border-raisin-black rounded-[30px] bg-dark-gray
                        relative ${className}`}
            ref={searchFieldRef}
        >
            <div
                className={`flex gap-3 ${isActiveField ? "justify-start" : "justify-center"} items-center p-4
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
                        className="w-full border-none outline-none z-10 bg-dark-gray onest-medium-22 text-white"
                        value={searchInputValue}
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
                className={`flex flex-col gap-1 bg-dark-gray
                            absolute bottom-8 lg:bottom-auto lg:top-8 -left-0.5 -right-0.5 
                            rounded-t-[30px] lg:rounded-t-none lg:rounded-b-[30px]
                            border-r-2 border-l-2 border-raisin-black
                            max-h-[80vh] overflow-scroll
                            ${isActiveField && (predictionResults.length || findedObjects.length) ? "p-4" : "p-0"}`}
            >
                {isActiveField &&
                    findedObjects.map((item) => (
                        <ObjectItem key={item.id} item={item} onSelect={handleSuggestionClick} />
                    ))}
                {isActiveField &&
                    predictionResults.map((item) => (
                        <PlaceItem key={item.place_id} item={item} onSelect={handleSuggestionClick} />
                    ))}
            </div>
        </div>
    );
};

const PlaceItem = ({
    item,
    onSelect,
}: {
    item: google.maps.places.AutocompletePrediction;
    onSelect: (e: string) => void;
}) => {
    return (
        <div
            onClick={() => onSelect(item.place_id)}
            className="flex gap-2.5 items-center px-4 py-3 rounded-[15px] hover:bg-[#6565657f] border border-dark-gray hover:border-[#9c9c9c26] cursor-pointer"
        >
            <GooglePlaceIcon className="min-h-3.5 min-w-5" />
            <span className="overflow-hidden text-ellipsis max-w-full">{item.description}</span>
        </div>
    );
};

const ObjectItem = ({ item, onSelect }: { item: ObjectInterface; onSelect: (e: string) => void }) => {
    return (
        <div
            onClick={() => onSelect(item.id)}
            className="flex gap-2.5 items-center px-4 py-3 rounded-[15px] hover:bg-[#6565657f] border border-dark-gray hover:border-[#9c9c9c26] cursor-pointer"
        >
            <ObjectIcon className="min-h-3.5 min-w-5" />
            <span className="overflow-hidden text-ellipsis max-w-full">{item.title}</span>
        </div>
    );
};

export default SearchField;
