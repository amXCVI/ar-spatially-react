import { useEffect } from "react";

import { ObjectInterface } from "@/shared/types";

import { renderArObject } from "./geoMODs.js";

const useArViewerHook = ({ object }: { object: ObjectInterface }) => {
    useEffect(() => {
        renderArObject({ lat: object.location.lat, lng: object.location.lng });
        // return () => {
        //     cleanup
        // }
    }, [object]);

    return {};
};

export { useArViewerHook };
