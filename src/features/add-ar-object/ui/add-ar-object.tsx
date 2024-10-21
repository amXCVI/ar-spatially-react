import { APIProvider } from "@ar-kit/lib";

import { BackdropModal } from "@/shared/ui/modals";

import PlusIcon from "../assets/plus-icon.svg?react";

import { useAddArObjectHook } from "../model";
import { MapComponent } from "./map-component";

const AddArObject = () => {
    const { isOpenMapModal, googpeMapApiKey, openMapModal, closeMapModal } = useAddArObjectHook();

    return (
        <div
            className="flex items-center
    border-2 border-silver-sand hover:border-spanish-gray duration-300 cursor-pointer rounded-[90px]"
            onClick={openMapModal}
        >
            <div className="p-5">
                <PlusIcon />
            </div>
            <span className="roboto-medium-15 text-white">Add ar object to world</span>

            <BackdropModal isOpen={isOpenMapModal} closeModal={closeMapModal}>
                <APIProvider apiKey={googpeMapApiKey} region="EN" language="en">
                    <div className="w-full h-full min-h-[50vh] max-h-[50vh]">
                        <MapComponent />
                    </div>
                </APIProvider>
            </BackdropModal>
        </div>
    );
};

export { AddArObject };
