import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { SearchParamsConstants } from "@/shared/config/constants";
import { useUserContext } from "@/shared/stores";

const useUserPagesLayoutHook = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const userId = searchParams.get(SearchParamsConstants.userIdSearchParamsKey);

    const { user } = useUserContext();

    useEffect(() => {
        if (!userId) {
            if (user) {
                setSearchParams({
                    ...Object.fromEntries(searchParams.entries()),
                    [SearchParamsConstants.userIdSearchParamsKey]: user.userId,
                });
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user, userId]);

    return {};
};

export { useUserPagesLayoutHook };
