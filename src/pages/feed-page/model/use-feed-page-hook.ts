import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

import { ApiEndpoints } from "@/shared/api";
import { routes } from "@/shared/config";
import { SearchParamsConstants } from "@/shared/config/constants";
import { PostInterface } from "@/shared/types";

const useFeedPageHook = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const feedId = searchParams.get(SearchParamsConstants.feedIdSearchParamsKey);

    const [feed, setFeed] = useState<null | PostInterface>(location.state ? location.state.feed : null);

    useEffect(() => {
        // Если в параметрах не был передан feed
        // Запрашиваю его по feedId
        if (!feed && feedId) {
            ApiEndpoints.post
                .getPostById({ postId: feedId })
                .then((res) => {
                    setFeed(res);
                })
                .catch(() => {
                    navigate(`/${routes.feeds}`);
                });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { feed };
};

export { useFeedPageHook };
