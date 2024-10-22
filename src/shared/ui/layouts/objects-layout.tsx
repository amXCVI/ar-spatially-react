import { ReactNode } from "react";

const ObjectsLayout = ({ children }: { children: ReactNode }) => {
    return <div className="flex flex-col lg:flex-row h-dvh bg-black">{children}</div>;
};

export { ObjectsLayout };
