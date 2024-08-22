import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { AuthContext } from "@/features/login-modal";

import { routes } from "@/shared/config";

const PrivateRoute = () => {
    const { authenticated } = useContext(AuthContext);

    switch (authenticated) {
        // неавторизован
        case false:
            return <Navigate to={routes.home} replace />;

        // авторизован
        case true:
            return <Outlet />;
    }
};

export default PrivateRoute;
