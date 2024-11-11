import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { routes } from "@/shared/config";
import { useUserContext } from "@/shared/stores";
import { AuthContext, SignInPopupModes } from "@/shared/stores/auth-provider";

const useUserAvatarHook = () => {
    const navigation = useNavigate();

    const { authenticated, openLoginModal } = useContext(AuthContext);

    const { user } = useUserContext();

    const handleClickOnAvatar = () => {
        if (!authenticated) {
            openLoginModal(SignInPopupModes.SignIn);
        } else {
            navigation(`/${routes.lk}`);
        }
    };

    return { authenticated, user, handleClickOnAvatar };
};

export { useUserAvatarHook };
