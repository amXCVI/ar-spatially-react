import { useEffect, useState } from "react";

import { ApiEndpoints } from "@/shared/api";
import { useUserContext } from "@/shared/stores";
import { MarkerInterface } from "@/shared/types";

const useMyArObjectsHook = () => {
    const { user } = useUserContext();
    const [objectsList, setObjectsList] = useState<MarkerInterface[]>([]);

    useEffect(() => {
        if (user) {
            ApiEndpoints.object.findMe().then((res) => {
                setObjectsList(res);
            });
        }
    }, [user]);

    return { objectsList };
};

export { useMyArObjectsHook };
