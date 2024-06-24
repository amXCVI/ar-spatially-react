import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ErrorPage from "@/pages/error-page";
import ExamplePage from "@/pages/example-page";
import HomePage from "@/pages/home-page";
import MapPage from "@/pages/map-page";

import { routes } from "@/shared/config";
import { BaseLayout } from "@/shared/ui/layouts";

const AppRouter = () => {
    const routers = createBrowserRouter([
        {
            path: routes.home,
            element: <BaseLayout />,
            children: [
                { index: true, element: <HomePage /> },

                { path: routes.map, element: <MapPage /> },

                { path: routes.example, element: <ExamplePage /> },

                { path: routes.undefined, element: <ErrorPage /> },
            ],
        },
    ]);

    return <RouterProvider router={routers} />;
};

export default AppRouter;
