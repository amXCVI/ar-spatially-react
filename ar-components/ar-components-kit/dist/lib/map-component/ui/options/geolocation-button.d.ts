import { default as googleMapReact } from 'google-map-react';

interface GeolocationButtonProps {
    setCenter: (e: googleMapReact.Coords) => void;
    loading?: boolean;
}
export declare const GeolocationButton: ({ setCenter, loading }: GeolocationButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
