import { FeedsPageModes } from "@/shared/types";

import Logo from "../assets/logo.svg?react";

import { useFeedsFilterHook } from "../model";

const FeedsFilter = () => {
    const { feedsPageMode, feedsFilterString, handleSelectPageMode, handleChangeFilterString } = useFeedsFilterHook();

    return (
        <div className="flex flex-col lg:w-80 p-4">
            <Logo style={{ fill: "white" }} />

            <div className="flex flex-col gap-4 mt-28">
                {Object.values(FeedsPageModes).map((item) => {
                    const isSelected = feedsPageMode === item;

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

            <div className="flex w-full mt-auto">
                <input className="w-full" value={feedsFilterString} onChange={handleChangeFilterString} />
            </div>
        </div>
    );
};

export { FeedsFilter };
