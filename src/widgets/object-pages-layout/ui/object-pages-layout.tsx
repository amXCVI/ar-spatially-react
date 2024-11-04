import { ReactNode } from "react";

import { ObjectsFilter } from "@/features/objects-filter";

import { ObjectsLayout } from "@/shared/ui/layouts";

const ObjectPagesLayout = ({ children }: { children: ReactNode }) => {
    return (
        <ObjectsLayout>
            {children}
            <ObjectsFilter />
        </ObjectsLayout>
    );
};

export { ObjectPagesLayout };
