import { ObjectInterface } from "@/shared/types";

import { useArViewerHook } from "../model/use-ar-viewer-hook";

const ArViewer = ({ object }: { object: ObjectInterface }) => {
    useArViewerHook({ object });
    return <div></div>;
};

export { ArViewer };
