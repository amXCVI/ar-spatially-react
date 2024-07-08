import { useOutsideClick } from "@ar-kit/shared/hooks";
import { Fragment, useState } from "react";

import { menuLinks, routes } from "@/shared/config";
import { Socials } from "@/shared/ui/socials";

import BurgerIcon from "./burger-icon.svg?react";
import CloseMenuIcon from "./close-menu-icon.svg?react";
import logo from "/images/landing/header/logo.svg";

interface HeaderInterface {
    white?: boolean;
}
const Header = ({ white }: HeaderInterface) => {
    return (
        <header className="fixed top-0 right-0 left-0 z-50">
            <div className="container mx-auto px-10 py-10 flex justify-between items-center">
                <a href={routes.home}>
                    <img src={logo} className="hidden md:block" />
                </a>

                <div />
                <div className="flex gap-14 ml-auto">
                    {menuLinks.map((item) => {
                        return (
                            <div
                                className={`${item.desctopOnly ? "hidden" : "flex"} lg:flex items-center p-4 bg-white30 rounded-full lg:bg-[#ffffff00]`}
                                key={item.id + "header-menu-item"}
                            >
                                <a href={item.href} className="font-medium text-gray90 text-[14px]">
                                    {item.title}
                                </a>
                            </div>
                        );
                    })}

                    <MobileMenu white={white} />
                </div>
            </div>
        </header>
    );
};

interface MobileMenuInterface {
    white?: boolean;
}
const MobileMenu = ({ white = false }: MobileMenuInterface) => {
    const [isOpenMobileMenu, setIsOpenMobileMenu] = useState<boolean>(false);

    const mobileMenuRef = useOutsideClick(() => {
        setIsOpenMobileMenu(false);
    });

    const toggleMobileMenu = () => {
        setIsOpenMobileMenu((e) => !e);
    };

    return (
        <div className="relative lg:hidden ">
            <div
                className={`flex items-center p-4 rounded-full duration-500 ${isOpenMobileMenu ? "bg-dark30" : "bg-white30"} cursor-pointer`}
                onClick={toggleMobileMenu}
            >
                <BurgerIcon className={white ? "stroke-white" : "stroke-charleston-green"} />
            </div>

            <div className={`top-0 right-0 bottom-0 left-0 z-10 ${isOpenMobileMenu ? "fixed" : "relative"}`}>
                <div
                    className={`fixed top-[calc(100vh-60%)] right-10 left-10 duration-500 ${
                        isOpenMobileMenu ? "opacity-1" : "opacity-0"
                    } flex flex-col items-center justify-between overflow-hidden z-50
                backdrop-blur-xl rounded-[34px] border border-white
                `}
                    style={{
                        background:
                            "linear-gradient(105.87deg, rgba(133, 133, 133, 0.4) 3.04%, rgba(82, 82, 82, 0.24) 99.24%)",
                    }}
                    ref={mobileMenuRef}
                >
                    <div className="flex justify-end ml-auto p-10 cursor-pointer" onClick={toggleMobileMenu}>
                        <CloseMenuIcon />
                    </div>
                    <div className="grid grid-cols-3 gap-4 my-10 static">
                        {menuLinks.map((item) => {
                            return item.desctopOnly ? (
                                <a key={item.id} className="flex flex-col items-center" href={item.href}>
                                    <div className="w-10 h-12">{item.icon}</div>
                                    <label className="medium-14 text-white">{item.title}</label>
                                </a>
                            ) : (
                                <Fragment key={item.id} />
                            );
                        })}
                    </div>

                    <Socials className="my-10" itemClassName="fill-white" />
                </div>
            </div>
        </div>
    );
};

export default Header;
