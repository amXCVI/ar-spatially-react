import { AllFeedsList } from "@/features/all-feeds-list";
import { AllObjectsList } from "@/features/all-objects-list/ui/all-objects-list";

import { UserPageModes } from "@/shared/config/constants";
import { useDescription } from "@/shared/lib/use-page-meta-hooks";

import { useUserPageHook } from "../model";

const UserPage = () => {
    useDescription(
        "Create, share, and manage your AR objects. From uploading and moderating to collecting AR NFTs, AR Spatially puts control in your hands.",
    );

    const { pageMode, handleChangePageMode } = useUserPageHook();

    return (
        <div className="flex flex-col gap-6 h-full pb-20">
            <div className="flex gap-6 mx-auto">
                {Object.values(UserPageModes).map((item) => {
                    return (
                        <button
                            className={`${pageMode === item ? "text-blue-accent" : "text-white"} py-2 px-6 border rounded-xl`}
                            key={item}
                            onClick={() => handleChangePageMode(item)}
                        >
                            {item}
                        </button>
                    );
                })}
            </div>

            {pageMode === UserPageModes.OBJECTS ? <AllObjectsList /> : <AllFeedsList />}
        </div>
    );
};

export { UserPage };
