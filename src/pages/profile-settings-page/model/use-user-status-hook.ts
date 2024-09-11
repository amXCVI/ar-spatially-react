import { useContext } from "react";

import { ApiEndpoints } from "@/shared/api";
import { UserContext } from "@/shared/stores";
import { UserStatus } from "@/shared/types";

const useUserStatusHook = () => {
    const { user, setData } = useContext(UserContext);

    const handleChaangeStatus = (e: UserStatus) => {
        if (user) {
            ApiEndpoints.user.updateUser({ userId: user.userId, status: e }).then((res) => {
                setData({ user: res });
            });
        }
    };

    return { handleChaangeStatus, userStatus: user?.status };
};

export { useUserStatusHook };
