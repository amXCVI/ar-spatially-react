import { useContext } from "react";

import { MapContext } from "@/shared/stores";

const ObjectsToggler = () => {
    const { myObjectsOnly, toggleObjectsOwner } = useContext(MapContext);

    return (
        <div className="fixed xl:static bottom-10 right-0 left-0 flex justify-center">
            <label className={`relative inline-flex cursor-pointer items-center`}>
                <input type="checkbox" value="" checked={myObjectsOnly} onChange={() => {}} className="peer sr-only" />
                <div
                    onClick={toggleObjectsOwner}
                    className="peer flex items-center rounded-full bg-raisin-black py-4 px-2
                           after:absolute after:left-1 after:top-1 after:bottom-1 after:w-1/2 after:rounded-full after:bg-dark-gray after:transition-all after:content-[''] peer-checked:bg-raisin-black peer-checked:after:translate-x-[calc(100%-0.5rem)] peer-focus:outline-none dark:border-raisin-black dark:bg-raisin-black"
                >
                    <span
                        className={`onest-regular-18 md:onest-regular-22 z-10 select-none text-nowrap w-28 md:w-40 text-center transition-all ${myObjectsOnly ? "text-quick-silver" : "text-white"}`}
                    >
                        All Objects
                    </span>
                    <span
                        className={`onest-regular-18 md:onest-regular-22 z-10 select-none text-nowrap w-28 md:w-40 text-center transition-all ${myObjectsOnly ? "text-white" : "text-quick-silver"}`}
                    >
                        My Objects
                    </span>
                </div>
            </label>
        </div>
    );
};

export { ObjectsToggler };
