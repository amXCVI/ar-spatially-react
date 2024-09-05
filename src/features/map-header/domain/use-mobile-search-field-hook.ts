import { useState } from "react";

enum FieldModes {
    SEARCH = "search",
    APPS = "apps",
    INACTIVE = "inactive",
}

const useMobileSearchFieldHook = ({ resetSearch }: { resetSearch: () => void }) => {
    const [fieldMode, setFieldMode] = useState<FieldModes>(FieldModes.INACTIVE);

    const handleSearch = () => {
        setFieldMode(FieldModes.SEARCH);
    };

    const handleApps = () => {
        setFieldMode(FieldModes.APPS);
    };

    const handleSetInactive = () => {
        setFieldMode(FieldModes.INACTIVE);
        resetSearch();
    };

    return { fieldMode, handleSearch, handleApps, handleSetInactive, FieldModes };
};

export { useMobileSearchFieldHook };
