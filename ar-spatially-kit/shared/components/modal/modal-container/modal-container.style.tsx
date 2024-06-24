import { AppColors, AppMedia } from "@ar-kit/shared/styles/global-styles";
import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    //width: 380px;
    max-width: calc(100vw - 80px);
    height: auto;
    box-sizing: border-box;
    padding: 56px 30px 18px 30px;
    background-color: ${AppColors.white};
    border-radius: 20px;
    z-index: 100;
    @media (max-width: ${AppMedia.sm}) {
        max-width: calc(100vw - 10px);
    }
`;

export const CloseIcon = styled.div`
    position: absolute;
    right: 25px;
    top: 25px;
    cursor: pointer;
`;
