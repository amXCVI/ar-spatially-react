import { AllFeedsList } from "@/features/all-feeds-list";

import { FeedsLayout } from "@/shared/ui/layouts";

const FeedsPage = () => {
    return (
        <FeedsLayout>
            <AllFeedsList />
        </FeedsLayout>
    );
};

export { FeedsPage };
