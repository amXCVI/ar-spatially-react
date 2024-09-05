import { useContext } from "react";
import { NavigateFunction, To } from "react-router-dom";

import { AuthContext } from "@/features/login-modal";

import { LSConstants } from "@/shared/config/constants";

const useAuthorizeHook = () => {
    const { closeLoginModal, setAuthenticated } = useContext(AuthContext);

    const onLogin = ({ token, navigate, to }: { token: string; navigate?: NavigateFunction; to?: To }) => {
        localStorage.setItem(LSConstants.accessToken, token);
        setAuthenticated(true);

        closeLoginModal(true);

        if (navigate && to) {
            navigate(to);
        }
    };

    const onLogout = ({ navigate, to }: { navigate?: NavigateFunction; to?: To }) => {
        localStorage.removeItem(LSConstants.accessToken);
        setAuthenticated(false);

        if (navigate && to) {
            navigate(to);
        }
    };

    return { onLogin, onLogout };
};

export { useAuthorizeHook };
