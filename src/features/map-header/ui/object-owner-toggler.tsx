import { Fragment, useContext } from "react";

import { MapContext } from "@/shared/stores";

const ObjectsToggler = () => {
    const { myObjectsOnly, toggleObjectsOwner } = useContext(MapContext);

    return (
        <Fragment>
            <span
                className={`xl:h-14 px-5 content-center border rounded-[22px] lg:rounded-[30px] cursor-pointer roboto-regular-13 lg:text-xl
                            ${myObjectsOnly ? "border-blue-accent text-blue-accent" : "border-white text-white"}
                            duration-300 text-nowrap flex justify-center items-center
                            bg-black/30 backdrop-blur-sm`}
                onClick={toggleObjectsOwner}
            >
                {myObjectsOnly ? "My Objects" : "My"}
            </span>
            <span
                className={`xl:h-14 px-5 content-center border rounded-[22px] lg:rounded-[30px] cursor-pointer roboto-regular-13 lg:text-xl
                            ${myObjectsOnly ? "border-white text-white" : "border-blue-accent text-blue-accent"}
                            duration-300 text-nowrap flex justify-center items-center
                            bg-black/30 backdrop-blur-sm`}
                onClick={toggleObjectsOwner}
            >
                {myObjectsOnly ? "All" : "All Objects"}
            </span>
        </Fragment>
        // <div className="flex justify-center">
        //     <label className={`relative inline-flex cursor-pointer items-center`}>
        //         <input type="checkbox" value="" checked={myObjectsOnly} onChange={() => {}} className="peer sr-only" />
        //         <div
        //             onClick={toggleObjectsOwner}
        //             className="peer flex items-center rounded-full bg-raisin-black py-4 px-2
        //                    after:absolute after:left-1 after:top-1 after:bottom-1 after:w-1/2 after:rounded-full after:bg-dark-gray after:transition-all after:content-[''] peer-checked:bg-raisin-black peer-checked:after:translate-x-[calc(100%-0.5rem)] peer-focus:outline-none dark:border-raisin-black dark:bg-raisin-black"
        //         >
        //             <span
        //                 className={`onest-regular-18 md:onest-regular-22 z-10 select-none text-nowrap w-28 md:w-40 text-center transition-all ${myObjectsOnly ? "text-quick-silver" : "text-white"}`}
        //             >
        //                 All Objects
        //             </span>
        //             <span
        //                 className={`onest-regular-18 md:onest-regular-22 z-10 select-none text-nowrap w-28 md:w-40 text-center transition-all ${myObjectsOnly ? "text-white" : "text-quick-silver"}`}
        //             >
        //                 My Objects
        //             </span>
        //         </div>
        //     </label>
        // </div>
    );
};

export { ObjectsToggler };
