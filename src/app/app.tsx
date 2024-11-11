import { Provider } from "react-redux";

import { UserContextProvider, WalletProvider } from "@/shared/stores";
import { AuthProvider } from "@/shared/stores/auth-provider";

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
