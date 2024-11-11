import { useNavigate } from "react-router-dom";

import { routes } from "@/shared/config";
import { useAuthContext } from "@/shared/stores/auth-provider";

const useLogoutHook = () => {
    const navigate = useNavigate();

    const { logout } = useAuthContext();

    const handleLogout = () => {
        logout(() => {
            navigate(routes.root);
        });
    };
    return { handleLogout };
};

export { useLogoutHook };
