import { useEffect, useState } from "react";

import { ApiEndpoints } from "@/shared/api";
import { UserInterface } from "@/shared/types";

const useUserHook = () => {
    const [user, setUser] = useState<UserInterface | null>(null);

    useEffect(() => {
        if (!user) {
            ApiEndpoints.user.getMe().then((res) => {
                setUser(res);
            });
        }
    }, [user]);

    return { user };
};

export { useUserHook };
