import Header from "@/features/header";
import SectionFooter from "@/features/section-footer";

import leftArrow from "/images/landing/start-section/left-arrow.svg";
import textItemPointIcon from "/images/landing/start-section/text-item-point.svg";

import phone from "/images/landing/start-section/phone.png";

const StartSection = () => {
    return (
        <div
            className="bg-[url(/images/landing/start-section/bg-image.svg)] 
                bg-cover bg-no-repeat bg-center rounded-[40px]                            
                h-full min-h-[calc(100dvh-2.5rem)] 
                flex flex-col justify-between
                p-4"
        >
            <Header />
            <div className="h-16" />

            <div className="container mx-auto flex flex-col items-center h-full lg:max-h-full lg:flex-row py-10 lg:py-0">
                <div className="flex flex-col items-start w-full">
                    <div className="flex flex-col items-center">
                        <h1 className="h1-90-600 text-gray90 mr-auto">OUR</h1>
                        <h1 className="h1-90-600 text-gray90 ml-24">Solution</h1>
                    </div>

                    <div className="flex flex-col lg:max-w-prose w-full gap-4 items-start lg:gap-9 mt-6">
                        <div className="flex justify-start items-start">
                            <img src={textItemPointIcon} className="hidden lg:block mr-2" />
                            <div className="flex flex-col medium-20 text-gray70">
                                <div className="my-1.5">
                                    AGGREGATOR OF <span className="bold-20 text-gray90"> AR APPS</span>
                                </div>
                                <span className="my-1.5">FOR REAL BUSINESSES AND USERS.</span>
                            </div>
                        </div>

                        <div className="flex justify-start items-start sm:mx-auto lg:ml-auto">
                            <img src={textItemPointIcon} className="hidden lg:block mr-2" />
                            <div className="flex flex-col medium-20 text-gray70">
                                <div className="my-1.5">
                                    <span className="bold-20 text-gray90">AR CONTENT </span>TIED TO REAL LOCATION
                                </div>
                                <span className="my-1.5">ON THE GLOBAL MAP.</span>
                            </div>
                        </div>

                        <div className="flex justify-start items-start sm:ml-auto lg:mx-auto">
                            <img src={textItemPointIcon} className="hidden lg:block mr-2" />
                            <div className="flex flex-col regular-24 text-gray70">
                                <div className="medium-20 my-1.5">
                                    <span className="bold-20 text-gray90">AR-NFT</span> IS A SPATIAL GEOLOCATION TOKEN
                                </div>
                                <span className="medium-20 my-1.5">
                                    THAT PROVIDE RIGHTS FOR<span className="bold-20 text-gray90"> AR CONTENT.</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center w-full h-full mt-16 lg:mt-0">
                    <div className="relative h-full">
                        <div className="absolute h-full -left-1/2 -right-1/2 z-0">
                            <img src="/images/landing/start-section/bulb.png" />
                        </div>

                        <img
                            src={phone}
                            className="relative object-contain h-full max-h-[80dvh] lg:max-h-[50dvh] z-10"
                        />
                        {/* <div className="absolute -top-10 lg:top-5 -left-24 border border-white30 rounded-full p-8 lg:p-9 backdrop-blur">
                            <img src={iconOnPhone} />
                        </div> */}
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

            <SectionFooter />
        </div>
    );
};

export { StartSection };
