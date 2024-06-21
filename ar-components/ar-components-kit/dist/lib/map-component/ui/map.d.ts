import { default as GoogleMapReact } from 'google-map-react';
import { MarkerInterface } from '../../../shared/types/nft-types';

interface MapProps {
    googleMapReactProps: GoogleMapReact.Props;
    loadingMap?: boolean;
    onChangeMapZoom: (zoom: number) => void;
    onChangeMapCenter: (e: googleMapReact.Coords) => void;
    mapTypes: {
        name: string;
        mapTypeId: string;
    }[];
    selectedMapTypeId: string;
    onSelectMapType: (e: string) => void;
    onChange: (e: googleMapReact.ChangeEventValue) => void;
    nftList?: MarkerInterface[];
    bounds?: [number, number, number, number] | [number, number, number, number, number, number];
    mapRef: any;
    onClickMarker: (markerId: string) => void;
}
declare const Map: ({ googleMapReactProps, loadingMap, onChangeMapZoom, mapTypes, selectedMapTypeId, onSelectMapType, onChange, nftList, bounds, mapRef, onClickMarker, }: MapProps) => import("react/jsx-runtime").JSX.Element;
export default Map;
