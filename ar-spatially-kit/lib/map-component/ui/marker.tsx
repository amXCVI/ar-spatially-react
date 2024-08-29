import Loading from "@ar-kit/lib/loader-component/Loading";
import { MarkerInterface } from "@ar-kit/shared/types/nft-types";
import { AdvancedMarker, useAdvancedMarkerRef } from "@vis.gl/react-google-maps";
import { useState } from "react";
import { useCallback } from "react";
import { PointFeature } from "supercluster";

import IconVectorPath from "@ar-kit/assets/icons/icon-marker-vector.svg";

import { MarkerArrow } from "./cluster.style";
import { MarkerContainer, MarkerImg, MarkerName, MarkerOwnerAvatar } from "./marker.style";

const getAvatar = (cluster: MarkerInterface) => {
    if (cluster.ownerAvatarUrl) {
        return <MarkerOwnerAvatar fileUrl={cluster.ownerAvatarUrl} />;
    } else {
        return <></>;
    }
};

type TreeMarkerProps = {
    position: google.maps.LatLngLiteral;
    featureId: string;
    marker: PointFeature<MarkerInterface>;
    onMarkerClick?: (marker: google.maps.marker.AdvancedMarkerElement, featureId: string) => void;
};

export const FeatureMarker = ({ position, marker, featureId, onMarkerClick }: TreeMarkerProps) => {
    const [loadingImg, setLoadingImg] = useState(true);

    const handleImageLoaded = () => {
        setLoadingImg(false);
    };

    const [markerRef, gMarker] = useAdvancedMarkerRef();
    const handleClick = useCallback(
        () => onMarkerClick && onMarkerClick(gMarker!, featureId),
        [onMarkerClick, gMarker, featureId],
    );

    return (
        <AdvancedMarker ref={markerRef} position={position} onClick={handleClick} className={"marker feature"}>
            <MarkerContainer>
                {loadingImg && (
                    <Loading
                        style={{
                            transform: "scale(0.3)",
                            position: "absolute",
                            left: "0",
                            top: "-10px",
                            zIndex: 1,
                        }}
                    />
                )}
                <MarkerImg
                    src={`${marker.properties.previewUrl ?? marker.properties.imageUrl}`}
                    // isMonochrome={!marker.publishId}
                    onLoad={handleImageLoaded}
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
                    }}
                />
                {getAvatar(marker.properties)}
                {marker.properties.name ? <MarkerName>{marker.properties.name}</MarkerName> : <div />}
            </MarkerContainer>
            <MarkerArrow src={IconVectorPath} bottom="-8px" />
        </AdvancedMarker>
    );
};
