import styled from "styled-components";
import colors from "@/styles/colors";

export const TitleWrapper = styled.div`
    display: flex;
    gap: 1rem;
    color: ${colors.yellow};
    font-size: 48px;
    justify-content: center;

    @media (max-width: 1024px) {
        display: flex;
        font-size: 32px;
    }

    @media (max-width: 768px) {
        display: flex;
        font-size: 24px;
        gap: 0.5rem;
    }
`;

export const LightText = styled.div`
    font-weight: 100;
`;

export const BoldText = styled.div`
    font-weight: bold;
`;


export const ContentWrapper = styled.div`

`;


export const ImageSlider = styled.div`

`;

