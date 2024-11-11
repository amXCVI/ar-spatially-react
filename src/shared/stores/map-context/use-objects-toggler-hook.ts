import { useState } from "react";

import { SignInPopupModes, useAuthContext } from "../auth-provider";

const useObjectsTogglerHook = () => {
    const [myObjectsOnly, setMyObjectsOnly] = useState<boolean>(false);

    const { authenticated, openLoginModal } = useAuthContext();

    const handleMyObjects = () => {};

    const handleAllObjects = () => {
        setMyObjectsOnly(false);
    };

    const toggleObjectsOwner = () => {
        setMyObjectsOnly((e) => {
            if (e) {
                return false;
            } else {
                // Если пользователь авторизован - просто переключаю на Мои объекты
                if (authenticated) {
                    return true;
                    //  Если не авторизован - сначала открываю окно авторизации
                } else {
                    openLoginModal(SignInPopupModes.SignIn, () => {
                        setMyObjectsOnly(true);
                    });
                    return false;
                }
            }
        });
    };

    return { myObjectsOnly, handleMyObjects, handleAllObjects, toggleObjectsOwner };
};

export { useObjectsTogglerHook };
