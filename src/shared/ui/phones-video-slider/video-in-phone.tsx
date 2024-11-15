import { ReactNode, useEffect, useLayoutEffect, useRef } from "react";

const VideoInPhone = ({
    phoneSrc,
    videoSrc,
    posterSrc,
    videoSourcesArray,
    className,
    phoneImgClassName,
}: {
    phoneSrc: string;
    videoSrc: string;
    videoSourcesArray?: ReactNode[];
    posterSrc?: string;
    className?: string;
    phoneImgClassName?: string;
}) => {
    const phoneRef = useRef<null | HTMLImageElement>(null);
    const videoContainerRef = useRef<null | HTMLDivElement>(null);
    const videoRef = useRef<null | HTMLVideoElement>(null);

    useLayoutEffect(() => {
        setInterval(() => {
            if (phoneRef.current && videoContainerRef.current) {
                videoContainerRef.current.style.width = `${phoneRef.current.offsetWidth * 0.94}px`;
                videoContainerRef.current.style.height = `${phoneRef.current.offsetHeight * 0.98}px`;
                videoContainerRef.current.style.borderRadius = `${phoneRef.current.height / 14}px`;
            }
        }, 500);
    }, []);

    useEffect(() => {
        if (videoRef.current) {
            const promise = videoRef.current.play();

            if (promise !== undefined) {
                promise
                    .then(() => {
                        // Autoplay started!
                    })
                    .catch(() => {
                        if (videoRef.current) {
                            // Autoplay not allowed!
                            // Mute video and try to play again
                            videoRef.current.muted = true;

                            // Show something in the UI that the video is muted
                        }
                    });
            }
        }
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

            <div id="video-rect-container" className="absolute overflow-hidden w-0 h-0" ref={videoContainerRef}>
                <video
                    className="h-full w-full object-cover"
                    playsInline
                    autoPlay
                    muted
                    preload="true"
                    loop
                    src={videoSourcesArray ? undefined : videoSrc}
                    ref={videoRef}
                    poster={posterSrc}
                >
                    {videoSourcesArray && videoSourcesArray.map((item) => item)}
                </video>
            </div>
        </div>
    );
};

export { VideoInPhone };
