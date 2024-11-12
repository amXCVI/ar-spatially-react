import { lazy } from "react";
import { Outlet } from "react-router-dom";

const ObjectViewer = lazy(() => import("@/widgets/object-viewer"));

const WalletConnectModal = lazy(() => import("@/features/wallets-connect-modal"));
const LoginModal = lazy(() => import("@/features/login-modal"));

const BaseLayout = () => {
    return (
        <>
            <LoginModal />
            <WalletConnectModal />
            <ObjectViewer />
            <Outlet />
        </>
    );
};

export default BaseLayout;
