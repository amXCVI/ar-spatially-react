import { useContext } from "react";

import { UserContext } from "@/shared/stores";

const useProfileHook = () => {
    const { user } = useContext(UserContext);

    return { user };
};

export { useProfileHook };
