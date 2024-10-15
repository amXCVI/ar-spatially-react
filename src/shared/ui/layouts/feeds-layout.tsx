import { ReactNode } from "react";

const FeedsLayout = ({ children }: { children: ReactNode }) => {
    return <div className="flex h-dvh bg-black">{children}</div>;
};

export { FeedsLayout };
