import googleMapReact from "google-map-react";
import { useRef, useState } from "react";

const localStorageMapOptionsZoomKey = "localStorageMapOptionsZoomKey";
const localStorageMapOptionsCenterKey = "localStorageMapOptionsCenterKey";

const useMapControlHook = ({
    defaultZoom,
    btn_map_change_scheme,
    btn_map_change_satellite,
    btn_map_change_hybrid,
    defaultCenter,
    onChangeCoords,
}: {
    defaultZoom?: number;
    defaultCenter?: googleMapReact.Coords;
    btn_map_change_scheme?: string;
    btn_map_change_satellite?: string;
    btn_map_change_hybrid?: string;
    onChangeCoords?: (e: googleMapReact.ChangeEventValue) => void;
}) => {
    const mapRef = useRef(null);
    const [zoom, setZoom] = useState<number>(
        JSON.parse(localStorage.getItem(localStorageMapOptionsZoomKey) ?? "0") || defaultZoom || 10
    );

    const [center, setCenter] = useState<googleMapReact.Coords>(
        JSON.parse(localStorage.getItem(localStorageMapOptionsCenterKey) ?? "0") ||
            defaultCenter || { lat: 55.753544, lng: 37.621202 }
    );

    const mapTypes = [
        {
            name: btn_map_change_scheme ?? "roadmap",
            mapTypeId: "roadmap",
        },
        {
            name: btn_map_change_satellite ?? "satellite",
            mapTypeId: "satellite",
        },
        {
            name: btn_map_change_hybrid ?? "hybrid",
            mapTypeId: "hybrid",
        },
    ];

    const [selectedMapTypeId, setSelectedMapTypeId] = useState<string>("roadmap");

    const onChangeMapZoom = (e: number) => {
        setZoom(e);
        localStorage.setItem(localStorageMapOptionsZoomKey, JSON.stringify(e));
    };

    const onChangeMapCenter = (e: googleMapReact.Coords) => {
        setCenter(e);
        localStorage.setItem(localStorageMapOptionsCenterKey, JSON.stringify(e));
    };

    const onSelectMapType = (e: string) => {
        setSelectedMapTypeId(e);
    };

    const onChange = (e: googleMapReact.ChangeEventValue) => {
        setCenter(e.center);
        localStorage.setItem(localStorageMapOptionsCenterKey, JSON.stringify(e.center));

        setZoom(e.zoom);
        localStorage.setItem(localStorageMapOptionsZoomKey, JSON.stringify(e.zoom));

        if (onChangeCoords) {
            onChangeCoords(e);
        }
    };

    return {
        zoom,
        onChangeMapZoom,
        onChangeMapCenter,
        mapTypes,
        selectedMapTypeId,
        onSelectMapType,
        center,
        onChange,
        mapRef,
    };
};

export default useMapControlHook;
