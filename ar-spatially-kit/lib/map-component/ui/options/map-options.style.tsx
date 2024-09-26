import { AppBorders, AppColors, AppMedia } from "@ar-kit/shared/styles/global-styles";
import styled from "styled-components";

type MapTypeButtonProps = {
    isActiveButton: boolean;
};

export const MapOptionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: absolute;
    right: 28px;
    top: calc(50vh - 90px);
    margin: auto 0;
    @media (max-width: ${AppMedia.sm}) {
        right: 8px;
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: ${AppColors.darkGrey};
    /* border: ${AppBorders.strokeWhite}; */
    border-radius: 30px;
    button {
        :active {
            background-color: var(--main-color);
        }
    }

    @media (min-width: ${AppMedia.md}) {
        border: ${AppBorders.strokeWhite};
    }
`;

export const ZoomButton = styled.div`
    cursor: pointer;
    height: 50px;
    width: 45px;
    background: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
`;

export const ZoomButtonPlus = styled(ZoomButton)`
    border-radius: 25px 25px 0 0;
`;

export const ZoomButtonMinus = styled(ZoomButton)`
    border-radius: 0 0 25px 25px;
`;

export const GeoButton = styled.div`
    cursor: pointer;
    height: 45px;
    width: 45px;
    background: none;
    border: none;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MapTypeButton = styled.button<MapTypeButtonProps>`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 45px;
    width: 45px;
    background: none;
    background: ${(props) => (props.isActiveButton ? "var(--main-color)" : AppColors.darkGrey)};
    border: none;
    border-radius: 25px;
`;
