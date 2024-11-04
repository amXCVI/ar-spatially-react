import { AllFeedsList } from "@/features/all-feeds-list";
import { FeedUserHead } from "@/features/feed-user-header";

const FeedsByUserPage = () => {
    return (
        <div className="flex flex-col">
            <FeedUserHead />
            <AllFeedsList />
        </div>
    );
};

export { FeedsByUserPage };
