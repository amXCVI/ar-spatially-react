import { ReactNode, createContext, useState } from "react";

const getAuthStatus = () => {
    return false;
};

type Props = {
    children?: ReactNode;
};

type IAuthContext = {
    authenticated: boolean;
    setAuthenticated: (newState: boolean) => void;
    isOpenLoginPopup: boolean;
    openLoginModal: () => void;
    closeLoginModal: () => void;
};

const initialValue = {
    authenticated: getAuthStatus(),
    isOpenLoginPopup: false,

    setAuthenticated: () => {},
    openLoginModal: () => {},
    closeLoginModal: () => {},
};

const AuthContext = createContext<IAuthContext>(initialValue);

const AuthProvider = ({ children }: Props) => {
    //Initializing an auth state with false value (unauthenticated)
    const [authenticated, setAuthenticated] = useState(initialValue.authenticated);
    const [isOpenLoginPopup, setIsOpenLoginPopup] = useState<boolean>(initialValue.isOpenLoginPopup);

    const openLoginModal = () => {
        setIsOpenLoginPopup(true);
    };

    const closeLoginModal = () => {
        setIsOpenLoginPopup(false);
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

export { AuthContext, AuthProvider };
