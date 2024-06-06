import { menuLinks } from "@/shared/config";

import burgerIcon from "/images/landing/header/burger-icon.svg";
import logo from "/images/landing/header/logo.svg";

const Header = () => {
    return (
        <header className="">
            <div className="container mx-auto py-10 flex justify-between items-center">
                <img src={logo} />
                <div className="hidden lg:flex gap-14">
                    {menuLinks.map((item) => {
                        return (
                            <a
                                href={item.href}
                                key={item.id + "header-menu-item"}
                                className="font-medium text-gray90 text-[14px]"
                            >
                                {item.title}
                            </a>
                        );
                    })}
                </div>

                <div className="flex gap-1">
                    <div className="flex items-center p-4 bg-white30 rounded-full lg:bg-[#ffffff00]">
                        <a href="" className="font-medium text-gray90 text-[14px]">
                            Docs
                        </a>
                    </div>

                    <div className="flex items-center p-4 bg-white30 rounded-full lg:hidden">
                        <img src={burgerIcon} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
