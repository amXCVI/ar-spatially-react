import headerCrosses from "/images/landing/our-vision-section/header-crosses.svg";
import headerDots from "/images/landing/our-vision-section/header-points.svg";
import logo from "/images/landing/our-vision-section/logo.svg";

import bulb from "/images/landing/our-vision-section/bulb.png";

const OurVisionSection = () => {
    return (
        <div
            className="bg-[url(/images/landing/start-section/bg-image.svg)] 
                bg-cover bg-no-repeat bg-center rounded-[40px]                            
                h-full md:min-h-[calc(100dvh-2.5rem)] 
                flex flex-col justify-between
                p-4"
        >
            <div className="hidden lg:flex relative container mx-auto justify-between items-end pt-5">
                <div className="flex flex-col poppuns-80 leading-10 whitespace-nowrap">
                    <img src={headerDots} className="w-8 ml-8 mb-8" />
                    <span className="text-white30 blur-[3.5px]">At the forefront of transforming</span>
                    <span className="text-white50 blur-[2px] mx-auto">human interaction</span>
                    <span className="text-grey70 ml-16">with augmented reality </span>
                </div>

                <img src={headerCrosses} className="absolute right-0 bottom-0" />
            </div>

            <div className="container mx-auto flex flex-col xl:grid xl:grid-cols-5 gap-16 h-full lg:max-h-full py-10 lg:p-y-24">
                <div
                    className="lg:col-span-3 flex flex-col gap-5 lg:gap-8 mx-auto 
                               max-w-prose text-center md:text-left"
                >
                    <h2 className="h2-34-700 uppercase text-gray90">OUR Vision</h2>

                    <p className="regular-16 text-gray90 mt-5">
                        We are bringing together AR application developers and AR artists to create a unified AR space
                        that provides a new method of communication between physical businesses and users.
                    </p>
                    <p className="regular-16 text-gray90">
                        We link AR objects with the real world using geolocation technologies and apply blockchain
                        technology to secure this connection and ensure fair and transparent circulation of AR content.
                        We aim to make AR and blockchain technologies a part of everyday life.
                    </p>

                    {/* <div className="flex gap-10 md:gap-24 mx-auto mt-10 lg:mt-24">
                        <DefaultButton>Road Map</DefaultButton>
                        <DefaultButton>Pricing</DefaultButton>
                    </div> */}
                </div>

                <div className="col-span-1 lg:col-span-2 flex flex-col items-center w-full">
                    <div className="relative flex max-w-[50vw] lg:max-w-xl">
                        <img src={bulb} className="object-contain h-full max-h-[80dvh] lg:max-h-[50dvh]" />
                        <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center">
                            <img src={logo} className="" />
                        </div>
                    </div>
                </div>
            </div>
            <div />
        </div>
    );
};

export { OurVisionSection };
