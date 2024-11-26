import { Outlet } from "react-router-dom";

import Header from "@/features/header";

import { DarkLayout } from "@/shared/ui/layouts";

const ObjectPagesLayout = () => {
    return (
        <DarkLayout>
            <Header white />

            <Outlet />
        </DarkLayout>
    );
};

export { ObjectPagesLayout };
