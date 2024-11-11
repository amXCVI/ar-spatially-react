import { ReactNode } from "react";
import { Outlet } from "react-router-dom";

import { CreateFeedModal } from "@/features/create-feed-modal";
import { FeedsFilter } from "@/features/feeds-filter";

import { FeedsLayout } from "@/shared/ui/layouts";

import { useFeedPagesLayoutHook } from "../model";

const FeedPagesLayout = ({ children }: { children?: ReactNode }) => {
    useFeedPagesLayoutHook();

    return (
        <FeedsLayout>
            <FeedsFilter />
            {children}

            <Outlet />

            <CreateFeedModal />
        </FeedsLayout>
    );
};

export { FeedPagesLayout };
