import { useNavigate } from "react-router-dom";

import { routes } from "@/shared/config";
import { SearchParamsConstants } from "@/shared/config/constants";
import { PostInterface } from "@/shared/types";

const useFeedItemHook = ({ feed }: { feed: PostInterface }) => {
    const navigate = useNavigate();

    const handleOpenFeedPage = () => {
        // window.history.pushState(null, "", routes.feed);
        navigate(`/${routes.feeds}/${routes.feed}?${SearchParamsConstants.feedIdSearchParamsKey}=${feed.id}`, {
            state: { feed: feed },
        });
    };

    return { handleOpenFeedPage };
};

export { useFeedItemHook };
