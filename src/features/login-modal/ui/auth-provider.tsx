import { ReactNode, createContext, useState } from "react";

import { LSConstants } from "@/shared/config/constants";

const getAuthStatus = () => {
    const token = localStorage.getItem(LSConstants.accessToken);

    if (token) {
        return true;
    }

    return false;
};

enum SignInPopupModes {
    SignIn = "signin",
    SignUp = "signup",
    Closed = "closed",
}

type Props = {
    children?: ReactNode;
};

type IAuthContext = {
    authenticated: boolean;
    setAuthenticated: (newState: boolean) => void;
    isOpenLoginPopup: SignInPopupModes;
    openLoginModal: (e: SignInPopupModes, authCallback?: () => void) => void;
    closeLoginModal: (success?: boolean) => void;
    logout: (logoutCallback?: () => void) => void;
};

const initialValue = {
    authenticated: getAuthStatus(),
    isOpenLoginPopup: SignInPopupModes.Closed,

    setAuthenticated: () => {},
    openLoginModal: () => {},
    closeLoginModal: () => {},

    logout: () => {},
};

const AuthContext = createContext<IAuthContext>(initialValue);

const AuthProvider = ({ children }: Props) => {
    //Initializing an auth state with false value (unauthenticated)
    const [authenticated, setAuthenticated] = useState(initialValue.authenticated);
    const [isOpenLoginPopup, setIsOpenLoginPopup] = useState<SignInPopupModes>(initialValue.isOpenLoginPopup);
    const [successAuthCallback, setSuccessAuthCallback] = useState<{ callback: VoidFunction } | null>(null);

    const openLoginModal = (e: SignInPopupModes, authCallback?: () => void) => {
        setIsOpenLoginPopup(e);

        if (authCallback) {
            setSuccessAuthCallback({ callback: authCallback });
        }
    };

    const closeLoginModal = (success?: boolean) => {
        setIsOpenLoginPopup(SignInPopupModes.Closed);

        setSuccessAuthCallback(null);

        if (successAuthCallback && success) {
            successAuthCallback.callback();
        }
    };

    const logout = (logoutCallback?: () => void) => {
        localStorage.removeItem(LSConstants.accessToken);
        setAuthenticated(false);

        if (logoutCallback) {
            logoutCallback();
        }
    };

    return (
        <AuthContext.Provider
            value={{
                authenticated,
                setAuthenticated,
                isOpenLoginPopup,
                openLoginModal,
                closeLoginModal,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider, SignInPopupModes };
