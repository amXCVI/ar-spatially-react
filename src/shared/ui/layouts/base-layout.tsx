import { Outlet } from "react-router-dom";

import { LoginModal } from "@/features/login-modal";
import { WalletConnectModal } from "@/features/wallets-connect-modal";

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
