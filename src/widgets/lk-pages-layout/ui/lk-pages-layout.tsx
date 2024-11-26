import { ReactNode } from "react";

import Header from "@/features/header";

import { DarkLayout } from "@/shared/ui/layouts";

const LkPagesLayout = ({ children }: { children: ReactNode }) => {
    return (
        <DarkLayout>
            <Header white />

            {children}
        </DarkLayout>
    );
};

export { LkPagesLayout };
