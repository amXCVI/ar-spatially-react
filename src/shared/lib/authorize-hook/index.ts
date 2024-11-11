import { NavigateFunction, To } from "react-router-dom";

import { LSConstants } from "@/shared/config/constants";
import { useAuthContext } from "@/shared/stores/auth-provider";

const useAuthorizeHook = () => {
    const { closeLoginModal, setAuthenticated } = useAuthContext();

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
