export type NftType = {
    attributes: string;
    blockchain: string;
    description: string;
    fileIpfs: string;
    fileUrl: string;
    lat: string;
    lng: string;
    name: string;
    nftId: string;
    fileHash?: string;
    createTime?: string;
    userId?: string;
    userName?: string;
    userAvatar?: string;
    isHide?: boolean;
    publishTime?: string;
};
export interface MarkerInterface {
    description: string;
    imageUrl: string;
    previewUrl?: string;
    lat: number;
    lng: number;
    name: string;
    id: string;
    ownerAvatarUrl?: string;
    isHide?: boolean;
}
