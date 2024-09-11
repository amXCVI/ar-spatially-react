import { ReactNode, createContext } from "react";

import { UserInterface } from "@/shared/types";

import { useUserHook } from "./use-user-hook";

type Props = {
    children?: ReactNode;
};

type IUserContext = {
    user: UserInterface | null;
    forceGetUser: () => void;
    setData: (e: { user: UserInterface | null }) => void;
};

const initialValue = {
    user: null,
    setData: () => {},
    forceGetUser: () => {},
};

const UserContext = createContext<IUserContext>(initialValue);

const UserContextProvider = ({ children }: Props) => {
    const { user, forceGetUser, setData } = useUserHook();

    return (
        <UserContext.Provider
            value={{
                user,
                forceGetUser,
                setData,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserContextProvider };
