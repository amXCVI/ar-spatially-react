import { useContext, useEffect, useState } from "react";

import { AuthContext } from "@/features/login-modal";

import { UserInterface } from "@/shared/types";

import { userApi } from "../api";

const useUserAvatarHook = () => {
    const { authenticated } = useContext(AuthContext);

    const [user, setUser] = useState<UserInterface | null>(null);

    useEffect(() => {
        if (!user) {
            userApi.getMe().then((res) => {
                setUser(res);
            });
        }

        return () => {
            setUser(null);
        };
    }, []);

    return { authenticated, user };
};

export { useUserAvatarHook };
