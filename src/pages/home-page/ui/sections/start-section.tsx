import Header from "@/features/header";
import SectionFooter from "@/features/section-footer";

import leftArrow from "/images/landing/start-section/left-arrow.svg";
import textItemPointIcon from "/images/landing/start-section/text-item-point.svg";

import phone from "/images/landing/start-section/phone.png";

const StartSection = () => {
    return (
        <div
            className="bg-[url(/images/landing/start-section/bg-image.svg)] 
                bg-cover bg-no-repeat bg-center lg:rounded-[40px]                            
                -m-5 lg:m-0 p-5 lg:p-0
                h-full lg:max-h-full min-h-[calc(100dvh-2.5rem)] 
                flex flex-col justify-between"
        >
            <Header />

            <div className="container mx-auto flex flex-col items-center h-full lg:max-h-full lg:flex-row py-10 lg:p-y-24">
                <div className="flex flex-col items-start w-full">
                    <div className="flex flex-col items-center">
                        <h1 className="h1-90-600 text-gray90 mr-auto">OUR</h1>
                        <h1 className="h1-90-600 text-gray90 ml-24">Solution</h1>
                    </div>

                    <div className="flex flex-col lg:max-w-prose w-full gap-4 items-start lg:gap-9 mt-6">
                        <div className="flex justify-start items-start">
                            <img src={textItemPointIcon} className="hidden lg:block mr-2" />
                            <div className="flex flex-col regular-24 text-gray70">
                                <div className="my-1.5">
                                    AGGREGATOR OF <span className="bold-24 text-gray90"> AR APPS</span>
                                </div>
                                <span className="my-1.5">FOR REAL BUSINESSES AND USERS.</span>
                            </div>
                        </div>

                        <div className="flex justify-start items-start lg:ml-auto">
                            <img src={textItemPointIcon} className="hidden lg:block mr-2" />
                            <div className="flex flex-col regular-24 text-gray70">
                                <div className="my-1.5">
                                    <span className="bold-24 text-gray90">AR CONTENT </span>TIED TO REAL LOCATION
                                </div>
                                <span className="my-1.5">ON THE GLOBAL MAP.</span>
                            </div>
                        </div>

                        <div className="flex justify-start items-start lg:mx-auto">
                            <img src={textItemPointIcon} className="hidden lg:block mr-2" />
                            <div className="flex flex-col regular-24 text-gray70">
                                <div className="my-1.5">
                                    <span className="bold-24 text-gray90">AR-NFT</span> IS A SPATIAL GEOLOCATION TOKEN
                                </div>
                                <span className="my-1.5">
                                    THAT PROVIDE RIGHTS FOR<span className="bold-24 text-gray90"> AR CONTENT.</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center w-full h-full relative mt-16 lg:mt-0">
                    <img
                        src="/images/landing/start-section/bulb.png"
                        className="absolute top-0 animate-spin-slow [scale:1.5] md:[scale:1] max-h-[80dvh] lg:max-h-[50dvh] object-contain"
                    />

                    <div className="relative h-full">
                        <img src={phone} className="object-contain h-full max-h-[80dvh] lg:max-h-[50dvh]" />
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
