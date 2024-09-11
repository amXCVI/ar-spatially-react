import { useContext } from "react";

import { AuthContext, SignInPopupModes } from "@/features/login-modal";

import { UserContext } from "@/shared/stores";

const useUserAvatarHook = () => {
    const { authenticated, openLoginModal } = useContext(AuthContext);

    const { user } = useContext(UserContext);

    const handleClickOnAvatar = () => {
        if (!authenticated) {
            openLoginModal(SignInPopupModes.SignIn);
        }
    };

    return { authenticated, user, handleClickOnAvatar };
};

export { useUserAvatarHook };
