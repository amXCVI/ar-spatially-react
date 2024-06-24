import ModalComponent from "@ar-kit/shared/components";

import iconVectorPath from "@ar-kit/assets/icons/icon-popup-vector.svg";

import { Container, IconVector, MapTypeItem, MapTypeTitle, Row } from "./select-map-type-modal.style";

type SelectMapTypeModal = {
    onCloseSelectModal: () => void;
    isOpenModal: boolean;
    mapTypes: { name: string; mapTypeId: string }[];
    selectedMapTypeId: string;
    onSelectMapType: (e: string) => void;

    txt_map_change_map_type_view?: string;
};

const SelectMapTypeModal = ({
    onCloseSelectModal,
    isOpenModal,
    mapTypes,
    selectedMapTypeId,
    onSelectMapType,

    txt_map_change_map_type_view,
}: SelectMapTypeModal) => {
    const onCloseModal = () => {
        onCloseSelectModal();
    };

    return (
        <Container>
            <ModalComponent
                isOpenModal={isOpenModal}
                style={{ width: "auto", padding: "21px 15px" }}
                onCloseModal={onCloseModal}
            >
                <>
                    <MapTypeTitle>{txt_map_change_map_type_view ?? "Map type view"}</MapTypeTitle>
                    <Row>
                        {mapTypes.map((item, index) => (
                            <MapTypeItem
                                key={`${item.mapTypeId}-${index}`}
                                isSelected={selectedMapTypeId === item.mapTypeId ? true : false}
                                onClick={() => onSelectMapType(item.mapTypeId)}
                            >
                                {item.name}
                            </MapTypeItem>
                        ))}
                    </Row>
                </>
            </ModalComponent>
            <IconVector src={iconVectorPath} isOpenModal={isOpenModal} />
        </Container>
    );
};

export default SelectMapTypeModal;
