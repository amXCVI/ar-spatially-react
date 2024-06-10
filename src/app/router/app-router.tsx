import { routes } from "@/shared/config";
import { BaseLayout } from "@/shared/ui/layouts";
import { lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const ErrorPage = lazy(() => import("@/pages/error-page"));
const HomePage = lazy(() => import("@/pages/home-page"));
const MapPage = lazy(() => import("@/pages/map-page"));

const AppRouter = () => {
    const routers = createBrowserRouter([
        {
            path: routes.home,
            element: <BaseLayout />,
            children: [
                { index: true, element: <HomePage /> },

                { path: routes.map, element: <MapPage /> },
                { path: routes.undefined, element: <ErrorPage /> },
            ],
        },
    ]);

    return <RouterProvider router={routers} />;
};

export default AppRouter;
