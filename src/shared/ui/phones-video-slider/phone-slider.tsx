import { ReactNode, useState } from "react";

import leftArrow from "/images/product/left-arrow.svg";

interface PhoneSliderProps {
    bgElement?: ReactNode;
    videos: string[];
    className?: string;
    height?: string;
}
const PhoneSlider = ({ bgElement, videos, className, height }: PhoneSliderProps) => {
    const [selectedSlideId, setSelectedSlideId] = useState<number>(0);

    const handleNextSlide = () => {
        setSelectedSlideId((e) => {
            console.log(e);
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
            <div className="relative">
                {bgElement}

                <div
                    className={`bg-[url(/images/product/phone.svg)] bg-cover bg-no-repeat bg-center overflow-hidden
                        mx-auto p-3
                        aspect-[165/343]
                        z-10 relative
                        max-w-full
                        `}
                    style={{ maxHeight: height }}
                >
                    <div className="h-full rounded-[4vh] overflow-hidden">
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
                </div>
            </div>
            <div className="flex justify-around items-center mt-8 mx-auto max-w-min">
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
