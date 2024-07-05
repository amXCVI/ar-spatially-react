import Discord from "./socials/discord.svg?react";
import Linkedin from "./socials/linkedin.svg?react";
import Telegram from "./socials/telegram.svg?react";
import TicToc from "./socials/tik-tok.svg?react";

const socials = [
    {
        icon: <Discord />,
        title: "Discord",
        link: "",
        id: "Discord",
    },
    {
        icon: <Linkedin />,
        title: "Linkedin",
        link: "",
        id: "Linkedin",
    },
    {
        icon: <Telegram />,
        title: "Telegram",
        link: "",
        id: "Telegram",
    },
    {
        icon: <TicToc />,
        title: "Tic Toc",
        link: "",
        id: "Tic Toc",
    },
];

interface SocialsProps {
    className?: string;
    itemClassName?: string;
}
const Socials = ({ className, itemClassName }: SocialsProps) => {
    return (
        <div className={`flex gap-10 ${className ?? ""}`}>
            {socials.map((item) => {
                return (
                    <a key={item.id + item.title} href={item.link} className={`${itemClassName ?? ""}`}>
                        {item.icon}
                    </a>
                );
            })}
        </div>
    );
};

export { Socials };
