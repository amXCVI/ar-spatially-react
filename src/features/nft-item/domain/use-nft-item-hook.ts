import { useEffect } from "react";

import { ApiEndpoints } from "@/shared/api";

const useNftItemHook = ({ modelId }: { modelId?: string }) => {
    
    useEffect(() => {
        if (modelId) {
            ApiEndpoints.file.getFile({ fileId: modelId });
        }
    }, [modelId]);

    return {};
};

export { useNftItemHook };
