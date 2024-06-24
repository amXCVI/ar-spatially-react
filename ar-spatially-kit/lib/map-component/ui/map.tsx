import GoogleMapReact from "google-map-react";
import googleMapStyles from "../resources/map_style.json";
import { MapContainer } from "../resources/map.style";
import { MapOptionsContainer } from "./options/map-options.style";
import { ZoomButton } from "./options/zoom-button";
import { GeolocationButton } from "./options/geolocation-button";
import { SelectedMapTypeButton } from "./options/map-type-button";
import googleMapReact from "google-map-react";
import { MarkerInterface } from "@ar-kit/shared/types/nft-types";
import { useMarkerControlHook } from "../model";
import Cluster from "./cluster";
import Marker from "./marker";
import { useRef } from "react";

interface MapProps {
    googleMapReactProps: GoogleMapReact.Props;
    loadingMap?: boolean;
    onChangeMapZoom: (zoom: number) => void;
    onChangeMapCenter: (e: googleMapReact.Coords) => void;
    mapTypes: { name: string; mapTypeId: string }[];
    selectedMapTypeId: string;
    onSelectMapType: (e: string) => void;
    onChange: (e: googleMapReact.ChangeEventValue) => void;
    nftList?: MarkerInterface[];
    bounds?: [number, number, number, number] | [number, number, number, number, number, number];
    mapRef: any;

    onClickMarker: (markerId: string) => void;
}

const Map = ({
    googleMapReactProps,
    loadingMap,
    onChangeMapZoom,
    // onChangeMapCenter,
    mapTypes,
    selectedMapTypeId,
    onSelectMapType,
    onChange,
    nftList = [],
    bounds,
    mapRef,
    onClickMarker,
}: MapProps) => {
    const aimRef = useRef();

    const { clusters, supercluster } = useMarkerControlHook({
        nftList,
        zoom: googleMapReactProps.zoom ?? 10,
        bounds: bounds as [number, number, number, number] | [number, number, number, number, number, number],
    });

    const onChangeMapCenter = (e: googleMapReact.Coords) => {
        mapRef.current.setCenter(e);
    };

    return (
        <MapContainer className="g-map__ar-components-kit">
            <GoogleMapReact
                {...googleMapReactProps}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map }) => {
                    mapRef.current = map;
                }}
                options={{
                    styles: googleMapStyles,
                    scaleControl: false,
                    zoomControl: false,
                    mapTypeId: selectedMapTypeId,
                    clickableIcons: false,
                    gestureHandling: "greedy",
                    fullscreenControl: false,
                    disableDefaultUI: true,
                    ...googleMapReactProps.options,
                }}
                onChange={onChange}
            >
                {clusters.map((cluster, index) => {
                    const [longitude, latitude] = cluster.geometry.coordinates;
                    const { cluster: isCluster, point_count: pointCount } = cluster.properties;

                    if (isCluster && supercluster) {
                        const clusterLeavs = supercluster?.getLeaves(Number(cluster.id));

                        return (
                            <Cluster
                                key={`cluster-${cluster.id}-${index}`}
                                lat={latitude}
                                lng={longitude}
                                clusterLeavs={clusterLeavs}
                                cluster={cluster}
                                pointCount={pointCount}
                                zoom={googleMapReactProps.zoom}
                                mapRef={mapRef}
                                aimRef={aimRef}
                                onChangeMapZoom={onChangeMapZoom}
                                onChangeMapCenter={onChangeMapCenter}
                            />
                        );
                    } else {
                        return (
                            <Marker
                                key={`crime-${cluster.properties.crimeId}`}
                                lat={latitude}
                                lng={longitude}
                                handleClickNft={onClickMarker}
                                cluster={cluster}
                            />
                        );
                    }
                })}
            </GoogleMapReact>

            {/* <NftAim ref={aimRef} style={{ opacity: isNftAimState ? "1" : "0" }}>
                <VerticalLine />
                <HorisontalLine />
                <NftAimPoint />
            </NftAim> */}

            <MapOptionsContainer className="map-options">
                <SelectedMapTypeButton
                    mapTypes={mapTypes}
                    selectedMapTypeId={selectedMapTypeId}
                    onSelectMapType={onSelectMapType}
                />
                <ZoomButton zoom={googleMapReactProps.zoom} onChangeMapZoom={onChangeMapZoom} />
                <GeolocationButton setCenter={onChangeMapCenter} loading={loadingMap} />
            </MapOptionsContainer>

            {/* {isAuth ? (
                <AddNftButtonContainer>
                    <Button
                        icon={<AddNftButtonIcon />}
                        text={t("btn_map_add_nft")}
                        style={{ border: "none", fontWeight: 400 }}
                        onClick={handleAddNft}
                    />
                </AddNftButtonContainer>
            ) : (
                <div />
            )} */}

            {/* <MapLoader onClick={handleClickMapLoader} /> */}

            {/* <Info /> */}
        </MapContainer>
    );
};

export default Map;
