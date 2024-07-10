import Header from "@/features/header";
import SectionFooter from "@/features/section-footer";

import textItemPointIcon from "/images/landing/start-section/text-item-point.svg";

import phone from "/images/landing/start-section/phone.png";

const StartSection = () => {
    return (
        <div
            className="bg-[url(/images/landing/start-section/bg-image.svg)] 
                bg-cover bg-no-repeat bg-center rounded-[40px]                            
                h-full min-h-[calc(100dvh-2.5rem)] 
                flex flex-col justify-between
                p-4 mx-auto container"
        >
            <Header />
            <div className="h-16" />

            <div className="container mx-auto flex flex-col items-center h-full xl:max-h-full xl:flex-row py-10 xl:py-0">
                <div className="flex flex-col items-end w-full">
                    <div className="flex xl:flex-col items-center mx-auto mt-20 xl:mt-0">
                        <h1 className="h1-90-600 text-white mr-auto">OUR</h1>
                        <h1 className="h1-90-600 text-white ml-12 xl:ml-24">Solution</h1>
                    </div>

                    <div className="flex flex-col md:max-w-3xl lg:max-w-5xl w-full gap-4 items-start xl:gap-9 mt-6 mx-auto">
                        <div className="flex justify-start items-start">
                            <img src={textItemPointIcon} className="hidden md:block mr-2" />
                            <div className="flex flex-col medium-20 text-gray70">
                                <div className="my-1.5">
                                    AGGREGATOR OF <span className="bold-20 text-gray90"> AR APPS</span>
                                </div>
                                <span className="my-1.5">FOR REAL BUSINESSES AND USERS.</span>
                            </div>
                        </div>

                        <div className="flex justify-start items-start sm:mx-auto">
                            <img src={textItemPointIcon} className="hidden md:block mr-2" />
                            <div className="flex flex-col medium-20 text-gray70">
                                <div className="my-1.5">
                                    <span className="bold-20 text-gray90">AR CONTENT </span>TIED TO REAL LOCATION
                                </div>
                                <span className="my-1.5">ON THE GLOBAL MAP.</span>
                            </div>
                        </div>

                        <div className="flex justify-start items-start sm:ml-auto">
                            <img src={textItemPointIcon} className="hidden md:block mr-2" />
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

                <div className="flex flex-col items-center w-full h-full mt-16 xl:mt-0">
                    <div className="relative h-full">
                        <div className="absolute h-full -left-1/2 -right-1/2 z-0 xl:scale-110">
                            <img src="/images/landing/start-section/bulb.png" />
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
    );
};

export { StartSection };
