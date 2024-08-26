import { useRef } from "react";

import GooglePlaceIcon from "../assets/google-place-icon.svg?react";
import SearchIcon from "../assets/search-icon.svg?react";

import { useSearchFieldHook } from "../domain";

const SearchField = () => {
    const inputRef = useRef(null);

    const {
        isActiveField,
        toggleIsActiveSearchField,
        placePredictions,
        searchInputValue,
        onChangeInputValue,
        onSelectPlacePredicion,
        selectedPlaceDescription,
        searchFieldRef,
    } = useSearchFieldHook();

    return (
        <div
            className={`flex flex-col ${isActiveField || selectedPlaceDescription ? "w-96" : "w-40"} duration-500
                        border-2 border-raisin-black rounded-[30px] bg-dark-gray
                        relative `}
        >
            <div
                className={`flex gap-3 ${isActiveField ? "justify-start" : "justify-center"} items-center p-4
                            cursor-pointer
                           `}
                ref={searchFieldRef}
                onClick={() => toggleIsActiveSearchField(true)}
            >
                <SearchIcon className="z-10 min-w-6" />
                {isActiveField ? (
                    <input
                        ref={inputRef}
                        onChange={onChangeInputValue}
                        autoFocus
                        className="w-full border-none outline-none z-10 onest-medium-22 text-white"
                        value={searchInputValue}
                    />
                ) : (
                    <span
                        className={`onest-regular-22 text-quick-silver whitespace-nowrap overflow-hidden text-ellipsis
                                    z-10`}
                    >
                        {selectedPlaceDescription ? selectedPlaceDescription : "Search"}
                    </span>
                )}
            </div>

            <div
                className={`flex flex-col gap-1 bg-dark-gray
                            absolute top-8 left-0 right-0
                            rounded-b-[30px]
                            ${isActiveField && placePredictions.length ? "p-4" : "p-0"}`}
            >
                {isActiveField &&
                    placePredictions.map((item) => <PlaceItem item={item} onSelect={onSelectPlacePredicion} />)}
            </div>
        </div>
    );
};

const PlaceItem = ({
    item,
    onSelect,
}: {
    item: google.maps.places.AutocompletePrediction;
    onSelect: (e: google.maps.places.AutocompletePrediction) => void;
}) => {
    return (
        <div
            onClick={() => onSelect(item)}
            className="flex gap-2.5 items-center px-4 py-3 rounded-[15px] hover:bg-[#6565657f] border border-dark-gray hover:border-[#9c9c9c26] cursor-pointer"
        >
            <GooglePlaceIcon className="min-h-3.5 min-w-3.5" />
            {item.description}
        </div>
    );
};

export default SearchField;
