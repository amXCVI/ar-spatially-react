import { Outlet } from "react-router-dom";

import Header from "@/features/header";

const BaseLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

export default BaseLayout;
