import { Fragment } from "react";

import { useAppDispatch, useAppSelector } from "@/shared/lib/redux-service";
import { layersActions } from "@/shared/stores";
import { useAuthContext } from "@/shared/stores/auth-provider";

const ObjectsToggler = () => {
    const dispatch = useAppDispatch();

    const { checkAuth } = useAuthContext();
    const { myObjectsOnly } = useAppSelector((state) => state.layersSlice);

    const myObjects = () => {
        checkAuth().then(() => {
            dispatch(layersActions.myObjectsOnly());
        });
    };

    const allObjects = () => {
        dispatch(layersActions.allObjects());
    };

    return (
        <Fragment>
            <span
                className={`xl:h-14 px-2 3sm:px-5 content-center border rounded-[30px] lg:rounded-[30px] cursor-pointer roboto-regular-13 3sm:text-lg lg:text-xl
                            border-white/15 ${myObjectsOnly ? "text-blue-accent bg-ocean-boat-blue/35 xl:bg-granite-gray/35" : "text-quick-silver bg-granite-gray/35"}
                            duration-300 text-nowrap whitespace-nowrap flex justify-center items-center
                            backdrop-blur-lg`}
                onClick={myObjects}
            >
                {myObjectsOnly ? "My Objects" : "My"}
            </span>
            <span
                className={`xl:h-14 px-2 3sm:px-5 content-center border rounded-[30px] lg:rounded-[30px] cursor-pointer roboto-regular-13 3sm:text-lg lg:text-xl
                            border-white/15 ${myObjectsOnly ? "text-quick-silver bg-granite-gray/35" : "text-blue-accent bg-ocean-boat-blue/35 xl:bg-granite-gray/35"}
                            duration-300 text-nowrap whitespace-nowrap flex justify-center items-center
                            backdrop-blur-sm`}
                onClick={allObjects}
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
