import { routes } from "@/shared/config";

import logo from "/images/landing/header/logo.svg";

import SearchField from "./search-field";

const MapHeader = () => {
    return (
        <header
            className="fixed z-20 top-0 right-0 left-0
                       bg-map-header-bg
                       "
        >
            <div className="">
                <div className="container mx-auto py-4 flex flex-col md:flex-row gap-6 justify-start">
                    <a href={routes.home} className="flex items-center">
                        <img src={logo} />
                    </a>

                    <SearchField />
                </div>
            </div>
        </header>
    );
};

export default MapHeader;
