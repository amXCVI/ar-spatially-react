import { AllObjectsList } from "@/features/all-objects-list";
import { ObjectsFilter } from "@/features/objects-filter";

const ObjectsPage = () => {
    return (
        <div
            className="flex flex-col-reverse lg:grid grid-cols-4
                       container mx-auto h-full px-6"
        >
            <div className="col-span-3">
                <AllObjectsList />
            </div>

            <ObjectsFilter />
        </div>
    );
};

export { ObjectsPage };
