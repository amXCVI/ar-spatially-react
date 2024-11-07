import { useAppSelector } from "@/shared/lib/redux-service";
import { useUserContext } from "@/shared/stores";

const useMyArObjectsHook = () => {
    const { user } = useUserContext();
    const { objectsList } = useAppSelector((state) => state.allObjectsSlice);

    return { objectsList, userId: user ? user.userId : undefined };
};

export { useMyArObjectsHook };
