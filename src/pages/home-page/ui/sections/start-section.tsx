import Header from "@/features/header";
import SectionFooter from "@/features/section-footer";

import { routes } from "@/shared/config";
import { DefaultButton } from "@/shared/ui/buttons";

import textItemPointIcon from "/images/landing/start-section/text-item-point.svg";

import phone from "/images/landing/start-section/phone.webp";

const StartSection = () => {
    return (
        <div
            className="
                        h-full min-h-[calc(100dvh-2rem)]
                        p-4 pt-0 flex flex-col justify-between
                        "
            // className="lg:bg-[url(/images/landing/start-section/bg-image.png)]
            //     bg-cover xl:bg-[length:auto_150vh] bg-no-repeat bg-bottom
            //     h-full min-h-[calc(100dvh-2rem)]
            //     p-4 pt-0 flex flex-col justify-between
            //     "
        >
            <div
                // className="bg-[url(/images/landing/start-section/bg-lines.svg)]
                //             bg-cover bg-no-repeat bg-center
                //             h-full w-full min-h-[inherit]
                //             p-4 pt-0 flex flex-col justify-between"
                className="
                h-full min-h-[calc(100dvh-2rem)]
                p-4 pt-0 flex flex-col justify-between
                "
            >
                <Header />
                <div className="h-36" />

                <div className="container mx-auto flex flex-col items-center lg:gap-8 h-full lg:max-h-full lg:flex-row pb-10 lg:py-10">
                    <div className="flex flex-col justify-between w-full h-full gap-10 md:gap-20">
                        <div
                            className="flex flex-wrap flex-col w-full md:px-20
                                        h1-90-600"
                        >
                            <h1 className="bg-start-section-text-gradient bg-clip-text text-transparent md:mr-auto">
                                OUR
                            </h1>
                            <h1 className="bg-start-section-text-gradient bg-clip-text text-transparent md:ml-auto">
                                Solution
                            </h1>
                        </div>

                        <div className="flex flex-col w-full gap-6 items-start">
                            <div className="flex justify-start items-center manrope-regular-26 text-gray70">
                                <img src={textItemPointIcon} className="mr-2" />
                                <div className="">
                                    <b className="text-gray90">Aggregator of AR apps </b>
                                    <br className="hidden sm:block" />
                                    for real businesses and users
                                </div>
                            </div>

                            <div className="flex justify-start items-center  manrope-regular-26 text-gray70 lg:ml-24 2xl:ml-40">
                                <img src={textItemPointIcon} className="mr-2" />
                                <div className="">
                                    <b className="text-gray90">AR content </b>tied to location
                                    <br className="hidden sm:block" />
                                    on thr global map
                                </div>
                            </div>

                            <div className="flex justify-start items-center  manrope-regular-26 text-gray70 lg:ml-10 2xl:ml-16">
                                <img src={textItemPointIcon} className="mr-2" />
                                <div className="">
                                    <b className="text-gray90">AR-NFT</b> is a spatial geolocation token{" "}
                                    <br className="hidden sm:block" />
                                    that provide rights for
                                    <span className="text-gray90 ml-2">AR content</span>
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
                            className="absolute -top-10 lg:-top-2/3 -right-40 lg:-right-[100vw] bottom-0 lg:-bottom-2/3 -left-40 lg:-left-20
                                        bg-[url(/images/landing/start-section/bulb.webp)]
                                        bg-no-repeat bg-contain lg:bg-auto bg-center lg:bg-left 
                                        z-0"
                        />
                        <img src={phone} className="object-contain h-full max-h-[80vh] lg:max-h-[65dvh] z-10 my-16" />
                    </div>
                </div>

                <SectionFooter />
            </div>
        </div>
    );
};

export { StartSection };
