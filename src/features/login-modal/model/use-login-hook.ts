import { useContext } from "react";

import { AuthContext } from "../ui";

const useLoginHook = () => {
    const { isOpenLoginPopup, closeLoginModal } = useContext(AuthContext);

    return { isOpenLoginPopup, closeLoginModal };
};

export { useLoginHook };
