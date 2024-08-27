import { useOutsideClick } from "@ar-kit/shared/hooks";
import { Fragment, useContext, useEffect, useState } from "react";

import { AuthContext, SignInPopupModes } from "@/features/login-modal";

import { menuLinks, routes } from "@/shared/config";
import { DefaultButton } from "@/shared/ui/buttons";
import { Socials } from "@/shared/ui/socials";

import AppStoreButton from "../assets/app-store-white-icon.svg?react";
import BurgerIcon from "../assets/burger-icon.svg?react";
// import BurgerIcon from "./burger-icon.svg?react";
import CloseMenuIcon from "../assets/close-menu-icon.svg?react";
import PlayMarketButton from "../assets/google-play-white-icon.svg?react";
import Logo from "../assets/logo.svg?react";
import MenuIcon from "../assets/menu-icon.svg?react";
import PersonIcon from "../assets/person-icon.svg?react";

// import shortLogo from "/images/landing/header/short-logo.svg";

interface HeaderInterface {
    white?: boolean;
}

const Header = ({ white }: HeaderInterface) => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const controlNavbar = () => {
            if (window.scrollY > window.innerHeight / 16) {
                setShow(false);
            } else {
                setShow(true);
            }
        };

        window.addEventListener("scroll", controlNavbar);

        // cleanup function
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, []);

    return (
        <header className="z-50">
            <div
                className={`container mx-auto py-5 lg:py-10 px-7
                            lg:px-12 xl:px-0\
                            flex justify-between`}
            >
                <a href={routes.home} className="block">
                    <Logo style={{ fill: white ? "white" : "#1F2020", maxWidth: "65vw" }} />
                </a>

                <div className={`hidden lg:flex gap-6 ml-auto`}>
                    {menuLinks.map((item) => {
                        return (
                            <div
                                className={`${item.desctopOnly ? "hidden" : "flex"} lg:flex items-center p-4 bg-white30 rounded-full lg:bg-[#ffffff00]`}
                                key={item.id + "header-menu-item"}
                            >
                                <a href={item.href} className={`font-medium font-manrope text-[14px]`}>
                                    <b
                                        className={
                                            white
                                                ? "text-white hover:text-blue-accent duration-200"
                                                : "text-gray90 hover:text-blue-accent duration-200"
                                        }
                                    >
                                        {item.title}
                                    </b>
                                </a>
                            </div>
                        );
                    })}
                </div>

                <MobileMenu show={show} />

                <Profile show={show} />
            </div>
        </header>
    );
};

interface MobileMenuInterface {
    white?: boolean;
    show: boolean;
    className?: string;
    iconClassname?: string;
}
export const MobileMenu = ({ white = false, show, className, iconClassname }: MobileMenuInterface) => {
    const [isOpenMobileMenu, setIsOpenMobileMenu] = useState<boolean>(false);

    const mobileMenuRef = useOutsideClick(() => {
        setIsOpenMobileMenu(false);
    });

    const toggleMobileMenu = () => {
        setIsOpenMobileMenu((e) => !e);
    };

    return (
        <div className={`block ${show && "lg:hidden"} ${className}`}>
            <div
                className={
                    iconClassname
                        ? iconClassname
                        : `flex flex-col justify-center items-center gap-2 duration-500
                            cursor-pointer hover:bg-white50 w-20 h-20
                            fixed ${show ? "top-4 right-4 lg:top-6" : "bottom-4 right-4 lg:top-6"}
                            border border-blue-accent bg-white30 rounded-full p-4 backdrop-blur`
                }
                onClick={toggleMobileMenu}
            >
                {white ? <BurgerIcon /> : <MenuIcon />}
            </div>

            <div
                className={`fixed top-0 ${isOpenMobileMenu ? "right-0 bottom-0 left-0 z-10" : "!h-0 overflow-hidden"} flex justify-center items-center`}
            >
                <div
                    className={`container duration-500 ${
                        isOpenMobileMenu ? "opacity-1" : "opacity-0"
                    } flex flex-col items-center justify-between overflow-hidden z-50
                backdrop-blur-xl rounded-[34px] border border-white h-min
                mx-10 max-w-prose
                `}
                    style={{
                        background:
                            "linear-gradient(105.87deg, rgba(133, 133, 133, 0.4) 3.04%, rgba(82, 82, 82, 0.24) 99.24%)",
                    }}
                    ref={mobileMenuRef}
                >
                    <div className="flex justify-between w-full p-10 cursor-pointer" onClick={toggleMobileMenu}>
                        <div className="w-4" />
                        <b className="text-white">Menu</b>
                        <CloseMenuIcon />
                    </div>
                    <div className={`flex gap-6 flex-wrap justify-center my-10`}>
                        {menuLinks.map((item) => {
                            return item.desctopOnly ? (
                                <a key={item.id} className="flex flex-col items-center w-1/4" href={item.href}>
                                    <div className="flex justify-center items-center w-10 h-12">{item.icon}</div>
                                    <label className="medium-14 text-white">{item.title}</label>
                                </a>
                            ) : (
                                <Fragment key={item.id} />
                            );
                        })}
                    </div>

                    <div className="flex gap-2 md:gap-5">
                        <a href={import.meta.env.VITE_APP_NFTST_APPSTORE_URL}>
                            <DefaultButton className="bg-none text-white !py-3 border-none">
                                <AppStoreButton style={{ fill: "#7a7a7a" }} />
                            </DefaultButton>
                        </a>
                        <a href={import.meta.env.VITE_APP_NFTST_PLAYMARKET_URL}>
                            <DefaultButton className="bg-none text-white !py-3 border-none">
                                <PlayMarketButton style={{ fill: "#7a7a7a" }} />
                            </DefaultButton>
                        </a>
                    </div>

                    <Socials className="my-10 gap-5 2sm:gap-10" itemClassName="fill-white" />
                </div>
            </div>
        </div>
    );
};

const Profile = ({ show }: { show: boolean }) => {
    const { openLoginModal } = useContext(AuthContext);

    return (
        <div
            onClick={() => {
                openLoginModal(SignInPopupModes.SignUp);
            }}
            className={`flex justify-center items-center z-[1]
                            cursor-pointer hover:bg-white50 w-20 h-20
                            fixed ${show ? "top-32 right-4 lg:top-6" : "bottom-32 right-4 lg:top-32"}
                            border border-blue-accent bg-white30 rounded-full p-4 backdrop-blur`}
        >
            <PersonIcon />
        </div>
    );
};

export default Header;
