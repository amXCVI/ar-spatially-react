import { useSearchParams } from "react-router-dom";

import { SearchParamsConstants, UserPageModes } from "@/shared/config/constants";

const useUserPageHook = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const pageMode = searchParams.get(SearchParamsConstants.objectsOrFeedsSearchParamsKey);

    const handleChangePageMode = (e: UserPageModes) => {
        setSearchParams({
            ...Object.fromEntries(searchParams.entries()),
            [SearchParamsConstants.objectsOrFeedsSearchParamsKey]: e,
        });
    };

    return { pageMode, handleChangePageMode };
};

export { useUserPageHook };
