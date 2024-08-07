import { ReactNode } from "react";


export const SectionTitle = ({ title, className }: { title: string; className?: string }) => {
    return <h2 className={`h2-34-700 font-inter uppercase text-gray90 ${className ?? ""}`}>{title}</h2>;
};

export const Title = ({ title, className }: { title: string; className?: string }) => {
    return <h2 className={`manrope-bold-24 text-gray90 ${className ?? ""}`}>{title}</h2>;
};

export const Subtitle = ({ subtitle, className }: { subtitle: string; className?: string }) => {
    return <h3 className={`medium-20 text-gray90 ${className ?? ""}`}>{subtitle}</h3>;
};

export const TextP = ({ children, className }: { children: ReactNode; className?: string }) => {
    return <p className={`manrope-regular-16 text-gray90 text-justify ${className ?? ""}`}>{children}</p>;
};


