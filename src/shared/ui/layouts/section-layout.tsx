import { ReactNode } from "react";

interface SectionLayoutProps {
    className?: string;
    children: ReactNode;
}

const SectionLayout = ({ className, children }: SectionLayoutProps) => {
    return (
        <section className={`p-5 min-h-dvh lg:max-h-dvh overflow-y-scroll w-full ${className ?? ""}`}>
            {children}
        </section>
    );
};

export default SectionLayout;
