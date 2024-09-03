import { useState } from "react";

const useObjectsTogglerHook = () => {
    const [myObjectsOnly, setMyObjectsOnly] = useState<boolean>(false);

    const handleMyObjects = () => {
        setMyObjectsOnly(true);
    };

    const handleAllObjects = () => {
        setMyObjectsOnly(false);
    };

    const toggleObjectsOwner = () => {
        setMyObjectsOnly((e) => !e);
    };

    return { myObjectsOnly, handleMyObjects, handleAllObjects, toggleObjectsOwner };
};

export { useObjectsTogglerHook };
