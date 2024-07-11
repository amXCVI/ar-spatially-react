import { ReactNode, useLayoutEffect, useRef, useState } from "react";

import leftArrow from "/images/product/left-arrow.svg";

interface PhoneSliderProps {
    bgElement?: ReactNode;
    videos: string[];
    className?: string;
    height?: string;
}
const PhoneSlider = ({ bgElement, videos, className, height }: PhoneSliderProps) => {
    const [selectedSlideId, setSelectedSlideId] = useState<number>(0);

    const phoneRef = useRef<null | HTMLImageElement>(null);
    const videoRef = useRef<null | HTMLDivElement>(null);

    useLayoutEffect(() => {
        setTimeout(() => {
            if (phoneRef.current && videoRef.current) {
                videoRef.current.style.width = `${phoneRef.current.offsetWidth * 0.94}px`;
                videoRef.current.style.height = `${phoneRef.current.offsetHeight * 0.98}px`;
                videoRef.current.style.borderRadius = `${phoneRef.current.height / 14}px`;
            }
        }, 100);
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

                <img
                    src="/images/product/phone.svg"
                    className={`z-10 max-h-[inherit] w-fit`}
                    id="phone-border-img"
                    ref={phoneRef}
                />

                <div id="video-rect-container" className="absolute overflow-hidden w-0 h-0" ref={videoRef}>
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
