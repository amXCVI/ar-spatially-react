import ErrorPage from "@/pages/error-page";
import HomePage from "@/pages/home-page";
import { routes } from "@/shared/config";
import { BaseLayout } from "@/shared/ui/layouts";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const AppRouter = () => {
    const routers = createBrowserRouter([
        {
            path: routes.home,
            element: <BaseLayout />,
            children: [
                { index: true, element: <HomePage /> },

                { path: routes.undefined, element: <ErrorPage /> },
            ],
        },
    ]);

    return <RouterProvider router={routers} />;
};

export default AppRouter;
