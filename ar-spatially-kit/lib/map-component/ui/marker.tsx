import { FC, useState } from "react";

import IconVectorPath from "@ar-kit/assets/icons/icon-marker-vector.svg";

import Loading from "@ar-kit/lib/loader-component/Loading";
import { MarkerArrow } from "./cluster.style";
import {
    MarkerOwnerAvatar,
    // MarkerOwnerAvatarDefaultWrap,
    // MarkerOwnerAvatarDefault,
    MarkerContainer,
    MarkerImg,
    MarkerName,
} from "./marker.style";
import { MarkerInterface } from "@ar-kit/shared/types/nft-types";

type MarkerProps = {
    lat: number;
    lng: number;
    handleClickNft: (nftId: string) => void;
    cluster: { geometry: { coordinates: [number, number]; type: string }; properties: MarkerInterface };
};

const getAvatar = (cluster: MarkerInterface) => {
    if (cluster.ownerAvatarUrl) {
        return <MarkerOwnerAvatar fileUrl={cluster.ownerAvatarUrl} />;
    } else {
        return <></>;
    }
};

const Marker: FC<MarkerProps> = ({ cluster, handleClickNft = () => {} }: MarkerProps) => {
    const [loadingImg, setLoadingImg] = useState(true);

    const handleClickMarker = (selectedNftId: string) => {
        handleClickNft(selectedNftId);
    };

    const handleImageLoaded = () => {
        setLoadingImg(false);
    };

    return (
        <>
            <MarkerContainer onClick={() => handleClickMarker(cluster.properties.id)}>
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
                    src={`${cluster.properties.previewUrl ?? cluster.properties.imageUrl}`}
                    // isMonochrome={!cluster.publishId}
                    onLoad={handleImageLoaded}
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
                    }}
                />
                {getAvatar(cluster.properties)}
                {cluster.properties.name ? <MarkerName>{cluster.properties.name}</MarkerName> : <div />}
            </MarkerContainer>
            <MarkerArrow src={IconVectorPath} />
        </>
    );
};

export default Marker;
