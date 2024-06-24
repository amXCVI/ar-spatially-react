import { AppColors, AppShadows } from "@ar-kit/shared/styles/global-styles";
import styled from "styled-components";

interface MarkerOwnerAvatarProps {
    readonly fileUrl?: string;
}

type MarkerImgProps = {
    isMonochrome?: boolean;
};

export const MarkerContainer = styled.div`
    background: ${AppColors.fullDark};
    min-width: 79px;
    border-radius: 6px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    font-size: 15px;
    line-height: 18px;
    transform: translate(calc(-50% + 6px), calc(-100% - 8px));
    z-index: 3;
`;

export const MarkerImg = styled.img<MarkerImgProps>`
    position: relative;
    background-size: contain;
    background-position: center;
    height: 52px;
    border-radius: 4px;
    box-shadow: ${AppShadows.darkShadow};
    z-index: 2;
    -webkit-filter: ${(props) => (props.isMonochrome ? "grayscale(100%)" : "none")}; /* Safari 6.0 - 9.0 */
    filter: ${(props) => (props.isMonochrome ? "grayscale(100%)" : "none")};
    max-width: 100% !important;
`;

export const MarkerName = styled.span`
    position: absolute;
    bottom: 0;
    right: -10px;
    color: ${AppColors.white};
    background: ${AppColors.fullDark};
    border-radius: 4px;
    padding: 3px 5px;
    white-space: nowrap;
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 13px;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    z-index: 3;
`;

export const MarkerOwnerAvatar = styled.div<MarkerOwnerAvatarProps>`
    position: absolute;
    top: -5px;
    right: -10px;
    background: url(${(props) => props.fileUrl});
    background-size: contain;
    border: 2px solid ${AppColors.fullDark};
    border-radius: 14px;
    width: 26px;
    height: 26px;
    z-index: 3;
    & svg {
        fill: var(--main-color);
    }
`;

export const MarkerOwnerAvatarDefaultWrap = styled.div<MarkerOwnerAvatarProps>`
    position: absolute;
    top: -5px;
    right: -10px;
    background: #fff;
    border: 2px solid ${AppColors.fullDark};
    border-radius: 14px;
    width: 26px;
    height: 26px;
`;

export const MarkerOwnerAvatarDefault = styled.img<MarkerOwnerAvatarProps>`
    border-radius: 14px;
    width: 18px;
    height: 18px;
    z-index: 3;
    padding: 4px 0 0 4px;
`;
