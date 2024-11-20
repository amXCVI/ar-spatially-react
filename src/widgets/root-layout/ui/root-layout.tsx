import { lazy } from "react";
import { Outlet } from "react-router-dom";

import { useUserLayersHook } from "@/shared/stores";

const LoginModal = lazy(() => import("@/features/login-modal"));
const ObjectViewer = lazy(() => import("@/widgets/object-viewer"));
const WalletConnectModal = lazy(() => import("@/features/wallets-connect-modal"));

const RootLayout = () => {
    useUserLayersHook();

    return (
        <>
            <Outlet />

            <LoginModal />
            <WalletConnectModal />
            <ObjectViewer />
        </>
    );
};

export { RootLayout };
