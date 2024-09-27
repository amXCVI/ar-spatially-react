export interface ButterflyInterface {
    id: string;
    name: string;
    description: string[];
    imageSrc: string;
}

export interface WorldSphereInterface {
    id: string;
    worldName: string;
    description: string[];
    imageSrc: string;
    butterflyes: ButterflyInterface[];
}
