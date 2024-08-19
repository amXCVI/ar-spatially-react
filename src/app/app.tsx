import { AuthProvider } from "@/features/login-modal";

import AppRouter from "./router/app-router";

function App() {
    return (
        <AuthProvider>
            <AppRouter />
        </AuthProvider>
    );
}

export default App;
