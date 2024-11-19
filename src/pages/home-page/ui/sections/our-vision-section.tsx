import { Link } from "react-router-dom";

import { routes } from "@/shared/config";

// import { DefaultButton } from "@/shared/ui/buttons";
// import appStoreButton from "/images/landing/get-started-section/app-store-button.svg";
// import playMarketButton from "/images/landing/get-started-section/play-market-button.svg";
import textParagraphPoint from "/images/landing/our-vision-section/paragraph-point.svg";
import textItemPointIcon from "/images/landing/start-section/text-item-point.svg";

const OurVisionSection = () => {
    return (
        <section
            className="bg-[url(/images/landing/our-vision-section/glass-effect.webp)]
                       bg-no-repeat bg-contain bg-center
                       pb-12"
        >
            <div
                className="flex flex-col lg:flex-row w-full items-center 
                            container mx-auto px-6
                            "
            >
                <div
                    className="flex flex-col justify-center
                               w-full
                               pt-6 gap-10 lg:gap-16 xl:gap-20
                               lg:max-w-[40%] lg:mr-auto"
                >
                    <h2
                        className="flex flex-col lg:flex-row lg:gap-6 justify-center items-center flex-wrap mr-auto ml-auto lg:ml-0 lg:flex-nowrap
                                    h1-90-600 leading-none text-[65px] 2sm:text-[86px] lg:text-[96px] lg:font-[96px]"
                    >
                        <span className="bg-our-vision-secton-text-gradient bg-clip-text text-transparent">OUR</span>
                        <span className="bg-our-vision-secton-text-gradient bg-clip-text text-transparent">Vision</span>
                    </h2>

                    <div className="flex flex-col gap-6 items-start">
                        <Paragraph
                            title="We are bringing together AR application developers and AR artists"
                            text="to create a unified AR space that provides a new method of communication between physical businesses and users."
                        />

                        <Paragraph
                            className="lg:ml-10 xl:ml-20"
                            title="We link AR objects with the real world"
                            text="using geolocation technologies and apply blockchain technology to secure this connection and ensure fair and transparent circulation of AR content. "
                        />

                        <Paragraph
                            title="We aim to make AR and blockchain technologies a part of everyday life."
                            text="We are creating a unique ecosystem that unites all applications, making it accessible for both users and businesses through our app. Our Playground ensures seamless integration, simplifying the process for everyone involved."
                        />
                    </div>

                    {/* <div className="flex gap-2 md:gap-5 mx-auto mt-6">
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
                    </div> */}
                </div>

                <div className="col-span-1 md:col-span-3 flex flex-col items-center w-full h-min">
                    <model-viewer
                        src={"/3d-objects/DadecaedrDark.glb"}
                        id={"modelId"}
                        loading="lazy"
                        camera-controls
                        touch-action="pan-y"
                        auto-rotate={true}
                        auto-rotate-delay="0"
                        rotation-per-second="20deg"
                        autoplay
                        data-ar
                        ar-status="not-presenting"
                        disable-zoom={true}
                        disable-tap={true}
                        style={{ width: "100%", height: "100%", minHeight: "50vh" }}
                    />

                    <Link to={routes.event}>
                        <div className="absolute left-0 right-0 bottom-0 h-16 cursor-pointer"></div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

const Paragraph = ({ title, text, className }: { title: string; text: string; className?: string }) => {
    return (
        <div className={`flex items-start gap-2 justify-center text-gray70 ${className}`}>
            <div className="flex flex-col gap-2">
                <div className="flex items-center">
                    <img src={textItemPointIcon} alt="" className="mr-2 w-8 h-8 2sm:w-11 2sm:h-11" />
                    <div className="flex flex-col manrope-semibold-22 text-black mt-2">{title}</div>
                </div>

                <div className="flex gap-2 items-start ml-10 lg:ml-16">
                    <img src={textParagraphPoint} alt="" className="mt-2" />
                    <span className="manrope-regular-16">{text}</span>
                </div>
            </div>
        </div>
    );
};

export { OurVisionSection };
