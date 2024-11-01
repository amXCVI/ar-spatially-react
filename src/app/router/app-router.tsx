import { Suspense } from "react";
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { routes } from "@/shared/config";
import { BaseLayout } from "@/shared/ui/layouts";

import { ErrorBoundary } from "./error-boundary";
import PrivateRoute from "./private-route";

const FeedPagesLayout = React.lazy(() => import("@/widgets/feed-pages-layout"));
const ObjectPagesLayout = React.lazy(() => import("@/widgets/object-pages-layout"));

const ProfileSettingsPage = React.lazy(() => import("@/pages/profile-settings-page"));
const FeedsByUserPage = React.lazy(() => import("@/pages/feeds-by-user-page"));
const BlockchainPage = React.lazy(() => import("@/pages/blockchain-page"));
const ProductPage = React.lazy(() => import("@/pages/product-page"));
const ObjectsPage = React.lazy(() => import("@/pages/objects-page"));
const ArNftPage = React.lazy(() => import("@/pages/ar-nft-page"));
const FeedsPage = React.lazy(() => import("@/pages/feeds-page"));
const EventPage = React.lazy(() => import("@/pages/event-page"));
const ErrorPage = React.lazy(() => import("@/pages/error-page"));
const FeedPage = React.lazy(() => import("@/pages/feed-page"));
const HomePage = React.lazy(() => import("@/pages/home-page"));
const MapPage = React.lazy(() => import("@/pages/map-page"));
const LkPage = React.lazy(() => import("@/pages/lk"));

const AppRouter = () => {
    const routers = createBrowserRouter([
        {
            path: routes.root,
            element: <BaseLayout />,
            children: [
                { index: true, element: <HomePage /> },

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

                {
                    path: routes.feeds,
                    element: (
                        <FeedPagesLayout>
                            <PrivateRoute />
                        </FeedPagesLayout>
                    ),
                    children: [
                        { index: true, element: <FeedsPage /> },
                        { path: routes.feed, element: <FeedPage /> },
                        { path: routes.feedsByUser, element: <FeedsByUserPage /> },
                    ],
                },

                {
                    path: routes.objects,
                    element: (
                        <ObjectPagesLayout>
                            <PrivateRoute />
                        </ObjectPagesLayout>
                    ),
                    children: [{ index: true, element: <ObjectsPage /> }],
                },

                { path: routes.event, element: <EventPage /> },

                { path: routes.undefined, element: <ErrorPage /> },
            ],
        },
    ]);

    return (
        <ErrorBoundary>
            <Suspense fallback={<div />}>
                <RouterProvider router={routers} fallbackElement={<div />} />
            </Suspense>
        </ErrorBoundary>
    );
};

export default AppRouter;
