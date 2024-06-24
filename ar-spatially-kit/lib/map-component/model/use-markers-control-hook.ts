import { MarkerInterface } from "@ar-kit/shared/types/nft-types";
import useSupercluster from "use-supercluster";

const useMarkerControlHook = ({
    bounds,
    nftList,
    zoom,
}: {
    nftList: MarkerInterface[];
    bounds: [number, number, number, number] | [number, number, number, number, number, number];
    zoom: number;
}) => {
    const points = nftList.map((crime) => {
        return {
            type: "Feature",
            properties: { cluster: false, crimeId: crime.id, ...crime },
            geometry: {
                type: "Point",
                coordinates: [crime.lng, crime.lat],
            },
        };
    });

    const { clusters, supercluster } = useSupercluster({
        points,
        bounds,
        zoom,
        options: { radius: 500, maxZoom: 20 },
    });

    return { clusters, supercluster };
};

export default useMarkerControlHook;
