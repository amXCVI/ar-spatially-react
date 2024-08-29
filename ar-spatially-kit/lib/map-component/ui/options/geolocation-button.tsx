import LoaderComponent from "@ar-kit/lib/loader-component";

import iconMapGeolocation from "@ar-kit/assets/icons/icon-map-geolocation.svg";

import { ButtonsContainer, GeoButton } from "./map-options.style";

interface GeolocationButtonProps {
    setCenter: (e: google.maps.LatLngLiteral) => void;
    loading?: boolean;
}

export const GeolocationButton = ({ setCenter, loading }: GeolocationButtonProps) => {
    const getGeolocation = () => {
        navigator.geolocation.getCurrentPosition(function (position) {
            setCenter({ lat: position.coords.latitude, lng: position.coords.longitude });
        });
    };

    return (
        <ButtonsContainer className="geolocation-button">
            <GeoButton onClick={getGeolocation}>
                {loading ? (
                    <LoaderComponent style={{ transform: "scale(.35)", position: "absolute" }} />
                ) : (
                    <img src={iconMapGeolocation} />
                )}
            </GeoButton>
        </ButtonsContainer>
    );
};
