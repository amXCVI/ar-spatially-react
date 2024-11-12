import { APIProvider, MapComponent } from "@ar-kit/lib";

import MapHeader from "@/features/map-header";

// import { NftItem } from "@/features/nft-item";
import { useDescription, useTitle } from "@/shared/lib/use-page-meta-hooks";

import useMapHook from "../model";

const MapPage = () => {
    useTitle("AR Spatially - Map objects");

    useDescription(
        "Explore a global map of AR objects, each geolocated and ready for interaction. Discover, collect, and engage with 3D art across real-world locations.",
    );

    const {
        onChangeCoords,
        nftList,
        onClickMarker,
        googpeMapApiKey,
        // selectedMarker,
        // onCloseViewer,
        onChangeMapCenter,
        mapComponentRef,
        // updatedMarkerCallback,
        onBoundsChanged,
    } = useMapHook();

    return (
        <div style={{ width: "100vw", height: "100vh" }} className="bg-raisin-black">
            <APIProvider apiKey={googpeMapApiKey} region="EN" language="en">
                <MapHeader onChangeMapCenter={onChangeMapCenter} />

                <MapComponent
                    onChangeCoords={onChangeCoords}
                    onClickMarker={onClickMarker}
                    onBoundsChanged={onBoundsChanged}
                    nftList={nftList}
                    ref={mapComponentRef}
                    googleApiKey={googpeMapApiKey}
                    mapId={import.meta.env.VITE_APP_GOOGLE_MAP_ID}
                />

                {/* <NftItem
                    selectedMarker={selectedMarker}
                    onCloseViewer={onCloseViewer}
                    updatedMarkerCallback={updatedMarkerCallback}
                /> */}
            </APIProvider>
        </div>
    );
};

export default MapPage;
