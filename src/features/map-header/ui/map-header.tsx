import { routes } from "@/shared/config";

import logo from "/images/landing/header/logo.svg";

import SearchField from "./search-field";

const MapHeader = () => {
    return (
        <header className="drop-shadow-mapHeaderBg fixed z-20 top-0 right-0 left-0">
            <div className="">
                <div className="container mx-auto py-4 flex flex-col md:flex-row gap-3 justify-between">
                    <a href={routes.home}>
                        <div>
                            <img src={logo} />
                        </div>
                    </a>

                    <SearchField />
                </div>
            </div>
        </header>
    );
};

export default MapHeader;
