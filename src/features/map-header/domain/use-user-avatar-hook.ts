import { useContext } from "react";

import { AuthContext } from "@/features/login-modal";

import { useUserHook } from "@/shared/stores";

const useUserAvatarHook = () => {
    const { authenticated } = useContext(AuthContext);

    const { user } = useUserHook();

    return { authenticated, user };
};

export { useUserAvatarHook };
