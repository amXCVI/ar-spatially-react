import { ArObjectItem } from "@/entities/ar-object-item";

import { useMyArObjectsHook } from "../model";

const MyArObjectsList = () => {
    const { objectsList } = useMyArObjectsHook();

    return (
        <div className="flex flex-col gap-6 w-full">
            <h1 className="onest-extra-bold text-white">My AR objects</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-5 gap-5">
                {objectsList.map((objectItem) => {
                    return <ArObjectItem key={objectItem.id} object={objectItem} />;
                })}
            </div>
        </div>
    );
};

export { MyArObjectsList };
