export interface LayerInterface {
    description: string;
    iconId?: string;
    id: string;
    ownerId: string;
    status?: LayerStatus;
    title: string;
}

export enum LayerStatus {
    ACTIVE = "ACTIVE",
    NOT_ACTIVE = "NOT_ACTIVE",
}
