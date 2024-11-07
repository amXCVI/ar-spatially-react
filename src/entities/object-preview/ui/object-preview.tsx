const ObjectPreview = ({
    className,
    modelId,
    previewId,
}: {
    className?: string;
    modelId?: string;
    previewId?: string;
}) => {
    return (
        <div className={`w-full h-full ${className}`}>
            <model-viewer
                src={`${import.meta.env.VITE_APP_API_BASE_URL}gateway/file/get?fileId=${modelId}`}
                id={modelId}
                loading="lazy"
                shadow-intensity="1"
                camera-controls
                touch-action="pan-y"
                auto-rotate
                auto-rotate-delay="0"
                rotation-per-second="20deg"
                orbit-sensitivity="0.6"
                autoplay
                data-ar
                ar-status="not-presenting"
                ar-modes="webxr scene-viewer quick-look"
                poster={`${import.meta.env.VITE_APP_API_BASE_URL}gateway/file/get?fileId=${previewId}`}
                style={{ width: "100%", height: "100%" }}
            />
        </div>
    );
};

export { ObjectPreview };
