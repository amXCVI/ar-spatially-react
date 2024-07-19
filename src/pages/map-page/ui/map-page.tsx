import { MapComponent } from "@ar-kit/lib";

import MapHeader from "@/features/map-header";
import { NftItem } from "@/features/nft-item";

import useMapHook from "../model";

const MapPage = () => {
    const { onChangeCoords, bounds, nftList, onClickMarker, googpeMapApiKey, selectedMarker, onCloseViewer } =
        useMapHook();

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

            <NftItem selectedMarker={selectedMarker} onCloseViewer={onCloseViewer} />
        </div>
    );
};

export default MapPage;
