// import Spline from "@splinetool/react-spline";
import { DefaultButton } from "@/shared/ui/buttons";

import appStoreButton from "/images/landing/get-started-section/app-store-button.svg";
import playMarketButton from "/images/landing/get-started-section/play-market-button.svg";
import headerCrosses from "/images/landing/our-vision-section/header-crosses.svg";
import headerDots from "/images/landing/our-vision-section/header-points.svg";
import textParagraphPoint from "/images/landing/our-vision-section/paragraph-point.svg";
import textItemPointIcon from "/images/landing/start-section/text-item-point.svg";

import bulb from "/images/landing/our-vision-section/bulb.webp";

const OurVisionSection = () => {
    return (
        <div
            // className="
            //     xl:bg-[url(/images/landing/start-section/bg-image.svg)]
            //     bg-cover bg-no-repeat bg-center rounded-[40px]
            //     h-full xl:min-h-[calc(100dvh-2.5rem)]
            //     flex flex-col justify-between
            //     px-4 mx-auto container"
            className="
                xl:bg-[url(/images/landing/start-section/bg-image.svg)]
                bg-cover bg-no-repeat bg-center
                h-full xl:min-h-[100dvh]
                flex flex-col justify-between
                "
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
                    className="md:col-span-3 flex flex-col justify-center gap-4
                               text-center md:text-left max-w-prose md:max-w-full"
                >
                    <div className="flex gap-6">
                        <h1 className="h1-90-600 bg-our-vision-secton-text-gradient bg-clip-text text-transparent">
                            OUR
                        </h1>
                        <h1 className="h1-90-600 bg-our-vision-secton-text-gradient bg-clip-text text-transparent">
                            Vision
                        </h1>
                    </div>

                    <Paragraph
                        title="We are bringing together AR application developers and AR artists"
                        text="to create a unified AR space that provides a new method of communication between physical businesses and users."
                    />

                    <Paragraph
                        className="md:ml-20"
                        title="We link AR objects with the real world"
                        text="using geolocation technologies and apply blockchain technology to secure this connection and ensure fair and transparent circulation of AR content. "
                    />

                    <Paragraph
                        title="We aim to make AR and blockchain technologies a part of everyday life."
                        text="We are creating a unique ecosystem that unites all applications, making it accessible for both users and businesses through our app. Our Playground ensures seamless integration, simplifying the process for everyone involved."
                    />

                    <div className="flex gap-2 md:gap-5 mx-auto">
                        <a href={import.meta.env.VITE_APP_NFTST_APPSTORE_URL}>
                            <DefaultButton className="bg-none !py-3">
                                <img src={appStoreButton} />
                            </DefaultButton>
                        </a>
                        <a href={import.meta.env.VITE_APP_NFTST_PLAYMARKET_URL}>
                            <DefaultButton className="bg-none !py-3">
                                <img src={playMarketButton} />
                            </DefaultButton>
                        </a>
                    </div>
                </div>

                <div className="col-span-1 md:col-span-3 flex flex-col items-center w-full">
                    <div className="relative flex max-w-[50vw] lg:max-w-xl">
                        {/* <Spline
                            scene="https://prod.spline.design/iNtH9gSjzq69JwJ5/scene.splinecode"
                            // style={{ width: "150%", height: "160%" }}
                            className="h-full max-h-[80dvh] lg:max-h-[50dvh]"
                            // className="object-contain h-full max-h-[80dvh] lg:max-h-[50dvh]"
                        /> */}
                        <img src={bulb} className="object-contain h-full max-h-[80dvh] lg:max-h-[50dvh]" />
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

const Paragraph = ({ title, text, className }: { title: string; text: string; className?: string }) => {
    return (
        <div className={`flex items-start gap-2 sm:ml-auto text-gray70 ${className}`}>
            <img src={textItemPointIcon} className="hidden md:block" />
            <div className="flex flex-col gap-2">
                <div className="flex flex-col manrope-semibold-20 text-black mt-2">{title}</div>
                <div className="flex gap-2 items-start md:ml-10">
                    <img src={textParagraphPoint} />
                    <span className="manrope-regular-16">{text}</span>
                </div>
            </div>
        </div>
    );
};

export { OurVisionSection };
