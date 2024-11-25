// import Discord from "./socials/discord.svg?react";
import Instagram from "./socials/instagram.svg?react";
import Medium from "./socials/medium.svg?react";
// import Linkedin from "./socials/linkedin.svg?react";
import Telegram from "./socials/telegram.svg?react";
// import TicToc from "./socials/tik-tok.svg?react";
import X from "./socials/x.svg?react";

const socials = [
    // {
    //     icon: <Discord />,
    //     title: "Discord",
    //     link: "",
    //     id: "Discord",
    // },
    // {
    //     icon: <Linkedin />,
    //     title: "Linkedin",
    //     link: "https://www.linkedin.com/in/ar-spatially-481b342a8/",
    //     id: "Linkedin",
    // },
    {
        icon: <Telegram />,
        title: "Telegram",
        link: "https://t.me/ar_spatially",
        id: "Telegram",
    },
    // {
    //     icon: <TicToc />,
    //     title: "Tic Toc",
    //     link: "https://www.tiktok.com/@ar.spatially",
    //     id: "Tic Toc",
    // },
    {
        icon: <Instagram />,
        title: "Instagram",
        link: "https://www.instagram.com/ar.spatiallyy/?hl=en",
        id: "Instagram",
    },
    {
        icon: <X />,
        title: "X",
        link: "https://x.com/ARSpatially",
        id: "X",
    },
    {
        icon: <Medium />,
        title: "Medium",
        link: "https://medium.com/@spatiallyar",
        id: "Medium",
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
