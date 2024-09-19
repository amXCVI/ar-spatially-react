import { useCallback, useContext, useEffect, useState } from "react";

import { AuthContext } from "@/features/login-modal";

import { ApiEndpoints } from "@/shared/api";
import { LSConstants } from "@/shared/config/constants";
import { UserInterface } from "@/shared/types";

const useUserHook = () => {
    const { authenticated } = useContext(AuthContext);

    const [user, setUser] = useState<UserInterface | null>(
        JSON.parse(localStorage.getItem(LSConstants.userData) || "null"),
    );

    const setUserData = (e: UserInterface | null) => {
        setUser(e);
        localStorage.setItem(LSConstants.userData, JSON.stringify(e));
    };

    const getData = useCallback(() => {
        ApiEndpoints.user.getMe().then((res) => {
            setUserData(res);
        });
    }, []);

    useEffect(() => {
        if (!user && authenticated) {
            getData();
        }
    }, [authenticated, getData, user]);

    useEffect(() => {
        if (!authenticated) {
            setUserData(null);
        }
    }, [authenticated]);

    const setData = (e: { user: UserInterface | null }) => {
        setUserData(e.user);
    };

    return { user, setData };
};

export { useUserHook };
