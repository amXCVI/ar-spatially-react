import { FC } from "react";
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
import iconVectorPath from "@ar-kit/assets/icons/icon-marker-vector.svg";
// import NftViewer from "modules/NftViewer";
import LoaderComponent from "@ar-kit/lib/loader-component";
import googleMapReact from "google-map-react";
import { MarkerInterface } from "@ar-kit/shared/types/nft-types";

type ClusterProps = {
    cluster: any;
    clusterLeavs: {
        description: string;
        geometry: { type: string; coordinates: [number, number] };
        id: string;
        isHide: boolean;
        properties: MarkerInterface;
    }[];
    pointCount: number;
    lat: number;
    lng: number;
    zoom?: number;
    onChangeMapZoom: (zoom: number) => void;
    onChangeMapCenter: (e: googleMapReact.Coords) => void;
    mapRef: any;
    aimRef: any;
};

const Cluster: FC<ClusterProps> = ({
    lat,
    lng,
    cluster,
    clusterLeavs,
    pointCount,
    // mapRef,
    // aimRef,
    zoom,
    onChangeMapCenter,
    onChangeMapZoom,
}: ClusterProps) => {
    const handleClickCluster = () => {
        if (zoom) {
            onChangeMapCenter({ lat, lng });
            onChangeMapZoom(zoom + 2);
            // dispatch(NftActions.onSelectClusterOnMap(clusterLeavs));
            // dispatch(UtilsActions.openModal({ content: <NftViewer /> }));
            // dispatch(MapActions.onChangeNftAimState(true));
            // let marker = new google.maps.Marker({
            //     position: { lat: lat, lng: lng },
            //     map: mapRef.current,
            //     title: "",
            //     icon: "",
            // });
            // const overlay = new google.maps.OverlayView();
            // // eslint-disable-next-line @typescript-eslint/no-empty-function
            // overlay.draw = function () {};
            // overlay.setMap(mapRef?.current as any);
            // const proj = overlay.getProjection();
            // const pos = marker.getPosition();
            // const markerPosition = proj.fromLatLngToContainerPixel(pos);
            // const { x, y } = (aimRef?.current as any).getBoundingClientRect();
            // (mapRef.current as any).panBy(markerPosition.x - x, markerPosition.y - y);
            // marker.setMap(null);
            // marker = null;
        }
    };

    return (
        <>
            <ClusterContainer className="cluster-marker" onClick={handleClickCluster}>
                {clusterLeavs.map((clusterLeaf, index: number) =>
                    index < 3 || clusterLeavs.length <= 3 ? (
                        <ClusterSubContainer key={`cluster-${cluster.id}-crime-${clusterLeaf.properties.id}-${index}`}>
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
                        <div key={`${cluster.id}-crime-${clusterLeaf.properties.id}-${index}`} />
                    )
                )}
                {clusterLeavs.length <= 3 ? <></> : <ClusterCounts>+{pointCount - 3}</ClusterCounts>}
            </ClusterContainer>
            <MarkerArrow src={iconVectorPath} />
            <ClusterCircleThree>
                <ClusterCircleTwo width={clusterLeavs.length > 8 ? 184 : 120}>
                    <ClusterCircleOne>
                        <ClusterPoint />
                    </ClusterCircleOne>
                </ClusterCircleTwo>
            </ClusterCircleThree>
        </>
    );
};

export default Cluster;
