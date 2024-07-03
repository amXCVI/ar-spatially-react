import SectionFooter from "@/features/section-footer";

import headerCrosses from "/images/landing/our-vision-section/header-crosses.svg";
import headerDots from "/images/landing/our-vision-section/header-points.svg";
import logo from "/images/landing/our-vision-section/logo.svg";
import textItemPointIcon from "/images/landing/start-section/text-item-point.svg";

import bulb from "/images/landing/our-vision-section/bulb.png";

const OurVisionSection = () => {
    return (
        <div className="h-full lg:max-h-full min-h-dvh flex flex-col justify-between">
            <div className="flex container mx-auto justify-between items-end pt-10">
                <div className="hidden lg:flex flex-col poppuns-80 leading-12 whitespace-nowrap">
                    <img src={headerDots} className="w-8 ml-8 mb-8" />
                    <span className="text-white30 blur-[3.5px]">At the forefront of transforming</span>
                    <span className="text-white50 blur-[2px] mx-auto">human interaction</span>
                    <span className="text-grey70 ml-16">with augmented reality </span>
                </div>

                <img src={headerCrosses} className="hidden lg:flex ml-auto" />
            </div>

            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-5 items-center h-full lg:max-h-full py-10 lg:p-y-24">
                <div className="col-span-3 flex flex-col w-full">
                    <div className="flex gap-8 lg:gap-0 lg:flex-col justify-center items-center mx-auto lg:max-w-prose w-full h1-90-600 text-gray90">
                        <h1 className="lg:mr-auto lg:ml-8">OUR</h1>
                        <h1 className="lg:mx-auto">Vision</h1>
                    </div>

                    <div className="flex flex-col w-full gap-4 items-start lg:gap-9 mt-6">
                        <div className="flex justify-start items-start lg:max-w-prose">
                            <img src={textItemPointIcon} className="hidden lg:block mr-2" />
                            <div className="flex flex-col semibold-26 text-gray90">
                                <div className="my-1.5 uppercase">
                                    We aim to become a market leader in augmented reality
                                </div>
                                <span className="medium-20 my-1.5">
                                    with our creative solutions that benefit businesses and users in areas like
                                    education, entertainment, and marketing.
                                </span>
                            </div>
                        </div>

                        <div className="flex justify-start items-start lg:mx-auto lg:max-w-prose">
                            <img src={textItemPointIcon} className="hidden lg:block mr-2" />
                            <div className="flex flex-col semibold-26 text-gray90">
                                <div className="my-1.5 uppercase">
                                    We want to make AR technologies part of everyday life
                                </div>
                                <span className="medium-20 my-1.5">
                                    allowing people to utilize blockchain technology and manage digital assets as NFTs.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-2 flex flex-col items-center w-full h-full relative mt-16 lg:mt-0">
                    <div className="relative flex h-full max-w-xl">
                        <img src={bulb} className="object-contain h-full max-h-[80dvh] lg:max-h-[50dvh]" />
                        <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center">
                            <img src={logo} className="" />
                        </div>
                    </div>
                </div>
            </div>
            <SectionFooter allFooter={false} />
        </div>
    );
};

export { OurVisionSection };
