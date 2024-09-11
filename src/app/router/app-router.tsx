import { Suspense } from "react";
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { routes } from "@/shared/config";
import { BaseLayout } from "@/shared/ui/layouts";

import PrivateRoute from "./private-route";

const LkPage = React.lazy(() => import("@/pages/lk"));
const ProfileSettingsPage = React.lazy(() => import("@/pages/profile-settings-page"));

const BlockchainPage = React.lazy(() => import("@/pages/blockchain-page"));
const ErrorPage = React.lazy(() => import("@/pages/error-page"));
const HomePage = React.lazy(() => import("@/pages/home-page"));
const MapPage = React.lazy(() => import("@/pages/map-page"));
const ProductPage = React.lazy(() => import("@/pages/product-page"));
const ArNftPage = React.lazy(() => import("@/pages/ar-nft-page"));

const AppRouter = () => {
    const routers = createBrowserRouter([
        {
            path: "/",
            element: <BaseLayout />,
            children: [
                { path: routes.home, element: <HomePage /> },

                { path: routes.map, element: <MapPage /> },

                { path: routes.product, element: <ProductPage /> },

                { path: routes.arNFT, element: <ArNftPage /> },

                { path: routes.playground, element: <BlockchainPage /> },

                {
                    path: routes.lk,
                    element: <PrivateRoute />,
                    children: [
                        { index: true, element: <LkPage /> },
                        { path: routes.profileSettings, element: <ProfileSettingsPage /> },
                    ],
                },

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
