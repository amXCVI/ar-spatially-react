import { MapComponent } from "@ar-kit/lib";

import MapHeader from "@/features/map-header";

import useMapHook from "../model";

const MapPage = () => {
    const { onChangeCoords, bounds, nftList, onClickMarker, googpeMapApiKey } = useMapHook();

    return (
        <div style={{ width: "100vw", height: "100dvh" }}>
            <MapHeader />

            <MapComponent
                googleMapReact={{
                    bootstrapURLKeys: { key: googpeMapApiKey, libraries: ["places"] },
                    defaultCenter: {
                        lat: 55.753544,
                        lng: 37.621202,
                    },
                    defaultZoom: 10,
                }}
                bounds={bounds}
                onChangeCoords={onChangeCoords}
                onClickMarker={onClickMarker}
                nftList={nftList}
            />
        </div>
    );
};

export default MapPage;
