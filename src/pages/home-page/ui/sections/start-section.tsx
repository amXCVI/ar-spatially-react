import Header from "@/features/header";
import SectionFooter from "@/features/section-footer";

import { routes } from "@/shared/config";
import { DefaultButton } from "@/shared/ui/buttons";

import textParagraphPoint from "/images/landing/our-vision-section/paragraph-point.svg";
import textItemPointIcon from "/images/landing/start-section/text-item-point.svg";

import phone from "/images/landing/start-section/phone.webp";

const StartSection = () => {
    return (
        <div
            // className="bg-[url(/images/landing/start-section/bg-image.svg)]
            //     bg-cover bg-no-repeat bg-center rounded-[40px]
            //     h-full min-h-[calc(100dvh-2.5rem)]
            //     flex flex-col justify-between
            //     mx-auto container"
            className="lg:bg-[url(/images/landing/start-section/bg-image.png)]
                bg-cover xl:bg-[length:auto_150vh] bg-no-repeat bg-bottom
                h-full min-h-[calc(100dvh-2rem)]
                p-4 pt-0 flex flex-col justify-between
                "
        >
            <div
                className="bg-[url(/images/landing/start-section/bg-lines.svg)] 
                            bg-cover bg-no-repeat bg-center
                            h-full w-full min-h-[inherit]
                            p-4 pt-0 flex flex-col justify-between"
            >
                <Header />
                <div className="h-24" />

                <div className="container mx-auto flex flex-col items-center xl:gap-8 2xl:gap-32 h-full xl:max-h-full xl:flex-row pb-10 lg:py-10 xl:py-0">
                    <div className="flex flex-col items-end w-full">
                        <div
                            className="flex flex-wrap xl:flex-col items-center gap-4 mx-auto lg:mt-10 xl:mt-0
                                        h1-90-600"
                        >
                            <h1 className="bg-start-section-text-gradient bg-clip-text text-transparent md:mr-auto">
                                OUR
                            </h1>
                            <h1 className="bg-start-section-text-gradient bg-clip-text text-transparent ml-auto md:ml-12 xl:ml-24 md:mt-20 xl:mt-0">
                                Solution
                            </h1>
                        </div>

                        <div className="flex flex-col md:max-w-3xl lg:max-w-5xl w-full gap-4 items-start xl:gap-9 mt-6 mx-auto">
                            <div className="flex justify-start items-start manrope-regular-26 text-gray70">
                                <img src={textItemPointIcon} className="hidden md:block mr-2" />
                                <img src={textParagraphPoint} className="block md:hidden mr-2 mt-2" />
                                <div className="">
                                    Aggregator of <b className="text-gray90"> AR apps </b>
                                    <br className="hidden sm:block" />
                                    for real businesses and users
                                </div>
                            </div>

                            <div className="flex justify-start items-start sm:mx-auto pr-20 lg:pr-0 manrope-regular-26 text-gray70">
                                <img src={textItemPointIcon} className="hidden md:block mr-2" />
                                <img src={textParagraphPoint} className="block md:hidden mr-2 mt-2" />
                                <div className="">
                                    <b className="text-gray90">AR content </b>tied to location
                                    <br className="hidden sm:block" />
                                    on thr global map
                                </div>
                            </div>

                            <div className="flex justify-start items-start sm:ml-auto manrope-regular-26 text-gray70">
                                <img src={textItemPointIcon} className="hidden md:block mr-2" />
                                <img src={textParagraphPoint} className="block md:hidden mr-2 mt-2" />
                                <div className="">
                                    <b className="text-gray90">AR-NFT</b> is a spatial geolocation token{" "}
                                    <br className="hidden sm:block" />
                                    that provide rights for
                                    <span className="text-gray90 ml-2">AR content</span>
                                </div>
                            </div>

                            <div className="mx-auto">
                                <a href={routes.arNFT}>
                                    <DefaultButton className="backdrop-blur bg-none text-gray90">Try AR</DefaultButton>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center w-full h-full mt-6 xl:mt-0">
                        <div className="relative h-full">
                            <div className="absolute h-full -left-1/2 -right-1/2 z-0 xl:scale-110">
                                <img src="/images/landing/start-section/bulb.webp" />
                            </div>

                            <img
                                src={phone}
                                className="relative object-contain h-full max-h-[80vh] lg:max-h-[65dvh] z-10"
                            />
                            {/* <div className="absolute -top-10 lg:top-5 -left-24 border border-white30 rounded-full p-8 lg:p-9 backdrop-blur">
                            <img src={iconOnPhone} />
                        </div> */}
                        </div>
                    </div>
                </div>

                <SectionFooter />
            </div>
        </div>
    );
};

export { StartSection };
