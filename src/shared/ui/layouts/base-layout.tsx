import React from "react";
import { Outlet } from "react-router-dom";

const WalletConnectModal = React.lazy(() => import("@/features/wallets-connect-modal"));
const LoginModal = React.lazy(() => import("@/features/login-modal"));

const BaseLayout = () => {
    return (
        <>
            <LoginModal />
            <WalletConnectModal />
            <Outlet />
        </>
    );
};

export default BaseLayout;
