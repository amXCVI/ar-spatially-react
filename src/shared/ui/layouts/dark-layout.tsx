import { ReactNode } from "react";

interface DarkLayoutProps {
    className?: string;
    children: ReactNode;
}

const DarkLayout = ({ className, children }: DarkLayoutProps) => {
    return (
        <section className={`min-h-dvh overflow-y-scroll overflow-x-hidden w-full bg-dark-bg ${className ?? ""}`}>
            {children}
        </section>
    );
};

export default DarkLayout;
