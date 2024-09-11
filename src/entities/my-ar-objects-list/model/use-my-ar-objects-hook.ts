import { useEffect, useState } from "react";

import { ApiEndpoints } from "@/shared/api";
import { useUserHook } from "@/shared/stores";
import { MarkerInterface } from "@/shared/types";

const useMyArObjectsHook = () => {
    const { user } = useUserHook();
    const [objectsList, setObjectsList] = useState<MarkerInterface[]>([]);

    useEffect(() => {
        if (user) {
            ApiEndpoints.object.findPointsByOwner({ ownerId: user.userId }).then((res) => {
                setObjectsList(res);
            });
        }
    }, [user]);

    return { objectsList };
};

export { useMyArObjectsHook };
