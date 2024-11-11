import { useNavigate } from "react-router-dom";

import { routes } from "@/shared/config";
import { useUserContext } from "@/shared/stores";
import { SignInPopupModes, useAuthContext } from "@/shared/stores/auth-provider";

const useUserAvatarHook = () => {
    const navigation = useNavigate();

    const { authenticated, openLoginModal } = useAuthContext();

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
