import { MapContextProvider } from "@/shared/stores";

import Map from "./ui";

const MapPage = () => {
    return (
        <MapContextProvider>
            <Map />
        </MapContextProvider>
    );
};
export default MapPage;
