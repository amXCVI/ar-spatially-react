import discord from "/images/socials/discord.svg";
import ticToc from "/images/socials/discord.svg";
import linkedin from "/images/socials/linkedin.svg";
import telegram from "/images/socials/telegram.svg";

const socials = [
    {
        icon: discord,
        title: "Discord",
        link: "",
        id: "Discord",
    },
    {
        icon: linkedin,
        title: "Linkedin",
        link: "",
        id: "Linkedin",
    },
    {
        icon: telegram,
        title: "Telegram",
        link: "",
        id: "Telegram",
    },
    {
        icon: ticToc,
        title: "Tic Toc",
        link: "",
        id: "Tic Toc",
    },
];

interface SocialsProps {
    className?: string;
}
const Socials = ({ className }: SocialsProps) => {
    return (
        <div className={`flex gap-10 ${className ?? ""}`}>
            {socials.map((item) => {
                return (
                    <a key={item.id + item.title} href={item.link}>
                        <img src={item.icon} />
                    </a>
                );
            })}
        </div>
    );
};

export { Socials };
