import { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { routes } from "@/shared/config";
import { BaseLayout } from "@/shared/ui/layouts";

import { ErrorBoundary } from "./error-boundary";
import PrivateRoute from "./private-route";

const FeedPagesLayout = lazy(() => import("@/widgets/feed-pages-layout"));
const ObjectPagesLayout = lazy(() => import("@/widgets/object-pages-layout"));
const UserPagesLayout = lazy(() => import("@/widgets/user-pages-layout"));

const ProfileSettingsPage = lazy(() => import("@/pages/profile-settings-page"));
const FeedsByUserPage = lazy(() => import("@/pages/feeds-by-user-page"));
// const BlockchainPage = lazy(() => import("@/pages/blockchain-page"));
const ProductPage = lazy(() => import("@/pages/product-page"));
const ObjectsPage = lazy(() => import("@/pages/objects-page"));
const ArNftPage = lazy(() => import("@/pages/ar-nft-page"));
const FeedsPage = lazy(() => import("@/pages/feeds-page"));
const EventPage = lazy(() => import("@/pages/event-page"));
const ErrorPage = lazy(() => import("@/pages/error-page"));
const FeedPage = lazy(() => import("@/pages/feed-page"));
const HomePage = lazy(() => import("@/pages/home-page"));
const UserPage = lazy(() => import("@/pages/user-page"));
const MapPage = lazy(() => import("@/pages/map-page"));
const LkPage = lazy(() => import("@/pages/lk"));

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

                // { path: routes.playground, element: <BlockchainPage /> },

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
                        <FeedPagesLayout />
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

                {
                    path: routes.user,
                    element: (
                        <UserPagesLayout>
                            <PrivateRoute />
                        </UserPagesLayout>
                    ),
                    children: [
                        {
                            index: true,
                            element: <UserPage />,
                        },
                    ],
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
