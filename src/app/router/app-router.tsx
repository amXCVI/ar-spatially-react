import { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { BlockchainPage } from "@/pages/blockchain-page";
import ErrorPage from "@/pages/error-page";
import ExamplePage from "@/pages/example-page";
import HomePage from "@/pages/home-page";
import MapPage from "@/pages/map-page";
import { ProductPage } from "@/pages/product-page";

import { routes } from "@/shared/config";
import { BaseLayout } from "@/shared/ui/layouts";

const AppRouter = () => {
    const routers = createBrowserRouter([
        {
            path: "/",
            element: <BaseLayout />,
            children: [
                { path: routes.home, element: <HomePage /> },

                { path: routes.map, element: <MapPage /> },

                { path: routes.product, element: <ProductPage /> },

                { path: routes.blockchain, element: <BlockchainPage /> },

                { path: routes.example, element: <ExamplePage /> },

                { path: routes.undefined, element: <ErrorPage /> },
            ],
        },
    ]);

    return (
        <Suspense>
            <RouterProvider router={routers} fallbackElement={<div />} />
        </Suspense>
    );
};

export default AppRouter;
