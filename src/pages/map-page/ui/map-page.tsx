import { MapComponent } from "@ar-kit/lib";

import MapHeader from "@/features/map-header";
import { NftItem } from "@/features/nft-item";

import useMapHook from "../model";

const MapPage = () => {
    const {
        onChangeCoords,
        nftList,
        onClickMarker,
        googpeMapApiKey,
        selectedMarker,
        onCloseViewer,
        onChangeMapCenter,
        mapComponentRef,
    } = useMapHook();

    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <MapHeader onChangeMapCenter={onChangeMapCenter} />

            <MapComponent
                onChangeCoords={onChangeCoords}
                onClickMarker={onClickMarker}
                nftList={nftList}
                ref={mapComponentRef}
                googleApiKey={googpeMapApiKey}
                mapId={import.meta.env.VITE_APP_GOOGLE_MAP_ID}
            />

            <NftItem selectedMarker={selectedMarker} onCloseViewer={onCloseViewer} />
        </div>
    );
};

export default MapPage;
