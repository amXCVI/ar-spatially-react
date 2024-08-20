import Header from "@/features/header";

import { routes } from "@/shared/config";
import { DefaultButton } from "@/shared/ui/buttons";
import { Socials } from "@/shared/ui/socials";

import footerStars from "/images/landing/footer/footer-stars.svg";
import scrollDownIcon from "/images/landing/footer/scroll-down-to-explore.svg";
import textItemPointIcon from "/images/landing/start-section/text-item-point.svg";

import phone from "/images/landing/start-section/phone.webp";

const StartSection = () => {
    return (
        <section
            className="h-full min-h-[100vh]
                   flex flex-col justify-between
                   "
        >
            <Header />

            <div
                className="container mx-auto px-6 
                        flex flex-col lg:flex-row items-center xl:gap-8 
                        lg:pt-12 xl:pt-0"
            >
                <div className="flex flex-col justify-between w-full h-full gap-10 lg:gap-20">
                    <div
                        className="flex flex-wrap flex-col w-full lg:px-6 xl:px-12
                                   h1-90-600 leading-none text-[65px] sm:text-[86px] lg:text-[96px] lg:font-[96px]
                                   mt-6 lg:mt-0"
                    >
                        <h1 className="bg-start-section-text-gradient bg-clip-text text-transparent lg:mr-auto">OUR</h1>
                        <h1 className="bg-start-section-text-gradient bg-clip-text text-transparent lg:ml-auto -mt-2">
                            Solution
                        </h1>
                    </div>

                    <div className="flex flex-col w-full gap-6 items-start">
                        <div className="flex justify-start items-center manrope-regular-26 text-gray70">
                            <img src={textItemPointIcon} className="mr-2 w-8 h-8 2sm:w-11 2sm:h-11" />
                            <div className="">
                                <b className="text-gray90">Aggregator of AR apps </b>
                                <br className="hidden sm:block" />
                                for real businesses and users
                            </div>
                        </div>

                        <div className="flex justify-start items-center  manrope-regular-26 text-gray70 lg:ml-24 2xl:ml-40">
                            <img src={textItemPointIcon} className="mr-2 w-8 h-8 2sm:w-11 2sm:h-11" />
                            <div className="">
                                <b className="text-gray90">AR content </b>tied to location
                                <br className="hidden sm:block" />
                                on thr global map
                            </div>
                        </div>

                        <div className="flex justify-start items-center  manrope-regular-26 text-gray70 lg:ml-10 2xl:ml-16">
                            <img src={textItemPointIcon} className="mr-2 w-8 h-8 2sm:w-11 2sm:h-11" />
                            <div className="">
                                <b className="text-gray90">AR-NFT</b> is a spatial geolocation token{" "}
                                <br className="hidden sm:block" />
                                that provide rights for
                                <b className="text-gray90 ml-2">AR content</b>
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto">
                        <a href={routes.arNFT}>
                            <DefaultButton className="backdrop-blur bg-none text-gray90">Try AR</DefaultButton>
                        </a>
                    </div>
                </div>

                <div
                    className="flex flex-col items-center w-full h-full mt-6 xl:mt-0
                           relative"
                >
                    <div
                        className="absolute top-0 md:-top-10 lg:-top-2/3 -right-40 lg:-right-[100vw] bottom-0 lg:-bottom-2/3 -left-40 lg:-left-20
                                bg-[url(/images/landing/start-section/bulb.webp)]
                                bg-no-repeat bg-contain lg:bg-auto bg-top md:bg-center lg:bg-left 
                                z-0"
                    />
                    <img
                        src={phone}
                        className="object-contain h-full max-h-[80vh] lg:max-h-[60vh] lg:max-w-[30vw] z-10 my-16 lg:ml-auto xl:mr-auto"
                    />
                </div>
            </div>

            <div className="container mx-auto hidden lg:flex flex-col items-center px-6 lg:-mt-6 xl:-mt-16">
                <div className="flex justify-between items-center w-full mb-4 -mt-20">
                    <img src={footerStars} className="-ml-2" />
                </div>

                <div className="flex justify-between items-center w-full">
                    <div className="flex items-center regular-14 text-gray90">
                        <img src={scrollDownIcon} className="mr-2" />
                        Scroll down
                        <br />
                        to explore
                    </div>

                    <div></div>
                </div>

                <Socials className="lg:mb-16 gap-8 z-10" itemClassName="fill-charleston-green" />
            </div>
        </section>
    );
};

export { StartSection };
