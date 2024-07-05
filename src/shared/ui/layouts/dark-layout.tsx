import { ReactNode } from "react";

interface DarkLayoutProps {
    className?: string;
    children: ReactNode;
}

const DarkLayout = ({ className, children }: DarkLayoutProps) => {
    return (
        <section className={`p-5 min-h-dvh overflow-y-scroll w-full bg-dark-bg ${className ?? ""}`}>{children}</section>
    );
};

export default DarkLayout;
