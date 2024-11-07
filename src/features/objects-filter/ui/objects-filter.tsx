import { AddArObject } from "@/features/add-ar-object";

import { ObjectsPageModes } from "@/shared/types";

import { useObjectsFilterHook } from "../model";

const ObjectsFilter = () => {
    const { selectedPageMode, handleSelectPageMode } = useObjectsFilterHook();

    return (
        <div className="flex flex-col lg:w-80 p-4 justify-between">
            <div className="flex flex-col gap-4 mt-28">
                {Object.values(ObjectsPageModes).map((item) => {
                    const isSelected = selectedPageMode === item;

                    return (
                        <div
                            key={item}
                            className={`flex justify-center items-center cursor-pointer p-4 bg-granite-gray rounded-[20px]
                            ${isSelected ? "text-blue-accent" : "text-white"}`}
                            onClick={() => handleSelectPageMode(item)}
                        >
                            {item}
                        </div>
                    );
                })}
            </div>

            <AddArObject />
            {/* <div className="flex w-full mt-auto">
                <input className="w-full" value={feedsFilterString} onChange={handleChangeFilterString} />
            </div> */}
        </div>
    );
};

export { ObjectsFilter };
