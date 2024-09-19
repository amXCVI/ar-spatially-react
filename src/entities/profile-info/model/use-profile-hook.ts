import { useUserContext } from "@/shared/stores";

const useProfileHook = () => {
    const { user } = useUserContext();

    return { user };
};

export { useProfileHook };
