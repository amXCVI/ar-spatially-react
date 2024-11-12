import { useNavigate } from "react-router-dom";

import { useAuthContext } from "@/shared/stores/auth-provider";

const useTagHook = () => {
    const navigate = useNavigate();
    const { checkAuth } = useAuthContext();

    const handleClickOnTag = (e: string) => {
        checkAuth().then(() => {
            navigate(e);
        });
    };

    return { handleClickOnTag };
};

export { useTagHook };
