import { useEffect, useState } from "react";
import { ChangeEventValue, MapComponent } from "./lib";
import { MarkerInterface } from "./shared/types/nft-types";
import apiClient from "./shared/api";
const useMapHook = () => {
    const [coords, setCoords] = useState<{
        lat: number;
        lng: number;
        radius: number;
    }>();
    const [nftList, setNftList] = useState<MarkerInterface[]>([]);
    const [bounds, setBounds] = useState<
        [number, number, number, number] | [number, number, number, number, number, number] | undefined
    >(undefined);

    const onChangeCoords = (e: ChangeEventValue) => {
        setCoords({ lat: e.center.lat, lng: e.center.lng, radius: e.zoom });
        setBounds([e.bounds.nw.lng, e.bounds.se.lat, e.bounds.se.lng, e.bounds.nw.lat]);
    };

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
                    })
                );
            });
    }, [coords?.lat, coords?.lng, coords?.radius]);

    return { onChangeCoords, nftList, bounds };
};

function App() {
    const { nftList, onChangeCoords, bounds } = useMapHook();

    return (
        <>
            <MapComponent
                googleMapReact={{
                    bootstrapURLKeys: { key: "", libraries: ["places"] },
                    defaultCenter: {
                        lat: 20.99835602,
                        lng: 40.01502627,
                    },
                    defaultZoom: 10,
                }}
                nftList={nftList}
                bounds={bounds}
                loadingMap={false}
                onChangeCoords={onChangeCoords}
                onClickMarker={(e: string) => {
                    console.log(e);
                }}
            />
        </>
    );
}

export default App;
