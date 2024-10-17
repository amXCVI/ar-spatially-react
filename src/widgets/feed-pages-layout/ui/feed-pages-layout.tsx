import { ReactNode } from "react";

import { FeedsFilter } from "@/features/feeds-filter";

import { FeedsLayout } from "@/shared/ui/layouts";

const FeedPagesLayout = ({ children }: { children: ReactNode }) => {
    return (
        <FeedsLayout>
            <FeedsFilter />
            {children}
        </FeedsLayout>
    );
};

export { FeedPagesLayout };
