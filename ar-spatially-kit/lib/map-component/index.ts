import { APIProvider, MapCameraChangedEvent } from "@vis.gl/react-google-maps";

import googleMapStyles from "./resources/map_style.json";
import { DefaultMap } from "./ui/map";
import MapComponent, { MapRefType } from "./ui/map-component";

export default MapComponent;

export { type MapRefType, APIProvider, type MapCameraChangedEvent };

export { googleMapStyles };

export { DefaultMap };
