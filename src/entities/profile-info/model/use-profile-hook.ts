import { useState } from "react";

import { useUserContext } from "@/shared/stores";

const useProfileHook = () => {
    const [copyedNickname, setCopyedNickname] = useState<boolean>(false);

    const { user } = useUserContext();

    const copyToClipboardNickname = () => {
        if (user) {
            navigator.clipboard.writeText(user.nickname);
            setCopyedNickname(true);
            setTimeout(() => {
                setCopyedNickname(false);
            }, 1000);
        }
    };

    return { user, copyToClipboardNickname, copyedNickname };
};

export { useProfileHook };
