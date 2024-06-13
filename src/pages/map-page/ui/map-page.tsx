import { MapComponent } from "ar-components-kit";

import useMapHook from "../model";

const MapPage = () => {
    const { onChangeCoords } = useMapHook();

    return (
        <div style={{ width: "100vw", height: "100dvh" }}>
            <MapComponent
                googleMapReact={{
                    bootstrapURLKeys: { key: import.meta.env.VITE_APP_GOOGLE_MAP_API_KEY, libraries: ["places"] },
                    defaultCenter: {
                        lat: 55.753544,
                        lng: 37.621202,
                    },
                    defaultZoom: 10,
                }}
                onChangeCoords={onChangeCoords}
            />
        </div>
    );
};

export default MapPage;
