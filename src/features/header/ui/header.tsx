import { useOutsideClick } from "@ar-kit/shared/hooks";
import { Fragment, ReactNode, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext, SignInPopupModes } from "@/features/login-modal";

import { docsMenuLink, menuLinks, routes } from "@/shared/config";
import { useUserContext } from "@/shared/stores";
// import { DefaultButton } from "@/shared/ui/buttons";
import { Socials } from "@/shared/ui/socials";

// import AppStoreButton from "../assets/app-store-white-icon.svg?react";
import BurgerIcon from "../assets/burger-icon.svg?react";
// import BurgerIcon from "./burger-icon.svg?react";
import CloseMenuIcon from "../assets/close-menu-icon.svg?react";
// import PlayMarketButton from "../assets/google-play-white-icon.svg?react";
import Logo from "../assets/logo.svg?react";
import MenuIcon from "../assets/menu-icon.svg?react";
import PersonIcon from "../assets/person-icon.svg?react";

// import shortLogo from "/images/landing/header/short-logo.svg";

interface HeaderInterface {
    white?: boolean;
    actionButton?: ReactNode;
}

const Header = ({ white, actionButton }: HeaderInterface) => {
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
                <a href={routes.root} className="block">
                    <Logo style={{ fill: white ? "white" : "#1F2020", maxWidth: "65vw" }} />
                </a>

                <div className={`hidden lg:flex gap-6 ml-auto`}>
                    {menuLinks.map((item) => {
                        return (
                            <div
                                className={`${item.desctopOnly ? "hidden" : "flex"} lg:flex items-center p-4 bg-white30 rounded-full lg:bg-[#ffffff00]`}
                                key={item.id + "header-menu-item"}
                            >
                                <Link to={`/${item.href}`} className={`font-medium font-manrope text-[14px]`}>
                                    <b
                                        className={
                                            white
                                                ? "text-white hover:text-blue-accent duration-200"
                                                : "text-gray90 hover:text-blue-accent duration-200"
                                        }
                                    >
                                        {item.title}
                                    </b>
                                </Link>
                            </div>
                        );
                    })}
                    <div className={`hidden lg:flex items-center p-4 bg-white30 rounded-full lg:bg-[#ffffff00]`}>
                        <Link to={docsMenuLink.href} className={`font-medium font-manrope text-[14px]`}>
                            <b
                                className={
                                    white
                                        ? "text-white hover:text-blue-accent duration-200"
                                        : "text-gray90 hover:text-blue-accent duration-200"
                                }
                            >
                                {docsMenuLink.title}
                            </b>
                        </Link>
                    </div>
                </div>

                <MobileMenu show={show} />

                <div className={`fixed ${show ? "top-20 right-4 lg:top-6" : "bottom-20 right-4 lg:top-[5.5rem]"}`}>
                    {actionButton ?? <Profile />}
                </div>
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
                            cursor-pointer hover:bg-white50 w-14 h-14
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
                                <Link key={item.id} className="flex flex-col items-center w-1/4" to={`/${item.href}`}>
                                    <div className="flex justify-center items-center w-10 h-12">{item.icon}</div>
                                    <label className="medium-14 text-white">{item.title}</label>
                                </Link>
                            ) : (
                                <Fragment key={item.id} />
                            );
                        })}
                        <Link className="flex flex-col items-center w-1/4" to={docsMenuLink.href}>
                            <div className="flex justify-center items-center w-10 h-12">{docsMenuLink.icon}</div>
                            <label className="medium-14 text-white">{docsMenuLink.title}</label>
                        </Link>
                    </div>

                    {/* <div className="flex gap-2 md:gap-5">
                        <Link to={import.meta.env.VITE_APP_NFTST_APPSTORE_URL}>
                            <DefaultButton className="bg-none text-white !py-3 border-none">
                                <AppStoreButton style={{ fill: "#7a7a7a" }} />
                            </DefaultButton>
                        </Link>
                        <Link to={import.meta.env.VITE_APP_NFTST_PLAYMARKET_URL}>
                            <DefaultButton className="bg-none text-white !py-3 border-none">
                                <PlayMarketButton style={{ fill: "#7a7a7a" }} />
                            </DefaultButton>
                        </Link>
                    </div> */}

                    <Socials className="my-10 gap-5 2sm:gap-10" itemClassName="fill-white" />
                </div>
            </div>
        </div>
    );
};

const Profile = () => {
    const navigation = useNavigate();

    const { openLoginModal, authenticated } = useContext(AuthContext);

    const { user } = useUserContext();

    const handleClickProfile = () => {
        if (authenticated) {
            navigation(`/${routes.lk}`);
        } else {
            openLoginModal(SignInPopupModes.SignUp);
        }
    };

    return (
        <div
            onClick={handleClickProfile}
            className={`flex justify-center items-center z-[1]
                        cursor-pointer hover:bg-white50 w-14 h-14
                        border border-blue-accent bg-white30 rounded-full backdrop-blur
                        overflow-hidden`}
        >
            {user?.avatarId ? (
                <img
                    src={`${import.meta.env.VITE_APP_API_BASE_URL}gateway/file/get?fileId=${user.avatarId}`}
                    className=""
                />
            ) : (
                <PersonIcon />
            )}
        </div>
    );
};

export default Header;
