import { ReactNode, createContext, useContext } from "react";

import { UserInterface } from "@/shared/types";

import { useUserHook } from "./use-user-hook";

type Props = {
    children?: ReactNode;
};

type IUserContext = {
    user: UserInterface | null;
    setData: (e: { user: UserInterface | null }) => void;
};

const initialValue = {
    user: null,
    setData: () => {},
};

const UserContext = createContext<IUserContext>(initialValue);

const UserContextProvider = ({ children }: Props) => {
    const { user, setData } = useUserHook();

    return (
        <UserContext.Provider
            value={{
                user,
                setData,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

const useUserContext = (): IUserContext => {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error("useWalletContext must be used within an WalletProvider");
    }

    return context;
};

export { UserContextProvider, useUserContext };
