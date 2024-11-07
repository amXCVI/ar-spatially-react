import { ReactNode } from "react";

const UserLayout = ({ children }: { children: ReactNode }) => {
    return <div className="flex flex-col h-dvh bg-black container mx-auto">{children}</div>;
};

export { UserLayout };
