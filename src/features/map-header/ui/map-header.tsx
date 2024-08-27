import { MobileMenu } from "@/features/header";

import { routes } from "@/shared/config";

import Logo from "../assets/logo.svg?react";
import shortLogo from "/images/landing/header/short-logo.svg";

import { AppsSelect } from "./apps-select";
import SearchField from "./search-field";
import { UserAvatar } from "./user-avatar";

const MapHeader = () => {
    return (
        <header className="fixed z-20 top-0 right-0 left-0">
            <div className="">
                <div
                    className="container mx-auto pt-10 px-6 
                                flex flex-row gap-10 justify-between"
                >
                    <a href={routes.home} className="flex items-center">
                        <Logo className="hidden lg:block" style={{ fill: "white" }} />
                        <img src={shortLogo} className="lg:hidden ml-5 w-12" />
                    </a>

                    <div
                        className="flex items-center md:w-full justify-between lg:justify-end gap-6
                                    fixed md:relative bottom-10 md:bottom-0 left-0 right-0 px-10 md:px-0"
                    >
                        <SearchField />

                        <AppsSelect className="hidden md:block" />

                        <UserAvatar className="fixed md:relative top-10 md:top-0 right-10 md:right-0 " />

                        <MobileMenu
                            show={false}
                            white
                            iconClassname="flex justify-center items-center duration-500
                                           cursor-pointer hover:bg-white50 w-[60px] h-[60px]
                                           border-2 border-raisin-black bg-dark-gray rounded-full backdrop-blur"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default MapHeader;
