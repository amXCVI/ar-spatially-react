import { FC } from 'react';
import { default as googleMapReact } from 'google-map-react';
import { MarkerInterface } from '../../../shared/types/nft-types';

type ClusterProps = {
    cluster: any;
    clusterLeavs: {
        description: string;
        geometry: {
            type: string;
            coordinates: [number, number];
        };
        id: string;
        isHide: boolean;
        properties: MarkerInterface;
    }[];
    pointCount: number;
    lat: number;
    lng: number;
    zoom?: number;
    onChangeMapZoom: (zoom: number) => void;
    onChangeMapCenter: (e: googleMapReact.Coords) => void;
    mapRef: any;
    aimRef: any;
};
declare const Cluster: FC<ClusterProps>;
export default Cluster;
