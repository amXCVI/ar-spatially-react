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

                    <div className="flex items-center w-full justify-end gap-6">
                        <SearchField />

                        <AppsSelect />

                        <UserAvatar />

                        <MobileMenu show={false} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default MapHeader;
