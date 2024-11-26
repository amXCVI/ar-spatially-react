import { SignInPopupModes, useAuthContext } from "@/shared/stores/auth-provider";

const useLoginHook = () => {
    const { isOpenLoginPopup, closeLoginModal, openLoginModal } = useAuthContext();

    const toggleSigninModalMode = (e: SignInPopupModes) => {
        // reset(watch(), { keepValues: false, keepDirty: false, keepDefaultValues: false });

        openLoginModal(e);
    };

    return {
        isOpenLoginPopup,
        closeLoginModal,
        toggleSigninModalMode,
    };
};

export { useLoginHook };
