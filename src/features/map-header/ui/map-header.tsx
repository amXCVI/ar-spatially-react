import { MobileMenu } from "@/features/header";

import { routes } from "@/shared/config";

import Logo from "../assets/logo.svg?react";

import { AppsSelect } from "./apps-select";
import { MobileSearchField } from "./mobile-search-field";
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
                <a href={routes.root} className="flex items-center">
                    <Logo className="hidden lg:block" style={{ fill: "white" }} />
                    <MapMobileMenu className="lg:hidden h-14" />
                </a>

                <div className="flex items-center lg:w-full justify-between lg:justify-end gap-6">
                    <ObjectsToggler />
                    <SearchField onChangeMapCenter={onChangeMapCenter} className="hidden lg:block" />
                    <AppsSelect className="hidden lg:flex" />
                    <UserAvatar className="" />
                    <MapMobileMenu className="hidden lg:block" />
                </div>
            </div>

            <div className="fixed bottom-28 right-0 left-0 lg:hidden">
                <div
                    className="container mx-auto pt-10 px-6
                               flex flex-row gap-4 justify-between
                               "
                >
                    <MobileSearchField onChangeMapCenter={onChangeMapCenter} className="block lg:hidden" />
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
