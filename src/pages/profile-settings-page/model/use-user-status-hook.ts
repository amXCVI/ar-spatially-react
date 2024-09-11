import { ApiEndpoints } from "@/shared/api";
import { useUserHook } from "@/shared/stores";
import { UserStatus } from "@/shared/types";

const useUserStatusHook = () => {
    const { user, setData } = useUserHook();

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
