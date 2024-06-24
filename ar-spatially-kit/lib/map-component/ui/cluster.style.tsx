import styled from "styled-components";
import { AppColors, AppShadows } from "@ar-kit/shared/styles/global-styles";

type MarkerImgProps = {
    isMonochrome?: boolean;
};

type ClusterCircleProps = {
    width?: number;
};

export const MapContainer = styled.div`
    width: 100vw;
    height: 100vh;
`;

export const ClusterContainer = styled.div`
    background: ${AppColors.fullDark};
    box-shadow: ${AppShadows.darkShadow};
    border-radius: 10px;
    padding: 4px;
    position: relative;
    cursor: pointer;
    display: flex;
    flex-wrap: nowrap;
    width: fit-content;
    font-size: 15px;
    line-height: 18px;
    color: ${AppColors.white};
    transform: translate(calc(-50% + 6px), calc(-100% - 8px));
    z-index: 5;
`;

export const ClusterSubContainer = styled.div`
    height: 29px;
`;

export const PreviewMarkerImg = styled.img<MarkerImgProps>`
    background-size: contain;
    background-position: center;
    width: 36px;
    height: 27px;
    border-radius: 4px;
    margin: 1px;
    z-index: 1;
    -webkit-filter: ${(props) => (props.isMonochrome ? "grayscale(100%)" : "none")}; /* Safari 6.0 - 9.0 */
    filter: ${(props) => (props.isMonochrome ? "grayscale(100%)" : "none")};
`;

export const ClusterCounts = styled.span`
    margin: auto 9px;
    font-family: RobotoMedium;
`;

export const ClusterPoint = styled.div`
    width: 14px;
    height: 14px;
    background-color: var(--main-color);
    border-radius: 14px;
`;

export const ClusterCircleOne = styled.div`
    width: 40px;
    height: 40px;
    background-color: var(--main-color) 66;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ClusterCircleTwo = styled.div<ClusterCircleProps>`
    width: ${(props) => (props.width ? props.width : 120)}px;
    height: ${(props) => (props.width ? props.width : 120)}px;
    background-color: var(--main-color) 26;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ClusterCircleThree = styled.div`
    background-color: none;
    padding: 6px;
    border: 1px solid var(--main-color);
    border-radius: 100%;
    position: absolute;
    transform: translate(calc(-50% + 6px), calc(-50% - 37px));
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MarkerArrow = styled.img`
    width: 12px;
    height: 8px;
    position: absolute;
    top: -8px;
    z-index: 1;
`;
