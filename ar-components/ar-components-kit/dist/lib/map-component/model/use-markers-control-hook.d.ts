import { MarkerInterface } from '../../../shared/types/nft-types';

declare const useMarkerControlHook: ({ bounds, nftList, zoom, }: {
    nftList: MarkerInterface[];
    bounds: [
        number,
        number,
        number,
        number
    ] | [
        number,
        number,
        number,
        number,
        number,
        number
    ];
    zoom: number;
}) => {
    clusters: any[];
    supercluster: any;
};
export default useMarkerControlHook;
