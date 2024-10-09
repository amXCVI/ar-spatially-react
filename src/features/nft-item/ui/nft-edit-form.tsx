import { MarkerInterface } from "@/shared/types";
import { DarkSilverTextAreaField, DarkSilverTextField } from "@/shared/ui/text-fields";

import { useEditNftFormHook } from "../domain";

interface NftEditFormProps {
    selectedMarker: MarkerInterface | null;
    handleClosePreview: () => void;
    updatedMarkerCallback: ({ updatedMarker }: { updatedMarker: MarkerInterface }) => void;
}
const NftEditForm = ({ selectedMarker, handleClosePreview, updatedMarkerCallback }: NftEditFormProps) => {
    const { register, handleSubmit, handleSubmitEdit, handleRejectEdit } = useEditNftFormHook({
        selectedMarker,
        handleClosePreview,
        updatedMarkerCallback,
    });

    return (
        <form onSubmit={handleSubmit(handleSubmitEdit)} className="flex flex-col gap-6 w-full">
            <DarkSilverTextField label="Title object" {...register("title")} />

            <DarkSilverTextAreaField
                label="Description"
                placeholder="Maximum 500 characters"
                {...register("description")}
                rows={5}
            />

            <div className="flex gap-3 justify-around md:max-w-prose md:mx-auto">
                <button
                    className="py-3 px-6 sm:px-12 bg-[#ffc1c126] border border-[#ff00002d] rounded-[32px] w-full sm:text-nowrap"
                    onClick={handleRejectEdit}
                >
                    Discard changes
                </button>

                <button
                    className="py-3 px-6 sm:px-12 bg-dark-silver/20 border border-white/15 rounded-[32px] w-full sm:text-nowrap"
                    onClick={() => {
                        handleSubmit(handleSubmitEdit);
                    }}
                >
                    Save changes
                </button>
            </div>
        </form>
    );
};

export { NftEditForm };
