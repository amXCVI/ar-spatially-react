import { useEffect, useState } from "react";

import { ApiEndpoints } from "@/shared/api";
import { UserInterface } from "@/shared/types";

const useUserHook = () => {
    const [user, setUser] = useState<UserInterface | null>(null);

    const getData = () => {
        ApiEndpoints.user.getMe().then((res) => {
            setUser(res);
        });
    };

    useEffect(() => {
        if (!user) {
            getData();
        }
    }, [user]);

    const forceGetUser = () => {
        getData();
    };

    const setData = (e: { user: UserInterface }) => {
        setUser(e.user);
    };

    return { user, forceGetUser, setData };
};

export { useUserHook };
