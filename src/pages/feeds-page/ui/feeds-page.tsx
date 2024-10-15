import { AllFeedsList } from "@/features/all-feeds-list";
import { FeedsFilter } from "@/features/feeds-filter";

import { FeedsLayout } from "@/shared/ui/layouts";

const FeedsPage = () => {
    return (
        <FeedsLayout>
            <FeedsFilter />
            <AllFeedsList />
        </FeedsLayout>
    );
};

export { FeedsPage };
