import { useState } from "react";

const useObjectsTogglerHook = () => {
    const [myObjectsOnly, setMyObjectsOnly] = useState<boolean>(false);

    const handleMyObjects = () => {
        setMyObjectsOnly(true);
    };

    const handleAllObjects = () => {
        setMyObjectsOnly(false);
    };

    return { myObjectsOnly, handleMyObjects, handleAllObjects };
};

export { useObjectsTogglerHook };
