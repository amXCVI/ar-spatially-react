import { AddArObject } from "@/features/add-ar-object";

import { ObjectsPageModes } from "@/shared/types";
import { BigOutlineButton } from "@/shared/ui/buttons";

import { useObjectsFilterHook } from "../model";

const ObjectsFilter = () => {
    const { selectedPageMode, handleSelectPageMode } = useObjectsFilterHook();

    return (
        <div
            className="flex lg:flex-col w-full py-4 justify-between lg:justify-start gap-4
                     border-silver-sand
                       border-b-2 lg:border-b-0
                       lg:pl-6 lg:border-l-2 lg:min-h-[calc(100vh-160px)]"
        >
            {Object.values(ObjectsPageModes).map((item) => {
                const isSelected = selectedPageMode === item;

                return (
                    <BigOutlineButton
                        key={item}
                        className={`flex justify-center lg:justify-start p-4 ${isSelected ? "text-blue-accent" : "text-white"}`}
                        onClick={() => handleSelectPageMode(item)}
                    >
                        {item}
                    </BigOutlineButton>
                );
            })}

            <AddArObject />
        </div>
    );
};

export { ObjectsFilter };
