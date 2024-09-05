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
    closeLoginModal: () => void;
};

const initialValue = {
    authenticated: getAuthStatus(),
    isOpenLoginPopup: SignInPopupModes.Closed,

    setAuthenticated: () => {},
    openLoginModal: () => {},
    closeLoginModal: () => {},
};

const AuthContext = createContext<IAuthContext>(initialValue);

const AuthProvider = ({ children }: Props) => {
    //Initializing an auth state with false value (unauthenticated)
    const [authenticated, setAuthenticated] = useState(initialValue.authenticated);
    const [isOpenLoginPopup, setIsOpenLoginPopup] = useState<SignInPopupModes>(initialValue.isOpenLoginPopup);
    const [successAuthCallback, setSuccessAuthCallback] = useState<VoidFunction | null>(null);

    const openLoginModal = (e: SignInPopupModes, authCallback?: () => void) => {
        setIsOpenLoginPopup(e);

        if (authCallback) {
            setSuccessAuthCallback(authCallback);
        }
    };

    const closeLoginModal = () => {
        setIsOpenLoginPopup(SignInPopupModes.Closed);

        if (successAuthCallback) {
            successAuthCallback();
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
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider, SignInPopupModes };
