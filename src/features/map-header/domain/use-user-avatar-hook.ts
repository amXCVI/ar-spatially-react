import { useContext } from "react";

import { AuthContext, SignInPopupModes } from "@/features/login-modal";

import { useUserHook } from "@/shared/stores";

const useUserAvatarHook = () => {
    const { authenticated, openLoginModal } = useContext(AuthContext);

    const { user } = useUserHook();

    const handleClickOnAvatar = () => {
        if (!authenticated) {
            openLoginModal(SignInPopupModes.SignIn);
        }
    };

    return { authenticated, user, handleClickOnAvatar };
};

export { useUserAvatarHook };
