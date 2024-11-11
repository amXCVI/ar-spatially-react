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

export type IAuthContext = {
    authenticated: boolean;
    setAuthenticated: (newState: boolean) => void;
    isOpenLoginPopup: SignInPopupModes;
    openLoginModal: (e: SignInPopupModes, authCallback?: () => void) => void;
    closeLoginModal: (success?: boolean) => void;
    logout: (logoutCallback?: () => void) => void;
    checkAuth: (e?: SignInPopupModes) => Promise<unknown>;
};

const initialValue = {
    authenticated: getAuthStatus(),
    isOpenLoginPopup: SignInPopupModes.Closed,

    setAuthenticated: () => {},
    openLoginModal: () => {},
    closeLoginModal: () => {},

    logout: () => {},

    checkAuth: () => Promise.reject(),
};

const AuthContext = createContext<IAuthContext>(initialValue);

const AuthProvider = ({ children }: Props) => {
    //Initializing an auth state with false value (unauthenticated)
    const [authenticated, setAuthenticated] = useState(initialValue.authenticated);
    const [isOpenLoginPopup, setIsOpenLoginPopup] = useState<SignInPopupModes>(initialValue.isOpenLoginPopup);
    const [successAuthCallback, setSuccessAuthCallback] = useState<{ callback: VoidFunction } | null>(null);

    const openLoginModal = (e: SignInPopupModes = SignInPopupModes.SignIn, authCallback?: () => void) => {
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

        if (window.handleCloseAuthModal) {
            window.handleCloseAuthModal(success ?? false);
            window.handleCloseAuthModal = undefined;
        }
    };

    const logout = (logoutCallback?: () => void) => {
        localStorage.removeItem(LSConstants.accessToken);
        localStorage.removeItem(LSConstants.userData);
        setAuthenticated(false);

        if (logoutCallback) {
            logoutCallback();
        }
    };

    // ф-я проверяет, авторизован юзер или нет. Если авторизован - resolve, иначе - reject
    const checkAuth = async () => {
        if (authenticated) {
            return true;
        }

        return new Promise((resolve, reject) => {
            const handleClose = (res: boolean) => {
                if (res) {
                    resolve(true);
                } else {
                    reject(false);
                }
            };

            openLoginModal();

            window.handleCloseAuthModal = handleClose;
        });
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
                checkAuth,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider, SignInPopupModes };
