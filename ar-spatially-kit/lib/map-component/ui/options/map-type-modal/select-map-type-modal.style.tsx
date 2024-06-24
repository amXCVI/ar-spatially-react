import styled from "styled-components";
import { AppMedia, AppColors } from "@ar-kit/shared/styles/global-styles";

type MapTypeItemProps = {
    isSelected: boolean;
};

type IconVectorProps = {
    isOpenModal: boolean;
};

export const Container = styled.div`
    border-radius: 20px;
    width: auto;
    max-width: 400px;
    position: absolute;
    right: 56px;
    top: -8px;
    @media (max-width: ${AppMedia.sm}) {
        position: fixed;
        width: calc(100vw - 20px);
        top: 100px;
        right: 10px;
        left: 10px;
    }
`;

export const IconVector = styled.img<IconVectorProps>`
    width: 12px;
    height: 8px;
    position: absolute;
    top: 34px;
    left: calc(100% - 3px);
    transform: rotate(90deg);
    display: ${(props) => (props.isOpenModal ? "block" : "none")};
    @media (max-width: ${AppMedia.sm}) {
        display: none;
    }
`;

export const MapTypeTitle = styled.h3`
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: ${AppColors.textDefault};
    margin: 0 0 10px 0;
`;

export const Row = styled.div`
    display: flex;
    margin: 0 -1px;
`;

export const MapTypeItem = styled.div<MapTypeItemProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    padding: 12px 25px;
    margin: 0 1px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    background-color: ${(props) => (props.isSelected ? "var(--main-color)" : AppColors.grayLight)};
    color: ${(props) => (props.isSelected ? AppColors.white : AppColors.darkGrey)};
    width: 100%;
    cursor: pointer;
`;
