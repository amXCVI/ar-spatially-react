import { MapComponent } from "ar-components-kit";

import useMapHook from "../model";

const MapPage = () => {
    const { onChangeCoords, bounds, nftList, onClickMarker } = useMapHook();

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
                bounds={bounds}
                onChangeCoords={onChangeCoords}
                onClickMarker={onClickMarker}
                nftList={nftList.map((nftItem) => {
                    return {
                        id: nftItem.id,
                        description: nftItem.description,
                        imageUrl: nftItem.previewId,
                        lat: nftItem.location.lat,
                        lng: nftItem.location.lng,
                        name: nftItem.title,
                        ownerAvatarUrl: nftItem.ownerId,
                        isHide: false,
                    };
                })}
            />
        </div>
    );
};

export default MapPage;
