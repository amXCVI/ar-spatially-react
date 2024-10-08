export interface ObjectInterface {
    anchorList: AnchorInterface[];
    description: string;
    id: string;
    location: { lat: number; lng: number; alt: number };
    modelHash?: string;
    modelId: string;
    ownerId: string;
    previewId: string;
    size: { width: number; height: number };
    status: MarkerStatusEnum;
    title: string;
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

export enum MarkerStatusEnum {
    NOT_PUBLISHED = "NOT_PUBLISHED",
}
