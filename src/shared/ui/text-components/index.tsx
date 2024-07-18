import { ReactNode } from "react";

export const Title = ({ title, className }: { title: string; className?: string }) => {
    return <h2 className={`t24-700 text-gray90 uppercase ${className ?? ""}`}>{title}</h2>;
};

export const Subtitle = ({ subtitle, className }: { subtitle: string; className?: string }) => {
    return <h3 className={`medium-20 text-gray90 ${className ?? ""}`}>{subtitle}</h3>;
};

export const TextP = ({ children, className }: { children: ReactNode; className?: string }) => {
    return <p className={`regular-16 text-gray90 text-justify ${className ?? ""}`}>{children}</p>;
};
