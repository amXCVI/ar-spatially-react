import { useEffect, useState } from "react";

import { MapComponent } from "./lib";
import apiClient from "./shared/api";
import { MarkerInterface } from "./shared/types/nft-types";

const useMapHook = () => {
    const [coords, setCoords] = useState<{
        lat: number;
        lng: number;
        radius: number;
    }>();
    const [nftList, setNftList] = useState<MarkerInterface[]>([]);

    useEffect(() => {
        apiClient
            .post("/gateway/object/find/location", {
                lat: coords?.lat,
                lng: coords?.lng,
                radius: coords?.radius,
            })
            .then((res) => {
                const markers = res.data.data.objectsList;

                setNftList(
                    markers.map((nftItem: any) => {
                        return {
                            id: nftItem.id,
                            description: nftItem.description,
                            imageUrl: `http://146.190.206.198:8001/gateway/file/download?fileId=${nftItem.previewId}`,
                            lat: nftItem.location.lat.toString(),
                            lng: nftItem.location.lng.toString(),
                            name: nftItem.title,
                            ownerAvatarUrl: nftItem.ownerId,
                            isHide: false,
                        };
                    }),
                );
            });
    }, [coords?.lat, coords?.lng, coords?.radius]);

    return { nftList };
};

function App() {
    const { nftList } = useMapHook();

    return (
        <>
            <MapComponent
                nftList={nftList}
                loadingMap={false}
                onClickMarker={(e: string) => {
                    console.log(e);
                }}
                googleApiKey={""}
            />
        </>
    );
}

export default App;
