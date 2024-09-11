import { AuthProvider } from "@/features/login-modal";

import { UserContextProvider } from "@/shared/stores";

import AppRouter from "./router/app-router";

function App() {
    return (
        <AuthProvider>
            <UserContextProvider>
                <AppRouter />
            </UserContextProvider>
        </AuthProvider>
    );
}

export default App;
