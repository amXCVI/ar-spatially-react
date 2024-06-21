import { MarkerInterface } from '../../../shared/types/nft-types';
import { default as GoogleMapReact } from 'google-map-react';

interface MapComponentProps {
    googleMapReact: GoogleMapReact.Props;
    loadingMap?: boolean;
    onChangeCoords?: (e: googleMapReact.ChangeEventValue) => void;
    nftList?: MarkerInterface[];
    bounds?: [number, number, number, number] | [number, number, number, number, number, number];
    onClickMarker: (markerId: string) => void;
}
declare const MapComponent: (props: MapComponentProps) => import("react/jsx-runtime").JSX.Element;
export default MapComponent;
