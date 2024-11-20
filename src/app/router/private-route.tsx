import { Outlet, useNavigate } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

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
            // авторизовался
            .then(() => {
                return <Outlet />;
            })
            // отказался авторизовываться
            .catch(() => {
                closeLoginModal();
                navigate(routes.root, { replace: true });
            });
    }

    return <Fragment />;
};

export default PrivateRoute;
