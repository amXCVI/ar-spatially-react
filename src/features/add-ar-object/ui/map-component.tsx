import { DefaultMap } from "@ar-kit/lib/map-component";
import { AdvancedMarker, MapMouseEvent, useMap } from "@vis.gl/react-google-maps";
import { useEffect, useRef, useState } from "react";

import { worlds } from "../model/data";

const MapComponent = ({
    previewSrc,
    objectLocation,
    onChangeObjectLocation,
}: {
    previewSrc?: string;
    objectLocation: {
        lat: number;
        lng: number;
    } | null;
    onChangeObjectLocation: (e: { lat: number; lng: number }) => void;
}) => {
    const polygonsRef = useRef<google.maps.Polygon[]>([]);

    const [cursorPosition, setCursorPosition] = useState<{ lat: number; lng: number } | null>(null);

    const handleMouseMove = (event: MapMouseEvent) => {
        if (!objectLocation) {
            setCursorPosition(event.detail.latLng);
        }
    };
    const [mapZoom, setMapZoom] = useState<number>(11);
    const map = useMap();

    useEffect(() => {
        if (map) {
            worlds.forEach((world) => {
                const polygon = new google.maps.Polygon({
                    paths: world.polygon,
                    strokeColor: world.worldPolygonColor,
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                    fillColor: world.worldPolygonColor,
                    fillOpacity: 0.35,
                });

                polygonsRef.current.push(polygon);

                polygon.setMap(map);

                polygon.addListener(
                    "click",
                    (e: { domEvent: MouseEvent; latLng: { lat: () => number; lng: () => number } }) => {
                        onChangeObjectLocation({ lat: e.latLng.lat(), lng: e.latLng.lng() });
                    },
                );

                polygon.addListener("mouseover", () => {
                    polygon.setOptions({ fillColor: "#00FF00", strokeColor: "#00FF00" }); // Изменение цвета при наведении
                    const marker = document.getElementById(`${world.worldId}Marker`);
                    if (marker) {
                        marker.classList.replace("opacity-50", "opacity-100");
                        marker.classList.replace("scale-100", "scale-150");
                    }
                });

                polygon.addListener("mouseout", () => {
                    polygon.setOptions({ fillColor: world.worldPolygonColor, strokeColor: world.worldPolygonColor }); // Возврат к изначальному цвету
                    const marker = document.getElementById(`${world.worldId}Marker`);
                    if (marker) {
                        marker.classList.replace("opacity-100", "opacity-50");
                        marker.classList.replace("scale-150", "scale-100");
                    }
                });

                polygon.addListener("mousemove", (e: { latLng: { lat: () => number; lng: () => number } }) => {
                    if (!objectLocation) {
                        setCursorPosition({ lat: e.latLng.lat(), lng: e.latLng.lng() });
                    }
                });
            });
        }

        return () => {
            // Удаляем полигоны при размонтировании
            polygonsRef.current.forEach((polygon) => {
                polygon.setMap(null);
            });
            polygonsRef.current = []; // очищаем массив
        };
    }, [map, objectLocation, onChangeObjectLocation]);

    // Размер картинки Мира зависит от масштаба карты
    const markerSize = mapZoom * mapZoom;

    return (
        <DefaultMap
            onMousemove={handleMouseMove}
            defaultCenter={{ lat: 25.1132415, lng: 55.2233329 }}
            mapId={import.meta.env.VITE_APP_GOOGLE_MAP_ID}
            className="g-map-polygons h-dvh md:max-h-[60vh] w-full"
            disableDefaultUI={true}
            reuseMaps={true}
            minZoom={3}
            defaultZoom={11}
            onZoomChanged={(e) => setMapZoom(e.detail.zoom)}
            backgroundColor={"black"}
            gestureHandling={"greedy"}
        >
            {worlds.map((world) => {
                return (
                    <AdvancedMarker
                        position={world.polygonCenterCoords}
                        title={world.worldName}
                        className={`aspect-square`}
                        key={world.worldId + "WorldMarker"}
                        style={{ width: `${markerSize}px` }}
                    >
                        <img
                            src={world.worldImgSrc}
                            className="w-full h-full duration-500 opacity-50 scale-100 z-0"
                            id={`${world.worldId}Marker`}
                        />
                    </AdvancedMarker>
                );
            })}

            <AdvancedMarker position={objectLocation ?? cursorPosition}>
                <img src={previewSrc} className="rounded-xl !max-w-24 !max-h-24 z-50" />
            </AdvancedMarker>
        </DefaultMap>
    );
};

export { MapComponent };
