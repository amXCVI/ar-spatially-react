import Spline from "@splinetool/react-spline";

import { DefaultButton } from "@/shared/ui/buttons";

import appStoreButton from "/images/landing/get-started-section/app-store-button.svg";
import playMarketButton from "/images/landing/get-started-section/play-market-button.svg";
import textParagraphPoint from "/images/landing/our-vision-section/paragraph-point.svg";
// import topText from "/images/landing/our-vision-section/top-text.svg";
import textItemPointIcon from "/images/landing/start-section/text-item-point.svg";

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
                xl:bg-[url(/images/landing/our-vision-section/bg-image.webp)]
                bg-[length:auto_150vh]
                bg-no-repeat bg-top
                h-full xl:min-h-[80dvh]
                flex flex-col justify-between
                xl:-mt-6
                p-4
                
                "
        >
            {/* <div className="hidden xl:flex relative mx-auto justify-between items-end">
                <div className="flex gap-8 animate-running-line poppuns-80 leading-10 whitespace-nowrap">
                    {[1, 2, 3, 4, 5, 6].map((item) => {
                        return (
                            <span key={item + "key"} className="text-white60 blur-[2.5px]">
                                At the forefront of transforming human interaction with augmented reality
                            </span>
                        );
                    })}
                </div>

                <img src={headerCrosses} className="absolute right-0 -bottom-20" />
            </div> */}

            <div
                className="container mx-auto 
                        flex flex-col items-center 
                        
                        bg-[url(/images/landing/our-vision-section/glass-effect.webp)]
                        bg-no-repeat bg-contain bg-center
                        pb-20
                        -mb-10
                        "
            >
                {/* <img src={topText} className="hidden lg:block mr-auto" /> */}

                <div className="flex flex-col lg:flex-row w-full items-center">
                    <div
                        className="flex flex-col justify-center
                                   w-full
                                   pt-6 gap-10 lg:gap-20
                                   lg:max-w-prose lg:mr-auto"
                    >
                        <div className="flex flex-col lg:flex-row gap-6 justify-center items-center flex-wrap mr-auto ml-auto lg:ml-0 lg:flex-nowrap">
                            <h1 className="h1-90-600 bg-our-vision-secton-text-gradient bg-clip-text text-transparent">
                                OUR
                            </h1>
                            <h1 className="h1-90-600 bg-our-vision-secton-text-gradient bg-clip-text text-transparent">
                                Vision
                            </h1>
                        </div>

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

                        <div className="flex gap-2 md:gap-5 mx-auto mt-6">
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

                    <div className="col-span-1 md:col-span-3 flex flex-col items-center w-full h-min">
                        <div
                            className="relative flex justify-center w-full h-min
                                    scale-75 md:scale-90 lg:scale-125 xl:scale-150"
                        >
                            <Spline
                                scene="https://prod.spline.design/oMmUby6YEqG3VTjS/scene.splinecode"
                                className="!h-[400px] !xl:h-[600px] !w-[600px]"
                                // className="object-contain h-full max-h-[80dvh] lg:max-h-[50dvh]"
                            />
                            {/* <img src={bulb} className="object-contain h-full max-h-[80dvh] lg:max-h-[50dvh]" /> */}
                            {/* <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center">
                            <img src={logo} className="" />
                        </div> */}
                            {/* <Canvas>
                                <ambientLight intensity={1} />
                                <Suspense fallback={null}>
                                    <Model />
                                </Suspense>
                                <OrbitControls />
                            </Canvas> */}
                        </div>
                    </div>
                </div>
            </div>
            <div />
        </div>
    );
};

// const Model = () => {
//     const { scene } = useGLTF("/3d-objects/DodText.glb");
//     useFrame(() => (scene.rotation.y += 0.002));
//     return <primitive scale={0.95} rotate object={scene} />;
// };

const Paragraph = ({ title, text, className }: { title: string; text: string; className?: string }) => {
    return (
        <div className={`flex items-start gap-2 justify-center text-gray70 ${className}`}>
            <div className="flex flex-col gap-2">
                <div className="flex items-center">
                    <img src={textItemPointIcon} className="mr-2" />
                    <div className="flex flex-col manrope-semibold-22 text-black mt-2">{title}</div>
                </div>

                <div className="flex gap-2 items-start ml-10 lg:ml-16">
                    <img src={textParagraphPoint} />
                    <span className="manrope-regular-16">{text}</span>
                </div>
            </div>
        </div>
    );
};

export { OurVisionSection };
