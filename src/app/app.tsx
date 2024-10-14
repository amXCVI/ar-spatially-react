import { Provider } from "react-redux";

import { AuthProvider } from "@/features/login-modal";

import { UserContextProvider, WalletProvider } from "@/shared/stores";

import AppRouter from "./router/app-router";
import store from "./store-provider";

const App = () => {
    return (
        <AuthProvider>
            <UserContextProvider>
                <WalletProvider>
                    <Provider store={store}>
                        <AppRouter />
                    </Provider>
                </WalletProvider>
            </UserContextProvider>
        </AuthProvider>
    );
};

export default App;
