import { ReactNode } from "react";
import { Sheet } from "react-modal-sheet";

interface MapBottomSheetProps {
    closeBottomSheet: () => void;
    isOpen: boolean;
    children?: ReactNode;
    onCloseStart?: () => void;
    className?: string;
}

const MapBottomSheet = ({ closeBottomSheet, isOpen, children, onCloseStart, className }: MapBottomSheetProps) => {
    return (
        <Sheet
            isOpen={isOpen}
            onClose={closeBottomSheet}
            detent="content-height"
            className={className}
            style={{ zIndex: "100" }}
            onCloseStart={onCloseStart}
        >
            <Sheet.Container style={{ backgroundColor: "#00000080" }}>
                <Sheet.Header className="backdrop-blur-sm" />
                <Sheet.Content className="backdrop-blur-sm">{children}</Sheet.Content>
            </Sheet.Container>
            <Sheet.Backdrop />
        </Sheet>
    );
};

export { MapBottomSheet };
