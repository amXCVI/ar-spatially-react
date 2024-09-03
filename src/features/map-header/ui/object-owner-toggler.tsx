import { useContext } from "react";

import { AuthContext } from "@/features/login-modal";

import { MapContext } from "@/shared/stores";

const ObjectsToggler = () => {
    const { myObjectsOnly, toggleObjectsOwner } = useContext(MapContext);

    const { authenticated } = useContext(AuthContext);

    if (!authenticated) {
        return <></>;
    }

    return (
        <label className="relative inline-flex cursor-pointer items-center">
            <input type="checkbox" value="" checked={myObjectsOnly} onChange={() => {}} className="peer sr-only" />
            <div
                onClick={toggleObjectsOwner}
                className="peer flex items-center gap-6 rounded-full bg-raisin-black px-3 py-5 after:absolute after:left-1 after: after:h-12 after:w-[5.3rem] after:rounded-full after:bg-dark-gray after:transition-all after:content-[''] peer-checked:bg-raisin-black peer-checked:after:translate-x-full peer-focus:outline-none dark:border-raisin-black dark:bg-raisin-black text-sm text-white"
            >
                <span className="z-10 select-none">All Object</span>
                <span className="z-10 select-none">My Object</span>
            </div>
        </label>
    );
};

export { ObjectsToggler };
