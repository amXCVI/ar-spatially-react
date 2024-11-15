import { useLayoutEffect, useRef } from "react";

const VideoInPhone = ({
    phoneSrc,
    videoSrc,
    className,
    phoneImgClassName,
}: {
    phoneSrc: string;
    videoSrc: string;
    className?: string;
    phoneImgClassName?: string;
}) => {
    const phoneRef = useRef<null | HTMLImageElement>(null);
    const videoRef = useRef<null | HTMLDivElement>(null);

    useLayoutEffect(() => {
        setInterval(() => {
            if (phoneRef.current && videoRef.current) {
                videoRef.current.style.width = `${phoneRef.current.offsetWidth * 0.94}px`;
                videoRef.current.style.height = `${phoneRef.current.offsetHeight * 0.98}px`;
                videoRef.current.style.borderRadius = `${phoneRef.current.height / 14}px`;
            }
        }, 500);
    }, []);

    return (
        <div
            className={`relative flex justify-center items-center 
                       ${className}`}
        >
            <img
                src={phoneSrc}
                alt=""
                className={`${phoneImgClassName ?? "object-contain"}`}
                id="phone-border-img"
                ref={phoneRef}
            />

            <div id="video-rect-container" className="absolute overflow-hidden w-0 h-0" ref={videoRef}>
                <video className="h-full w-full object-cover" playsInline autoPlay muted preload="true" loop>
                    <source src={videoSrc} type="video/webm" />
                </video>
            </div>
        </div>
    );
};

export { VideoInPhone };
