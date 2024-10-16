import { AuthProvider } from "@/features/login-modal";

import { UserContextProvider, WalletProvider } from "@/shared/stores";

import AppRouter from "./router/app-router";

const App = () => {
    return (
        <AuthProvider>
            <UserContextProvider>
                <WalletProvider>
                    <AppRouter />
                </WalletProvider>
            </UserContextProvider>
        </AuthProvider>
    );
};

export default App;
