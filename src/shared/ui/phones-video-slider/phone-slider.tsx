import { ReactNode, useEffect, useState } from "react";

import leftArrow from "/images/product/left-arrow.svg";

interface PhoneSliderProps {
    bgElement?: ReactNode;
    videos: string[];
    className?: string;
    height?: string;
}
const PhoneSlider = ({ bgElement, videos, className, height }: PhoneSliderProps) => {
    const [selectedSlideId, setSelectedSlideId] = useState<number>(0);

    useEffect(() => {
        const phone = document.getElementById("phone-border-img");
        const videoContainer = document.getElementById("video-rect-container");

        console.log(phone);
        if (phone && videoContainer) {
            const clientRect = phone.getBoundingClientRect();

            videoContainer.style.width = `calc(${clientRect.width}px - 1rem)`;
            videoContainer.style.height = `calc(${clientRect.height}px - 1rem)`;
        }
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

                <img src="/images/product/phone.svg" className={`z-10 max-h-[inherit] w-fit`} id="phone-border-img" />

                <div id="video-rect-container" className="absolute rounded-[4vh] overflow-hidden w-60 h-full">
                    <video
                        className="h-full w-full object-cover"
                        src={videos[selectedSlideId]}
                        playsInline
                        autoPlay
                        muted
                        preload="auto"
                        onEnded={() => {
                            handleNextSlide();
                        }}
                        onError={(e) => console.log("!!!!", e)}
                    />
                </div>
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
