import { Footer } from "@/features/footer";
import Header from "@/features/header";

import { useDescription, useTitle } from "@/shared/lib/use-page-meta-hooks";
import { DarkLayout } from "@/shared/ui/layouts";

import Arrow from "../assets/arrow.svg?react";
import HomeIcon from "../assets/home-icon.svg?react";

import "./worlds.css";

import { useSpheresHook } from "../model";
import { worlds } from "../model/data";
import { WorldInfo } from "./world-info";

const EventPage = () => {
    useTitle("AR Spatially - Event");

    useDescription(
        "Attend dynamic AR events like the Quantum Choice ‘Butterfly Event,’ unlocking unique 3D experiences and collectible AR objects around iconic location.",
    );

    const {
        spheresImageRef,
        handleRotate,
        selectedSector,
        rotation,
        centerVisible,
        handleCenter,
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd,
        handleRotateToSector,
    } = useSpheresHook();

    return (
        <DarkLayout className="flex flex-col justify-between">
            <Header white />

            <div
                className="container mx-auto h-[70vh] w-full px-6
                           border-4 border-raisin-black rounded-[60px]
                           relative overflow-hidden"
            >
                <div
                    ref={spheresImageRef}
                    onClick={handleRotate}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    className={`absolute aspect-square
                                h-[120vh]
                                left-1/2 ${centerVisible ? "bottom-[20vh]" : "-bottom-1/3 md:-bottom-1/4"}
                                transform -translate-x-1/2 translate-y-1/2 
                                lg:-translate-x-[80%] lg:translate-y-1/3
                                xl:-translate-x-3/4
                                duration-500
                               `}
                    // style={{
                    //     background:
                    //         "conic-gradient(#ff6347 0deg 36deg,#4682b4 36deg 72deg,#3cb371 72deg 108deg,#ffd700 108deg 144deg,#ff69b4 144deg 180deg,#8a2be2 180deg 216deg,#ff4500 216deg 252deg,#32cd32 252deg 288deg,#add8e6 288deg 324deg,#ffa500 324deg 360deg )",
                    // }}
                >
                    <div
                        style={{
                            backgroundImage: `url(/event-page/all-spheres-base.webp)`,
                            transform: `rotate(${rotation}deg)`,
                        }}
                        className="h-full w-full bg-no-repeat bg-cover duration-700"
                    >
                        {worlds.map((world, index) => (
                            <div
                                key={index}
                                className="circle-image w-40 aspect-square"
                                style={{
                                    "--i": index - 5,
                                    ...world.imagePosition,
                                }}
                            >
                                <div
                                    className="w-full h-full bg-no-repeat bg-cover  duration-700"
                                    style={{
                                        backgroundImage: `url(${world.imageSrc})`,
                                        transform: `rotate(${-rotation}deg)`,
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* <div
                    ref={spheresImageRef}
                    onClick={handleRotate}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    className={`absolute aspect-square
                                h-[120vh] md:h-[125vh]
                                left-1/2 ${centerVisible ? "bottom-[20vh]" : "-bottom-1/3 md:-bottom-1/4"}
                                transform -translate-x-1/2 translate-y-1/2 
                                lg:-translate-x-[80%] lg:translate-y-1/3
                                xl:-translate-x-3/4
                                duration-500
                               `}
                    // style={{
                    //     background:
                    //         "conic-gradient(#ff6347 0deg 36deg,#4682b4 36deg 72deg,#3cb371 72deg 108deg,#ffd700 108deg 144deg,#ff69b4 144deg 180deg,#8a2be2 180deg 216deg,#ff4500 216deg 252deg,#32cd32 252deg 288deg,#add8e6 288deg 324deg,#ffa500 324deg 360deg )",
                    // }}
                >
                    <div
                        style={{
                            backgroundImage: `url(${spheres})`,
                            transform: `rotate(${rotation}deg)`,
                        }}
                        className="h-full w-full bg-no-repeat bg-cover duration-700"
                    />
                </div> */}

                {!centerVisible && (
                    <WorldInfo
                        selectedSector={selectedSector}
                        delta={window.innerWidth > 1024 ? 3 : 2}
                        className="absolute container px-6
                               top-6 right-0 left-0
                               lg:left-1/2 lg:transform xl:translate-x-[10vh] 
                               lg:max-w-screen-3sm xl:max-w-md
                               lg:top-[10vh] xl:top-[14vh]"
                    />
                )}

                <div
                    className="absolute lg:hidden p-2 cursor-pointer
                               top-1/2 transform -translate-y-1/2
                               left-2 2sm:left-10
                               animate-pulse
                              "
                    onClick={() => handleRotateToSector(1)}
                >
                    <Arrow />
                </div>

                <div
                    className="absolute lg:hidden p-2 cursor-pointer
                               top-1/2 transform -translate-y-1/2
                               right-2 2sm:right-10
                               animate-pulse
                              "
                    onClick={() => handleRotateToSector(-1)}
                >
                    <Arrow className="transform rotate-180" />
                </div>

                <div
                    className="lg:hidden absolute cursor-pointer left-1/2 transform -translate-x-1/2 bottom-0 animate-pulse"
                    onClick={handleCenter}
                >
                    <HomeIcon />
                </div>
            </div>

            <Footer />
        </DarkLayout>
    );
};

export { EventPage };
