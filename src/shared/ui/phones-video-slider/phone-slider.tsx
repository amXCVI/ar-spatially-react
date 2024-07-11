import { ReactNode, useEffect, useRef, useState } from "react";

import leftArrow from "/images/product/left-arrow.svg";

interface PhoneSliderProps {
    bgElement?: ReactNode;
    videos: string[];
    className?: string;
    height?: string;
}
const PhoneSlider = ({ bgElement, videos, className, height }: PhoneSliderProps) => {
    const [selectedSlideId, setSelectedSlideId] = useState<number>(0);
    const [phoneSize, setPhoneSize] = useState<{ width: number; height: number }>({ width: 0, height: 0 });

    useEffect(() => {
        const phone = document.getElementById("phone-border-img");
        const videoContainer = document.getElementById("video-rect-container");

        console.log(phone);
        if (phone && videoContainer) {
            const clientRect = phone.getBoundingClientRect();
            setPhoneSize({ width: clientRect.width, height: clientRect.height });

            console.log({ width: clientRect.width, height: clientRect.height });

            videoContainer.style.width = `calc(${clientRect.width}px - 1rem)`;
            videoContainer.style.height = `calc(${clientRect.height}px - 1rem)`;
        }

        // return () => {
        //     phoneSize.current = { width: 0, height: 0 };
        // };
    }, []);

    const handleNextSlide = () => {
        setSelectedSlideId((e) => {
            if (e === videos.length - 1) {
                return 0;
            } else {
                return e + 1;
            }
        });
    };

    const handlePrevSlide = () => {
        setSelectedSlideId((e) => {
            if (e === 0) {
                return videos.length - 1;
            } else {
                return e - 1;
            }
        });
    };

    return (
        <div className={className}>
            <div className="relative flex justify-center items-center h-full" style={{ maxHeight: height }}>
                {bgElement}

                {/* <Phone className={`z-10 w-full`} style={{ height: height, maxHeight: height }} /> */}

                <img
                    src="/images/product/phone.svg"
                    className={`z-10 max-h-[inherit] w-fit`}
                    id="phone-border-img"
                    //  style={{ maxHeight: height }}
                />

                <div
                    id="video-rect-container"
                    className="absolute rounded-[4vh] overflow-hidden w-60 h-full"
                    // style={{ height: `calc(${200}px-6rem)` }}
                    // style={{
                    //     height: `${phoneSize.height}px)`,
                    //     width: `${phoneSize.width}px)`,
                    // }}
                >
                    <video
                        className="h-full w-full object-cover"
                        src={videos[selectedSlideId]}
                        playsInline
                        autoPlay
                        muted
                        onEnded={() => {
                            handleNextSlide();
                        }}
                    />
                </div>

                {/* <div
                    className={`bg-[url(/images/product/phone.svg)] bg-cover bg-no-repeat bg-center overflow-hidden
                        mx-auto p-3
                        aspect-[165/343]
                        z-10 relative
                        max-w-full
                        `}
                    style={{ maxHeight: height }}
                >
                    
                </div> */}
            </div>
            <div className="relative flex justify-around items-center mt-8 mx-auto max-w-min z-10">
                <div className="cursor-pointer w-10" onClick={handlePrevSlide}>
                    <img src={leftArrow} />
                </div>
                <span className="h2-34-700 text-white ml-9 mr-2.5">
                    {(selectedSlideId + 1).toString().padStart(2, "0")}
                </span>
                <span className="light-12 text-spanish-gray mr-9">/{videos.length.toString().padStart(2, "0")}</span>
                <div className="cursor-pointer w-10" onClick={handleNextSlide}>
                    <img src={leftArrow} className="rotate-180" />
                </div>
            </div>
        </div>
    );
};

export { PhoneSlider };
