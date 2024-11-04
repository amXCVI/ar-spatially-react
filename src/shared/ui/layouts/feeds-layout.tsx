import { ReactNode } from "react";

const FeedsLayout = ({ children }: { children: ReactNode }) => {
    return <div className="flex flex-col lg:flex-row h-dvh bg-black">{children}</div>;
};

export { FeedsLayout };
