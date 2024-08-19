import { useContext } from "react";

import { AuthContext, SignInPopupModes } from "../ui";

const useLoginHook = () => {
    const { isOpenLoginPopup, closeLoginModal, openLoginModal } = useContext(AuthContext);

    const handleClickSignIn = () => {
        if (isOpenLoginPopup !== SignInPopupModes.SignIn) {
            openLoginModal(SignInPopupModes.SignIn);
            return;
        }
    };

    const handleClickSignUp = () => {
        if (isOpenLoginPopup !== SignInPopupModes.SignUp) {
            openLoginModal(SignInPopupModes.SignUp);
            return;
        }
    };

    return { isOpenLoginPopup, closeLoginModal, handleClickSignIn, handleClickSignUp };
};

export { useLoginHook };
