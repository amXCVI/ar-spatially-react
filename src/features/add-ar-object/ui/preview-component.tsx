import { ObjectPreview } from "@/entities/object-preview";

import { useSelectPreviewHook } from "../model";

const PreviewComponent = ({ glbModelFile }: { glbModelFile: File }) => {
    const { modelSrc } = useSelectPreviewHook({ glbModelFile });

    return (
        <div className="flex flex-col gap-6 w-full p-4">
            <span className="onest-extra-bold-34 text-white">Select a preview</span>
            <span>Rotate to change the angle, to save preview press “Save object”</span>
            <div className="aspect-square">
                <ObjectPreview modelSrc={modelSrc} modelId={glbModelFile.name} autoRotate={false} />
            </div>
        </div>
    );
};

export { PreviewComponent };
