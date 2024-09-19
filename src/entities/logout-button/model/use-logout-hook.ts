import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "@/features/login-modal";

import { routes } from "@/shared/config";

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
