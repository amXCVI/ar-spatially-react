import { FeedDetails } from "@/features/feed-details";

import { useFeedPageHook } from "../model";

const FeedPage = () => {
    const { feed } = useFeedPageHook();

    if (!feed) {
        return <div />;
    }

    return <FeedDetails feed={feed} />;
};

export { FeedPage };
