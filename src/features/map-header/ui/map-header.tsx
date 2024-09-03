import { MobileMenu } from "@/features/header";

import { routes } from "@/shared/config";

import Logo from "../assets/logo.svg?react";
import shortLogo from "/images/landing/header/short-logo.svg";

import { AppsSelect } from "./apps-select";
import { ObjectsToggler } from "./object-owner-toggler";
import SearchField from "./search-field";
import { UserAvatar } from "./user-avatar";

interface MapHeaderProps {
    onChangeMapCenter: (e: { lat: number; lng: number; zoom: number }) => void;
}

const MapHeader = ({ onChangeMapCenter }: MapHeaderProps) => {
    return (
        <header className="fixed z-20 top-0 right-0 left-0">
            <div
                className="container mx-auto pt-10 px-6 
                           flex flex-row gap-4 md:gap-10 justify-between"
            >
                <a href={routes.home} className="flex items-center">
                    <Logo className="hidden lg:block" style={{ fill: "white" }} />
                    <img src={shortLogo} className="lg:hidden h-14" />
                </a>

                <div className="flex items-center lg:w-full justify-between lg:justify-end gap-6">
                    <ObjectsToggler className="hidden 2sm:block" />
                    <SearchField onChangeMapCenter={onChangeMapCenter} className="hidden lg:block" />
                    <AppsSelect className="hidden lg:block" />
                    <UserAvatar className="" />
                    <MapMobileMenu className="hidden lg:block" />
                </div>
            </div>

            <div className="fixed bottom-10 right-0 left-0 lg:hidden">
                <div
                    className="container mx-auto pt-10 px-6
                               flex flex-row gap-4 justify-between
                               "
                >
                    <SearchField onChangeMapCenter={onChangeMapCenter} />

                    <MapMobileMenu />
                </div>
            </div>
        </header>
    );
};

const MapMobileMenu = ({ className }: { className?: string }) => (
    <MobileMenu
        className={className}
        show={false}
        white
        iconClassname="flex justify-center items-center duration-500
                       cursor-pointer hover:bg-white50 w-[60px] h-[60px]
                       border-2 border-raisin-black bg-dark-gray rounded-full backdrop-blur"
    />
);

export default MapHeader;
