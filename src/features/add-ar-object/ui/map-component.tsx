import { DefaultMap } from "@ar-kit/lib/map-component";
import { MapMouseEvent, useMap, useMapsLibrary } from "@vis.gl/react-google-maps";
import { useEffect } from "react";

import "./index.css";

const polygonCoords = [
    { lat: 25.105748, lng: 55.161477 },
    { lat: 25.122003, lng: 55.1783 },
    { lat: 25.132473, lng: 55.187913 },
    { lat: 25.13763, lng: 55.188256 },
    { lat: 25.146849, lng: 55.195981 },
    { lat: 25.134817, lng: 55.214177 },
    { lat: 25.12966, lng: 55.210915 },
    { lat: 25.123722, lng: 55.202504 },
    { lat: 25.111219, lng: 55.219498 },
    { lat: 25.101997, lng: 55.212804 },
    { lat: 25.095745, lng: 55.221043 },
    { lat: 25.080894, lng: 55.207825 },
    { lat: 25.081206, lng: 55.205422 },
    { lat: 25.085115, lng: 55.196839 },
    { lat: 25.077767, lng: 55.200787 },
    { lat: 25.06823, lng: 55.192719 },
    { lat: 25.062132, lng: 55.185853 },
    { lat: 25.057158, lng: 55.175553 },
    { lat: 25.052311, lng: 55.169717 },
    { lat: 25.042615, lng: 55.16079 },
    { lat: 25.053562, lng: 55.145684 },
    { lat: 25.059347, lng: 55.141221 },
    { lat: 25.06138, lng: 55.137787 },
    { lat: 25.069198, lng: 55.136243 },
    { lat: 25.084348, lng: 55.151435 },
    { lat: 25.089108, lng: 55.146671 },
    { lat: 25.105748, lng: 55.161477 },
];

const MapComponent = () => {
    const map = useMap();

    // const geometryLibrary = useMapsLibrary("geometry");

    useEffect(() => {
        if (map) {
            const polygon = new google.maps.Polygon({
                paths: polygonCoords,
                strokeColor: "#FF0000",
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: "#FF0000",
                fillOpacity: 0.35,
            });

            polygon.setMap(map);

            polygon.addListener("click", (e: { latLng: { lat: () => number; lng: () => number } }) => {
                console.log({ lat: e.latLng.lat(), lng: e.latLng.lng() });
                alert(
                    `Coordinates clicked inside the polygon: ${JSON.stringify({ lat: e.latLng.lat(), lng: e.latLng.lng() })}`,
                );
            });
        }
    }, [map]);

    return (
        <DefaultMap
            // onChangeMapCenter={onChangeMapCenter}
            // onChangeCoords={onChangeCoords}

            // ref={mapRef}

            defaultCenter={{ lat: 25.1132415, lng: 55.2233329 }}
            mapId={import.meta.env.VITE_APP_GOOGLE_MAP_ID}
            className="g-map-polygons"
            disableDefaultUI={true}
            reuseMaps={true}
            minZoom={3}
            defaultZoom={12}
            backgroundColor={"black"}
            gestureHandling={"greedy"}
        ></DefaultMap>
    );
};

export { MapComponent };
