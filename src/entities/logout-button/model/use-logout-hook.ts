import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { routes } from "@/shared/config";
import { AuthContext } from "@/shared/stores/auth-provider";

const useLogoutHook = () => {
    const navigate = useNavigate();

    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout(() => {
            navigate(routes.root);
        });
    };
    return { handleLogout };
};

export { useLogoutHook };
