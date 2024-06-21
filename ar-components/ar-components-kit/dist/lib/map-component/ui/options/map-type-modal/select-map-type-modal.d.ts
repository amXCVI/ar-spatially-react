type SelectMapTypeModal = {
    onCloseSelectModal: () => void;
    isOpenModal: boolean;
    mapTypes: {
        name: string;
        mapTypeId: string;
    }[];
    selectedMapTypeId: string;
    onSelectMapType: (e: string) => void;
    txt_map_change_map_type_view?: string;
};
declare const SelectMapTypeModal: ({ onCloseSelectModal, isOpenModal, mapTypes, selectedMapTypeId, onSelectMapType, txt_map_change_map_type_view, }: SelectMapTypeModal) => import("react/jsx-runtime").JSX.Element;
export default SelectMapTypeModal;
