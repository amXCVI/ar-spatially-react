import { MarkerInterface } from "@ar-kit/shared/types/nft-types";
import { APIProvider } from "@vis.gl/react-google-maps";
import { Ref, forwardRef, useImperativeHandle } from "react";

import useMapControlHook from "../model";
import Map from "./map";

interface MapComponentProps {
    loadingMap?: boolean;
    onChangeCoords?: (e: { center?: google.maps.LatLngLiteral; zoom?: number }) => void;
    nftList?: MarkerInterface[];
    onClickMarker: (markerId: string) => void;
    googleApiKey: string;
    mapId?: string;
}
export interface MapRefType {
    setMapCenter: (e: {
        zoom?: number;
        center?: {
            lat: number;
            lng: number;
        };
    }) => void;
}

const MapComponent = forwardRef((props: MapComponentProps, ref: Ref<MapRefType>) => {
    const {
        onChangeMapZoom,
        onChangeMapCenter,
        zoom,
        mapTypes,
        selectedMapTypeId,
        onSelectMapType,
        center,
        setMapCenter,
    } = useMapControlHook({
        onChangeCoords: props.onChangeCoords,
    });

    useImperativeHandle(ref, () => ({ setMapCenter }));

    return (
        <APIProvider apiKey={props.googleApiKey}>
            <Map
                center={center}
                zoom={zoom}
                loadingMap={props.loadingMap}
                onChangeMapZoom={onChangeMapZoom}
                onChangeMapCenter={onChangeMapCenter}
                mapTypes={mapTypes}
                selectedMapTypeId={selectedMapTypeId}
                onSelectMapType={onSelectMapType}
                markersList={{
                    type: "FeatureCollection",
                    features:
                        props.nftList?.map((item) => {
                            return {
                                type: "Feature",
                                id: item.id,
                                geometry: {
                                    type: "Point",
                                    coordinates: [item.lng, item.lat],
                                },
                                properties: {
                                    ...item,
                                },
                            };
                        }) ?? [],
                }}
                onClickMarker={props.onClickMarker}
                mapId={props.mapId}
            />
        </APIProvider>
    );
});

export default MapComponent;
