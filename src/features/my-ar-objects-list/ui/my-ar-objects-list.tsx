import { AllObjectsList } from "@/features/all-objects-list";

import { useMyArObjectsHook } from "../model";

const MyArObjectsList = () => {
    const { objectsList, userId } = useMyArObjectsHook();

    return (
        <div className="flex flex-col gap-6 w-full">
            <h1 className="onest-extra-bold text-white">My AR objects</h1>
            <AllObjectsList userId={userId} />
            {!objectsList.length && <span className="onest-medium-22 text-white">No Objects </span>}
        </div>
    );
};

export { MyArObjectsList };
