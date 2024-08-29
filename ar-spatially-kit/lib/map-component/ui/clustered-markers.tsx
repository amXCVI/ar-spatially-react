import { MarkerInterface } from "@ar-kit/shared/types/nft-types";
import { Feature, FeatureCollection, GeoJsonProperties, Point } from "geojson";
import { useCallback } from "react";
import Supercluster, { ClusterProperties, PointFeature } from "supercluster";

import { useSuperclusterHook } from "../model";
import { FeaturesClusterMarker } from "./cluster";
import { FeatureMarker } from "./marker";

type ClusteredMarkersProps = {
    markersList: FeatureCollection<Point, MarkerInterface>;
    setNumClusters?: (n: number) => void;
    setInfowindowData?: (
        data: {
            anchor: google.maps.marker.AdvancedMarkerElement;
            features: Feature<Point>[];
        } | null,
    ) => void;
    onClickMarker?: (markerId: string) => void;
};

const superclusterOptions: Supercluster.Options<GeoJsonProperties, ClusterProperties> = {
    extent: 256,
    radius: 80,
    maxZoom: 20,
};

export const ClusteredMarkers = ({ markersList, onClickMarker }: ClusteredMarkersProps) => {
    const { clusters, getLeaves } = useSuperclusterHook<MarkerInterface>(markersList, superclusterOptions);

    const handleClusterClick = useCallback(
        (marker: google.maps.marker.AdvancedMarkerElement, clusterId: number) => {
            const leaves = getLeaves(clusterId);

            console.log("********", leaves, marker);

            // setInfowindowData({ anchor: marker, features: leaves });
        },
        [getLeaves],
    );

    const handleMarkerClick = useCallback(
        (marker: google.maps.marker.AdvancedMarkerElement, featureId: string) => {
            // const feature = clusters.find((feat) => feat.id === featureId) as Feature<Point>;

            if (onClickMarker) {
                onClickMarker(featureId);
            }
        },
        [onClickMarker],
    );

    return clusters.map((feature) => {
        const [lng, lat] = feature.geometry.coordinates;

        try {
            const clusterProperties = feature.properties as ClusterProperties;
            const isCluster: boolean = clusterProperties.cluster;

            const leaves = getLeaves(clusterProperties.cluster_id);

            if (isCluster) {
                return (
                    <FeaturesClusterMarker
                        key={feature.id}
                        clusterId={clusterProperties.cluster_id}
                        position={{ lat, lng }}
                        size={clusterProperties.point_count}
                        sizeAsText={String(clusterProperties.point_count_abbreviated)}
                        onMarkerClick={handleClusterClick}
                        leaves={leaves}
                    />
                );
            } else {
                throw "";
            }
        } catch (error) {
            return (
                <FeatureMarker
                    key={feature.id}
                    featureId={feature.id as string}
                    marker={feature as PointFeature<MarkerInterface>}
                    position={{ lat, lng }}
                    onMarkerClick={handleMarkerClick}
                />
            );
        }
    });
};
