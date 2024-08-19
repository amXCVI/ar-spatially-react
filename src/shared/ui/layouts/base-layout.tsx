import { Outlet } from "react-router-dom";

import { LoginModal } from "@/features/login-modal";

const BaseLayout = () => {
    return (
        <>
            <LoginModal />
            <Outlet />
        </>
    );
};

export default BaseLayout;
