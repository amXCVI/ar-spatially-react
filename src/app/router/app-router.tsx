import { Suspense } from "react";
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { routes } from "@/shared/config";
import { BaseLayout } from "@/shared/ui/layouts";

const BlockchainPage = React.lazy(() => import("@/pages/blockchain-page"));
const ErrorPage = React.lazy(() => import("@/pages/error-page"));
const HomePage = React.lazy(() => import("@/pages/home-page"));
const MapPage = React.lazy(() => import("@/pages/map-page"));
const ProductPage = React.lazy(() => import("@/pages/product-page"));

const AppRouter = () => {
    const routers = createBrowserRouter([
        {
            path: "/",
            element: <BaseLayout />,
            children: [
                { path: routes.home, element: <HomePage /> },

                { path: routes.map, element: <MapPage /> },

                { path: routes.product, element: <ProductPage /> },

                { path: routes.arNFT, element: <BlockchainPage /> },

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
