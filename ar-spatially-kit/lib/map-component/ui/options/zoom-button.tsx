import mapPlusIcon from "@ar-kit/assets/icons/icon-map-plus.svg";
import mapMinusIcon from "@ar-kit/assets/icons/icon-map-minus.svg";
import { ButtonsContainer, ZoomButtonMinus, ZoomButtonPlus } from "./map-options.style";

type ZoomButtonProps = {
    onChangeMapZoom: (zoom: number) => void;
    zoom?: number;
};

export const ZoomButton = ({ onChangeMapZoom, zoom }: ZoomButtonProps) => {
    const handleClickPlusZoom = () => {
        if (zoom) onChangeMapZoom(zoom + 1);
    };

    const handleClickMinusZoom = () => {
        if (zoom) onChangeMapZoom(zoom - 1);
    };

    return (
        <ButtonsContainer className="zoom-buttons">
            <ZoomButtonPlus onClick={handleClickPlusZoom}>
                <img src={mapPlusIcon} />
            </ZoomButtonPlus>
            <ZoomButtonMinus onClick={handleClickMinusZoom}>
                <img src={mapMinusIcon} />
            </ZoomButtonMinus>
        </ButtonsContainer>
    );
};
