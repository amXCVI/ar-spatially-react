export interface AppInterface {
    id: string;
    title: string;
    iconSrc?: string;
    default: boolean;
    isActive: boolean;
    openApp: () => void;
}
