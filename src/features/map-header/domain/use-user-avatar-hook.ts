import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext, SignInPopupModes } from "@/features/login-modal";

import { routes } from "@/shared/config";
import { UserContext } from "@/shared/stores";

const useUserAvatarHook = () => {
    const navigation = useNavigate();

    const { authenticated, openLoginModal } = useContext(AuthContext);

    const { user } = useContext(UserContext);

    const handleClickOnAvatar = () => {
        if (!authenticated) {
            openLoginModal(SignInPopupModes.SignIn);
        } else {
            navigation(routes.lk);
        }
    };

    return { authenticated, user, handleClickOnAvatar };
};

export { useUserAvatarHook };
