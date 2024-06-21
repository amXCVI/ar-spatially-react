import { default as googleMapReact } from 'google-map-react';

declare const useMapControlHook: ({ defaultZoom, btn_map_change_scheme, btn_map_change_satellite, btn_map_change_hybrid, defaultCenter, onChangeCoords, }: {
    defaultZoom?: number;
    defaultCenter?: googleMapReact.Coords;
    btn_map_change_scheme?: string;
    btn_map_change_satellite?: string;
    btn_map_change_hybrid?: string;
    onChangeCoords?: (e: googleMapReact.ChangeEventValue) => void;
}) => {
    zoom: number;
    onChangeMapZoom: (e: number) => void;
    onChangeMapCenter: (e: googleMapReact.Coords) => void;
    mapTypes: {
        name: string;
        mapTypeId: string;
    }[];
    selectedMapTypeId: string;
    onSelectMapType: (e: string) => void;
    center: googleMapReact.Coords;
    onChange: (e: googleMapReact.ChangeEventValue) => void;
    mapRef: import('react').MutableRefObject<null>;
};
export default useMapControlHook;
