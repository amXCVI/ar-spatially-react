import { ObjectInterface } from "@/shared/types";

import { useArViewerHook } from "../model/use-ar-viewer-hook";

const ArViewer = ({ object }: { object: ObjectInterface }) => {
    useArViewerHook({ object });
    return (
        <div className="fixed top-0 right-0 bottom-0 left-0">
            <button className="buttonReady" id="readyButton">
                Я готов
            </button>
        </div>
    );
};

export { ArViewer };
