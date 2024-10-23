import { useState } from "react";

import { ObjectsPageModes } from "@/shared/types";

const useObjectsFilterHook = () => {
    const [selectedPageMode, setSelectedPageMode] = useState<ObjectsPageModes>(ObjectsPageModes.ALL_AR_OBJECTS);

    const handleSelectPageMode = (e: ObjectsPageModes) => {
        setSelectedPageMode(e);
    };

    return { selectedPageMode, handleSelectPageMode };
};

export { useObjectsFilterHook };
