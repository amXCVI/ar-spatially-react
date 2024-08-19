import { ReactNode, createContext, useState } from "react";

const getAuthStatus = () => {
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
    openLoginModal: (e: SignInPopupModes) => void;
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

    const openLoginModal = (e: SignInPopupModes) => {
        setIsOpenLoginPopup(e);
    };

    const closeLoginModal = () => {
        setIsOpenLoginPopup(SignInPopupModes.Closed);
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
