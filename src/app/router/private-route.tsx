import { Outlet, useNavigate } from "react-router-dom";

import { routes } from "@/shared/config";
import { useAuthContext } from "@/shared/stores/auth-provider";

const PrivateRoute = () => {
    const { authenticated, checkAuth, closeLoginModal } = useAuthContext();
    const navigate = useNavigate();

    if (authenticated) {
        // авторизован
        return <Outlet />;
    } else {
        // неавторизован
        checkAuth()
            .then(() => {
                return <Outlet />;
            })
            .catch(() => {
                closeLoginModal();
                navigate(routes.root, { replace: true });
            });
    }
};

export default PrivateRoute;
