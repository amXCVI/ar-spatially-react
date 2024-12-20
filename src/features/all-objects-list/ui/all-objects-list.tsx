import { ArObjectItem } from "@/entities/ar-object-item";

import { useAllObjectsListHook } from "../model";

const AllObjectsList = ({ userId }: { userId?: string }) => {
    const { objectsList, containerRef, handleScroll } = useAllObjectsListHook({ userId });

    return (
        <div
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-5 gap-5 w-full h-min"
            ref={containerRef}
            onScroll={handleScroll}
        >
            {objectsList.map((objectItem, index) => {
                return <ArObjectItem key={objectItem.id + index} object={objectItem} />;
            })}
        </div>
    );
};

export { AllObjectsList };
