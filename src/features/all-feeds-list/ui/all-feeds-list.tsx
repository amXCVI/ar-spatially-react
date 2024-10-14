import { FeedItem } from "@/entities/feed-item";

import { useAllFeedsHook } from "../model";

const AllFeedsList = () => {
    const { feedsList, handleScroll, containerRef } = useAllFeedsHook();

    return (
        <div className="flex flex-col overflow-scroll" ref={containerRef} onScroll={handleScroll}>
            {feedsList.map((feedItem) => {
                return <FeedItem key={feedItem.id} feed={feedItem} />;
            })}
        </div>
    );
};

export { AllFeedsList };
