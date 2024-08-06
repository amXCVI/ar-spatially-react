import { ReactNode } from "react";

interface SectionLayoutProps {
    className?: string;
    children: ReactNode;
}

const SectionLayout = ({ className, children }: SectionLayoutProps) => {
    return <section className={`min-h-dvh overflow-y-scroll w-full ${className ?? ""}`}>{children}</section>;
};

export default SectionLayout;
