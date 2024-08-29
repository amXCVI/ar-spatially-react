import LoaderComponent from "@ar-kit/lib/loader-component";
import { MarkerInterface } from "@ar-kit/shared/types/nft-types";
import { AdvancedMarker, useAdvancedMarkerRef } from "@vis.gl/react-google-maps";
import { useCallback } from "react";
import { PointFeature } from "supercluster";

import iconVectorPath from "@ar-kit/assets/icons/icon-marker-vector.svg";

import {
    ClusterCircleOne,
    ClusterCircleThree,
    ClusterCircleTwo,
    ClusterContainer,
    ClusterCounts,
    ClusterPoint,
    ClusterSubContainer,
    MarkerArrow,
    PreviewMarkerImg,
} from "./cluster.style";

type TreeClusterMarkerProps = {
    clusterId: number;
    onMarkerClick?: (marker: google.maps.marker.AdvancedMarkerElement, clusterId: number) => void;
    position: google.maps.LatLngLiteral;
    size: number;
    sizeAsText: string;
    leaves: PointFeature<MarkerInterface>[];
};

export const FeaturesClusterMarker = ({ position, size, onMarkerClick, clusterId, leaves }: TreeClusterMarkerProps) => {
    const [markerRef, marker] = useAdvancedMarkerRef();
    const handleClick = useCallback(
        () => onMarkerClick && onMarkerClick(marker!, clusterId),
        [onMarkerClick, marker, clusterId],
    );
    const markerSize = Math.floor(48 + Math.sqrt(size) * 2);
    return (
        <AdvancedMarker
            ref={markerRef}
            position={position}
            zIndex={size}
            onClick={handleClick}
            className={"marker cluster"}
            style={{ width: markerSize, height: markerSize }}
        >
            <ClusterContainer className="cluster-marker">
                {leaves.map((clusterLeaf, index: number) =>
                    index < 3 || leaves.length <= 3 ? (
                        <ClusterSubContainer
                            key={`cluster-${clusterLeaf.id}-crime-${clusterLeaf.properties.id}-${index}`}
                        >
                            <LoaderComponent
                                style={{
                                    transform: "scale(0.2)",
                                    position: "absolute",
                                    left: `${index * 38 - 16}px`,
                                    top: "-20px",
                                    zIndex: "-1",
                                }}
                            />
                            <PreviewMarkerImg
                                src={`${clusterLeaf.properties.previewUrl ?? clusterLeaf.properties.imageUrl}`}
                                // isMonochrome={clusterLeaf.publishId ? false : true}
                                onError={({ currentTarget }) => {
                                    currentTarget.onerror = null; // prevents looping
                                    currentTarget.src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
                                }}
                            />
                        </ClusterSubContainer>
                    ) : (
                        <div key={`${clusterLeaf.id}-crime-${clusterLeaf.properties.id}-${index}`} />
                    ),
                )}
                {leaves.length <= 3 ? <></> : <ClusterCounts>+{size - 3}</ClusterCounts>}
            </ClusterContainer>
            <MarkerArrow src={iconVectorPath} bottom="8px" />
            <ClusterCircleThree>
                <ClusterCircleTwo width={leaves.length > 2 ? 184 : 120}>
                    <ClusterCircleOne>
                        <ClusterPoint />
                    </ClusterCircleOne>
                </ClusterCircleTwo>
            </ClusterCircleThree>
        </AdvancedMarker>
    );
};
