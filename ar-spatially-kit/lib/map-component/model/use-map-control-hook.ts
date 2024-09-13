import { useRef, useState } from "react";

const localStorageMapOptionsZoomKey = "localStorageMapOptionsZoomKey";
const localStorageMapOptionsCenterKey = "localStorageMapOptionsCenterKey";
const localStorageMapTypeId = "localStorageMapTypeId";

const useMapControlHook = ({
    btn_map_change_scheme,
    btn_map_change_satellite,
    btn_map_change_hybrid,
    onChangeCoords,
}: {
    defaultZoom?: number;
    defaultCenter?: google.maps.LatLngLiteral;
    btn_map_change_scheme?: string;
    btn_map_change_satellite?: string;
    btn_map_change_hybrid?: string;
    onChangeCoords?: (e: { center?: google.maps.LatLngLiteral; zoom?: number }) => void;
}) => {
    const mapRef = useRef(null);
    const [zoom, setZoom] = useState<number>(
        JSON.parse(localStorage.getItem(localStorageMapOptionsZoomKey) ?? "0") || 10,
    );

    const [center, setCenter] = useState<google.maps.LatLngLiteral>(
        JSON.parse(localStorage.getItem(localStorageMapOptionsCenterKey) ?? "0") || { lat: 25.124342, lng: 55.154669 },
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

    const [selectedMapTypeId, setSelectedMapTypeId] = useState<string>(
        localStorage.getItem(localStorageMapTypeId) ?? "roadmap",
    );

    const onChangeMapZoom = (e: number) => {
        setZoom(e);
        localStorage.setItem(localStorageMapOptionsZoomKey, JSON.stringify(e));
        if (onChangeCoords) {
            onChangeCoords({ zoom: e });
        }
    };

    const onChangeMapCenter = (e: google.maps.LatLngLiteral) => {
        setCenter(e);
        localStorage.setItem(localStorageMapOptionsCenterKey, JSON.stringify(e));
        if (onChangeCoords) {
            onChangeCoords({ center: e });
        }
    };

    const onSelectMapType = (e: string) => {
        setSelectedMapTypeId(e);
        localStorage.setItem(localStorageMapTypeId, e);
    };

    const setMapCenter = (e: { zoom?: number; center?: { lat: number; lng: number } }) => {
        if (e.zoom) {
            setZoom(e.zoom);
        }
        if (e.center) {
            setCenter(e.center);
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
        mapRef,
        setMapCenter,
    };
};

export default useMapControlHook;
