import { MarkerInterface } from "@ar-kit/shared/types/nft-types";
import { MapProps as DefaultMapProps, Map as RGCMap, useApiIsLoaded } from "@vis.gl/react-google-maps";
import { FeatureCollection, Point } from "geojson";

import googleMapStyles from "../resources/map_style.json";
import { ClusteredMarkers } from "./clustered-markers";
import { GeolocationButton } from "./options/geolocation-button";
import { MapOptionsContainer } from "./options/map-options.style";
import { SelectedMapTypeButton } from "./options/map-type-button";
import { ZoomButton } from "./options/zoom-button";

interface MapProps {
    center: google.maps.LatLngLiteral;
    zoom: number;
    loadingMap?: boolean;
    onChangeMapZoom: (zoom: number) => void;
    onChangeMapCenter: (e: google.maps.LatLngLiteral) => void;
    mapTypes: { name: string; mapTypeId: string }[];
    selectedMapTypeId: string;
    onSelectMapType: (e: string) => void;
    markersList: FeatureCollection<Point, MarkerInterface>;
    onClickMarker?: (markerId: string) => void;
    mapId?: string;
}

const Map = ({
    center,
    zoom,
    loadingMap,
    onChangeMapZoom,
    onChangeMapCenter,
    mapTypes,
    selectedMapTypeId,
    onSelectMapType,
    markersList,
    onClickMarker,
    mapId,
}: MapProps) => {
    const apiIsLoaded = useApiIsLoaded();

    if (!apiIsLoaded) {
        return <div />;
    }
    return (
        <>
            <RGCMap
                styles={googleMapStyles}
                mapTypeId={selectedMapTypeId}
                disableDefaultUI={true}
                //
                defaultZoom={zoom}
                zoom={zoom}
                onZoomChanged={(ev) => onChangeMapZoom(ev.detail.zoom)}
                //
                defaultCenter={center}
                center={center}
                onCenterChanged={(ev) => onChangeMapCenter(ev.detail.center)}
                //
                reuseMaps={true}
                mapId={mapId}
                minZoom={3}
                backgroundColor={"black"}
                gestureHandling={"greedy"}
            >
                <ClusteredMarkers
                    markersList={markersList}
                    onClickMarker={onClickMarker}
                    // setNumClusters={setNumClusters}
                    // setInfowindowData={setInfowindowData}
                />
            </RGCMap>
            <MapOptionsContainer className="map-options">
                <SelectedMapTypeButton
                    mapTypes={mapTypes}
                    selectedMapTypeId={selectedMapTypeId}
                    onSelectMapType={onSelectMapType}
                />
                <ZoomButton zoom={zoom} onChangeMapZoom={onChangeMapZoom} />
                <GeolocationButton setCenter={onChangeMapCenter} loading={loadingMap} />
            </MapOptionsContainer>
        </>
    );
};

const DefaultMap = (props: React.PropsWithChildren<DefaultMapProps>) => {
    return <RGCMap {...props} styles={googleMapStyles} />;
};

export { DefaultMap };

export default Map;
