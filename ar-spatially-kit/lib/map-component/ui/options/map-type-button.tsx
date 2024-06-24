import { useState } from "react";

import mapTypeIcon from "@ar-kit/assets/icons/icon-select-map-type.svg";

import { ButtonsContainer, MapTypeButton } from "./map-options.style";
import SelectMapTypeModal from "./map-type-modal/select-map-type-modal";

export const SelectedMapTypeButton = ({
    mapTypes,
    selectedMapTypeId,
    onSelectMapType,
}: {
    mapTypes: { name: string; mapTypeId: string }[];
    selectedMapTypeId: string;
    onSelectMapType: (e: string) => void;
}) => {
    const [isActiveButton, setIsActiveButton] = useState<boolean>(false);

    const onCloseSelectModal = () => {
        setIsActiveButton(false);
    };

    const onClickSelectMapTypeButton = () => {
        setIsActiveButton((e) => !e);
    };

    return (
        <ButtonsContainer onClick={onClickSelectMapTypeButton} className="map-type-button">
            <MapTypeButton isActiveButton={isActiveButton}>
                <img src={mapTypeIcon} />
            </MapTypeButton>

            <SelectMapTypeModal
                mapTypes={mapTypes}
                isOpenModal={isActiveButton}
                onCloseSelectModal={onCloseSelectModal}
                selectedMapTypeId={selectedMapTypeId}
                onSelectMapType={onSelectMapType}
            ></SelectMapTypeModal>
        </ButtonsContainer>
    );
};
