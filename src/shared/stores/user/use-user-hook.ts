import { useContext, useEffect, useState } from "react";

import { AuthContext } from "@/features/login-modal";

import { ApiEndpoints } from "@/shared/api";
import { UserInterface } from "@/shared/types";

const useUserHook = () => {
    const { authenticated } = useContext(AuthContext);

    const [user, setUser] = useState<UserInterface | null>(null);

    const getData = () => {
        ApiEndpoints.user.getMe().then((res) => {
            setUser(res);
        });
    };

    useEffect(() => {
        if (!user && authenticated) {
            getData();
        }
    }, [authenticated, user]);

    useEffect(() => {
        if (!authenticated) {
            setUser(null);
        }
    }, [authenticated]);

    const forceGetUser = () => {
        getData();
    };

    const setData = (e: { user: UserInterface | null }) => {
        setUser(e.user);
    };

    return { user, forceGetUser, setData };
};

export { useUserHook };
