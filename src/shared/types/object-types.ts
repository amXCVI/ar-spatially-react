import { MarkerStatusEnum } from "./marker-types";

export interface ObjectInterface {
    anchorList: AnchorInterface[];
    description: string;
    id: string;
    location: { lat: number; lng: number; alt: number };
    modelHash?: string;
    modelId: string;
    ownerId: string;
    ownerNickname?: string;
    previewId: string;
    size: { width: number; height: number };
    status: MarkerStatusEnum;
    title: string;
    countComments?: number;
    userFavorite: boolean;
    userLike: boolean;
    likes: number;
}

export interface AnchorInterface {
    id: string;
    imageId: string;
    position: { qx: number; qy: number; qz: number };
    rotation: { qx: number; qy: number; qz: number; qw: number };
    size: { width: number; height: number };
    type: AnchotTypeEnum;
}

export enum AnchotTypeEnum {
    IMAGE = "IMAGE",
    GEO = "GEO",
}

export enum ObjectsPageModes {
    LIBRARY = "Objects library",
    MY_OBJECTS = "My objects",
    FAVORITES = "Favorite",
}
