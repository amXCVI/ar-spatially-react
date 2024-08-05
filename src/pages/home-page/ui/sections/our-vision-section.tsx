import Spline from "@splinetool/react-spline";

import { DefaultButton } from "@/shared/ui/buttons";
import { TextP, Title } from "@/shared/ui/text-components";

import headerCrosses from "/images/landing/our-vision-section/header-crosses.svg";
import headerDots from "/images/landing/our-vision-section/header-points.svg";

import bulb from "/images/landing/our-vision-section/bulb.webp";

const OurVisionSection = () => {
    return (
        <div
            className="
                xl:bg-[url(/images/landing/start-section/bg-image.svg)]
                bg-cover bg-no-repeat bg-center rounded-[40px]
                h-full xl:min-h-[calc(100dvh-2.5rem)]
                flex flex-col justify-between
                px-4 mx-auto container"
        >
            <div className="hidden xl:flex relative mx-auto justify-between items-end pt-5">
                <div className="flex flex-col poppuns-80 leading-10 whitespace-nowrap">
                    <img src={headerDots} className="w-8 ml-8 mb-8" />
                    <span className="text-white30 blur-[3.5px]">At the forefront of transforming</span>
                    <span className="text-white50 blur-[2px] mx-auto">human interaction</span>
                    <span className="text-grey70 ml-16">with augmented reality </span>
                </div>

                <img src={headerCrosses} className="absolute right-0 -bottom-20" />
            </div>

            <div
                className="container mx-auto 
                        flex flex-col items-center 
                        md:grid md:grid-cols-6
                        gap-6 md:p-y-24"
            >
                <div
                    className="md:col-span-3 flex flex-col justify-center gap-4 md:mx-auto xl:ml-40
                               text-center md:text-left max-w-prose md:max-w-md"
                >
                    <Title title="OUR Vision" />

                    <TextP className="text-gray90">
                        We are bringing together AR application developers and AR artists to create a unified AR space
                        that provides a new method of communication between physical businesses and users.
                    </TextP>
                    <TextP className="text-gray90">
                        We link AR objects with the real world using geolocation technologies and apply blockchain
                        technology to secure this connection and ensure fair and transparent circulation of AR content.
                        We aim to make AR and blockchain technologies a part of everyday life.
                    </TextP>

                    <div className="">
                        <DefaultButton className="bg-white text-gray90">Docs</DefaultButton>
                    </div>
                </div>

                <div className="col-span-1 md:col-span-3 flex flex-col items-center w-full">
                    <div className="relative flex max-w-[50vw] lg:max-w-xl">
                        <Spline
                            scene="https://prod.spline.design/iNtH9gSjzq69JwJ5/scene.splinecode"
                            // style={{ width: "150%", height: "160%" }}
                            className="h-full max-h-[80dvh] lg:max-h-[50dvh]"
                            // className="object-contain h-full max-h-[80dvh] lg:max-h-[50dvh]"
                        />
                        {/* <img src={bulb} className="object-contain h-full max-h-[80dvh] lg:max-h-[50dvh]" /> */}
                        {/* <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center">
                            <img src={logo} className="" />
                        </div> */}
                    </div>
                </div>
            </div>
            <div />
        </div>
    );
};

export { OurVisionSection };
