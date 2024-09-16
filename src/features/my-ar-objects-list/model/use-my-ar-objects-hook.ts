import { useContext, useEffect, useState } from "react";

import { ApiEndpoints } from "@/shared/api";
import { UserContext } from "@/shared/stores";
import { MarkerInterface } from "@/shared/types";

const useMyArObjectsHook = () => {
    const { user } = useContext(UserContext);
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
