import { ReactNode } from "react";

import { FeedUserHead } from "@/features/feed-user-header";

import { UserLayout } from "@/shared/ui/layouts";

import { useUserPagesLayoutHook } from "../model";

const UserPagesLayout = ({ children }: { children: ReactNode }) => {
    useUserPagesLayoutHook();

    return (
        <UserLayout>
            <FeedUserHead />
            {children}
        </UserLayout>
    );
};

export { UserPagesLayout };
