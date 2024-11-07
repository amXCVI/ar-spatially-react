import { MobileMenu } from "@/features/header";

import { routes } from "@/shared/config";

import Logo from "../assets/logo.svg?react";

import { AppsSelect } from "./apps-select";
import { MobileSearch } from "./mobile-search";
import { ObjectsToggler } from "./object-owner-toggler";
import SearchField from "./search-field";
import { UserAvatar } from "./user-avatar";

interface MapHeaderProps {
    onChangeMapCenter: (e: { lat: number; lng: number; zoom: number }) => void;
}

const MapHeader = ({ onChangeMapCenter }: MapHeaderProps) => {
    return (
        <header className="fixed z-20 bottom-0 xl:bottom-auto xl:top-0 right-0 left-0">
            <div
                className="sm:container mx-auto pb-7 lg:pb-10 xl:pb-0 xl:pt-10 px-2 sm:px-6 
                           flex flex-row gap-1 3sm:gap-2 md:gap-10 justify-between md:justify-center xl:justify-between"
            >
                <a href={routes.root} className="items-center hidden xl:flex h-14 mr-auto">
                    <Logo style={{ fill: "white" }} />
                </a>

                <MapMobileMenu className="lg:hidden" />

                <MobileSearch onChangeMapCenter={onChangeMapCenter} className="xl:hidden" />

                <ObjectsToggler />
                <SearchField onChangeMapCenter={onChangeMapCenter} className="hidden xl:block" />
                <AppsSelect />
                <UserAvatar className="fixed top-6 right-6 lg:static" />
                <MapMobileMenu className="hidden lg:block" />
            </div>

            {/* <div className="fixed bottom-28 right-0 left-0 lg:hidden">
                <div
                    className="container mx-auto pt-10 px-6
                               flex flex-row gap-4 justify-between
                               "
                >
                    <MobileSearchField onChangeMapCenter={onChangeMapCenter} className="block lg:hidden" />
                </div>
            </div> */}
        </header>
    );
};

const MapMobileMenu = ({ className }: { className?: string }) => (
    <MobileMenu
        className={className}
        show={false}
        white
        iconClassname="flex justify-center items-center duration-500
                       cursor-pointer hover:bg-white50 w-10 h-10 3sm:w-12 3sm:h-12 lg:w-14 lg:h-14 p-2.5 lg:p-3
                       border border-white/15 bg-granite-gray/35 backdrop-blur-lg rounded-full"
    />
);

export default MapHeader;
