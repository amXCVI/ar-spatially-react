import { ReactNode } from "react";

import { ObjectsLayout } from "@/shared/ui/layouts";

const ObjectPagesLayout = ({ children }: { children: ReactNode }) => {
    return <ObjectsLayout>{children}</ObjectsLayout>;
};

export { ObjectPagesLayout };
