import { useUserHook } from "@/shared/stores";

const useProfileHook = () => {
    const { user } = useUserHook();

    return { user };
};

export { useProfileHook };
