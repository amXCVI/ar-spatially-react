import { MarkerInterface } from "@ar-kit/shared/types/nft-types";
import GoogleMapReact from "google-map-react";
import googleMapReact from "google-map-react";

import useMapControlHook from "../model";
import Map from "./map";

interface MapComponentProps {
    googleMapReact: GoogleMapReact.Props;
    loadingMap?: boolean;
    onChangeCoords?: (e: googleMapReact.ChangeEventValue) => void;
    nftList?: MarkerInterface[];
    bounds?: [number, number, number, number] | [number, number, number, number, number, number];
    onClickMarker: (markerId: string) => void;
}
const MapComponent = (props: MapComponentProps) => {
    const {
        onChangeMapZoom,
        onChangeMapCenter,
        zoom,
        mapTypes,
        selectedMapTypeId,
        onSelectMapType,
        center,
        onChange,
        mapRef,
    } = useMapControlHook({
        defaultZoom: props.googleMapReact.zoom ?? props.googleMapReact.defaultZoom,
        defaultCenter: props.googleMapReact.defaultCenter ?? props.googleMapReact.defaultCenter,
        onChangeCoords: props.onChangeCoords,
    });

    return (
        <Map
            googleMapReactProps={{
                ...props.googleMapReact,
                zoom: props.googleMapReact.zoom ?? zoom,
                center: props.googleMapReact.center ?? center,
            }}
            //
            loadingMap={props.loadingMap}
            //
            onChangeMapZoom={onChangeMapZoom}
            onChangeMapCenter={onChangeMapCenter}
            mapTypes={mapTypes}
            selectedMapTypeId={selectedMapTypeId}
            onSelectMapType={onSelectMapType}
            onChange={onChange}
            nftList={props.nftList}
            bounds={props.bounds}
            mapRef={mapRef}
            onClickMarker={props.onClickMarker}
        />
    );
};

export default MapComponent;
