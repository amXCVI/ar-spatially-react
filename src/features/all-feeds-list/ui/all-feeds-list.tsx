import { DefaultFeedItem } from "@/entities/feed-item";

import { useAllFeedsHook } from "../model";

const AllFeedsList = () => {
    const { feedsList, handleScroll, containerRef } = useAllFeedsHook();

    return (
        <div className="flex flex-col gap-5 overflow-scroll" ref={containerRef} onScroll={handleScroll}>
            {feedsList.map((feedItem, index) => {
                return <DefaultFeedItem key={feedItem.id + index} feed={feedItem} />;
            })}
        </div>
    );
};

export { AllFeedsList };
