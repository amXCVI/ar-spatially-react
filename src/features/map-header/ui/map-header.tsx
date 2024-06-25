import logo from "/images/landing/header/logo.svg";

import SearchField from "./search-field";

const MapHeader = () => {
    return (
        <header className="drop-shadow-mapHeaderBg">
            <div className="bg-dark70">
                <div className="container mx-auto py-4 flex flex-col md:flex-row gap-3 justify-between">
                    <div>
                        <img src={logo} />
                    </div>

                    <SearchField />
                </div>
            </div>
        </header>
    );
};

export default MapHeader;
