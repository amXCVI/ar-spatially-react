import { useContext } from "react";

import { AuthContext, IAuthContext } from "./auth-provider";

const useAuthContext = (): IAuthContext => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuthContext must be used within an AuthProvider");
    }

    return context;
};

export { useAuthContext };
