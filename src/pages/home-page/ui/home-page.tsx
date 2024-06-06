import Header from "@/features/header";
import SectionFooter from "@/features/section-footer";
import { SectionLayout } from "@/shared/ui/layouts";

import iconOnPhone from "/images/landing/start-section/icon-on-phone.svg";
import leftArrow from "/images/landing/start-section/left-arrow.svg";
import textItemPointIcon from "/images/landing/start-section/text-item-point.svg";

import phone from "/images/landing/start-section/phone.png";

const HomePage = () => {
    return (
        <SectionLayout className="">
            <div
                className=" bg-[url(/images/landing/start-section/bg-image.svg)] 
                            bg-cover bg-no-repeat bg-center lg:rounded-[40px]
                            flex flex-col justify-between
                            -m-5 lg:m-0 p-5 lg:p-0"
            >
                <Header />

                <div className="container mx-auto flex flex-col items-center lg:flex-row py-10 lg:p-y-24">
                    <div className="flex flex-col w-full">
                        <div className="flex flex-col items-center mx-auto max-w-80 lg:max-w-full w-2/3 lg:w-5/6">
                            <h1 className="h1-90-600 text-gray90 mr-auto hidden lg:block">OUR</h1>
                            <h1 className="t24-700 text-gray90 mr-auto block lg:hidden">OUR</h1>
                            <h1 className="h1-90-600 text-gray90 mr-auto lg:hidden">Innovative </h1>
                            <h1 className="h1-90-600 text-gray90 ml-auto">Solution</h1>
                        </div>

                        <div className="flex lg:hidden flex-col w-full gap-4 text-gray90 max-w-prose mx-auto mt-10 mb-16">
                            <span className="medium-16">BUSINESS ADVANCEMENT IN AR SPACE</span>
                            <span>
                                A coordinate system that enables the integration of AR with the real world. Find
                                products and services right in your line of sight.
                            </span>
                            <span className="medium-16">REAL-WORLD INTERACTION</span>
                            <span>
                                We create technology that works seamlessly across different types of businesses,
                                bringing various solutions to life
                            </span>
                        </div>

                        <div className="hidden lg:flex flex-col w-full gap-9 mt-1">
                            <div className="flex justify-start items-start">
                                <img src={textItemPointIcon} className="mr-2" />
                                <div className="flex flex-col semibold-26 text-gray70">
                                    <div className="my-1.5">
                                        AGGREGATOR OF <span className="bold-26 text-gray90"> AR APPS</span>
                                    </div>
                                    <span className="my-1.5">FOR REAL BUSINESSES AND USERS.</span>
                                </div>
                            </div>

                            <div className="flex justify-start items-start ml-auto">
                                <img src={textItemPointIcon} className="mr-2" />
                                <div className="flex flex-col semibold-26 text-gray70">
                                    <div className="my-1.5">
                                        <span className="bold-26 text-gray90">AR CONTENT</span>TIED TO REAL LOCATION
                                    </div>
                                    <span className="my-1.5">ON THE GLOBAL MAP.</span>
                                </div>
                            </div>

                            <div className="flex justify-start items-start mx-auto">
                                <img src={textItemPointIcon} className="mr-2" />
                                <div className="flex flex-col semibold-26 text-gray70">
                                    <div className="my-1.5">
                                        <span className="bold-26 text-gray90">AR-NFT</span> IS A SPATIAL GEOLOCATION
                                        TOKEN
                                    </div>
                                    <span className="my-1.5">
                                        THAT PROVIDE RIGHTS FOR<span className="bold-26 text-gray90"> AR CONTENT.</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center w-full">
                        <div
                            className="bg-[url(/images/landing/start-section/bulb.png)]
                            bg-contain bg-no-repeat bg-top
                            flex flex-col items-center w-full
                        "
                        >
                            <div className="relative">
                                <img src={phone} />
                                <div className="absolute -top-10 lg:top-12 -left-24 border border-white30 rounded-full p-11 backdrop-blur">
                                    <img src={iconOnPhone} />
                                </div>
                            </div>

                            <div className="flex justify-around items-center mt-8">
                                <div className="cursor-pointer">
                                    <img src={leftArrow} />
                                </div>
                                <span className="h2-34-700 text-gray90 ml-9 mr-2.5">01</span>
                                <span className="light-12 text-gray70 mr-9">/03</span>
                                <div className="cursor-pointer">
                                    <img src={leftArrow} className="rotate-180" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <SectionFooter />
            </div>
        </SectionLayout>
    );
};

export default HomePage;
