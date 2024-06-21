import { FC } from 'react';
import { MarkerInterface } from '../../../shared/types/nft-types';

type MarkerProps = {
    lat: number;
    lng: number;
    handleClickNft?: (nftId: string) => void;
    cluster: MarkerInterface;
};
declare const Marker: FC<MarkerProps>;
export default Marker;
