import { ReactNode } from "react";
import { Outlet } from "react-router-dom";

import { ObjectsFilter } from "@/features/objects-filter";

import { ObjectsLayout } from "@/shared/ui/layouts";

const ObjectPagesLayout = ({ children }: { children?: ReactNode }) => {
    return (
        <ObjectsLayout>
            {children}
            <Outlet />
            <ObjectsFilter />
        </ObjectsLayout>
    );
};

export { ObjectPagesLayout };
