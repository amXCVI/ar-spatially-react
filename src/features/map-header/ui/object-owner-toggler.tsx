import { useObjectsTogglerHook } from "../domain";

const MyObjectsButton = ({ onClick, isActive = false }: { onClick: () => void; isActive: boolean }) => {
    return (
        <div
            className={`flex flex-col duration-500
                border-2 border-raisin-black rounded-[30px] ${isActive ? "bg-white" : "bg-dark-gray"}
               `}
            onClick={onClick}
        >
            <div
                className={`flex gap-3 items-center p-4
                    cursor-pointer
                   `}
            >
                <span
                    className={`onest-regular-22 text-quick-silver whitespace-nowrap overflow-hidden text-ellipsis
                            z-10`}
                >
                    {"My Object"}
                </span>
            </div>
        </div>
    );
};

const AllObjectsButton = ({ onClick, isActive = false }: { onClick: () => void; isActive: boolean }) => {
    return (
        <div
            className={`flex flex-col duration-500
                border-2 border-raisin-black rounded-[30px] ${isActive ? "bg-white" : "bg-dark-gray"}
               `}
            onClick={onClick}
        >
            <div
                className={`flex gap-3 items-center p-4
                    cursor-pointer
                   `}
            >
                <span
                    className={`onest-regular-22 text-quick-silver whitespace-nowrap overflow-hidden text-ellipsis
                            z-10`}
                >
                    {"All Object"}
                </span>
            </div>
        </div>
    );
};

const ObjectsToggler = () => {
    const { myObjectsOnly, handleMyObjects, handleAllObjects } = useObjectsTogglerHook();

    return (
        <>
            <MyObjectsButton isActive={myObjectsOnly} onClick={handleMyObjects} />
            <AllObjectsButton isActive={!myObjectsOnly} onClick={handleAllObjects} />
        </>
    );
};

export { ObjectsToggler };
