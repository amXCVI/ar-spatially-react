import { ReactNode } from "react";
import { Sheet } from "react-modal-sheet";

interface MapBottomSheetProps {
    closeBottomSheet: () => void;
    isOpen: boolean;
    children?: ReactNode;
}

const MapBottomSheet = ({ closeBottomSheet, isOpen, children }: MapBottomSheetProps) => {
    return (
        <Sheet isOpen={isOpen} onClose={closeBottomSheet}>
            <Sheet.Container>
                <Sheet.Header />
                <Sheet.Content>{children}</Sheet.Content>
            </Sheet.Container>
            <Sheet.Backdrop />
        </Sheet>
    );
};

export { MapBottomSheet };
