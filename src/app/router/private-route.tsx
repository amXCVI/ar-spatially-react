import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";


import { routes } from "@/shared/config";
import { AuthContext } from "@/shared/stores/auth-provider";

const PrivateRoute = () => {
    const { authenticated } = useContext(AuthContext);

    switch (authenticated) {
        // неавторизован
        case false:
            return <Navigate to={routes.root} replace />;

        // авторизован
        case true:
            return <Outlet />;
    }
};

export default PrivateRoute;
