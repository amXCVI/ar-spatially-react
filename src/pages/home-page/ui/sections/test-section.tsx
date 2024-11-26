const TestSection = () => {
    return (
        <div className="flex flex-col gap-10">
            <div className="h-dvh aspect-square">
                <model-viewer
                    src={"/3d-objects/penrose_triangle.glb"}
                    id={"modelId2"}
                    loading="lazy"
                    camera-controls
                    touch-action="pan-y"
                    auto-rotate={true}
                    auto-rotate-delay="0"
                    rotation-per-second="5deg"
                    autoplay
                    data-ar
                    ar-status="not-presenting"
                    disable-zoom={true}
                    disable-tap={true}
                    style={{ width: "100%", height: "100%", minHeight: "50vh" }}
                    skybox-height="1.5m"
                    shadow-intensity="2"
                    exposure="0.5"
                />
            </div>
            <div className="h-dvh aspect-square">
                <model-viewer
                    src={"/3d-objects/rtj_before_and_beyond.glb"}
                    id={"modelId3"}
                    loading="lazy"
                    camera-controls
                    touch-action="pan-y"
                    auto-rotate={true}
                    auto-rotate-delay="0"
                    rotation-per-second="5deg"
                    autoplay
                    data-ar
                    ar-status="not-presenting"
                    disable-zoom={true}
                    disable-tap={true}
                    style={{ width: "100%", height: "100%", minHeight: "50vh" }}
                    skybox-height="1.5m"
                    shadow-intensity="2"
                    exposure="0.5"
                />
            </div>
            <div className="h-dvh aspect-square">
                <model-viewer
                    src={"/3d-objects/test_running_abstract_geometry_animation_loop.glb"}
                    id={"modelId4"}
                    loading="lazy"
                    camera-controls
                    touch-action="pan-y"
                    auto-rotate={true}
                    auto-rotate-delay="0"
                    rotation-per-second="5deg"
                    autoplay
                    data-ar
                    ar-status="not-presenting"
                    disable-zoom={true}
                    disable-tap={true}
                    style={{ width: "100%", height: "100%", minHeight: "50vh" }}
                    skybox-height="1.5m"
                    shadow-intensity="2"
                    exposure="0.5"
                />
            </div>
        </div>
    );
};

export { TestSection };
