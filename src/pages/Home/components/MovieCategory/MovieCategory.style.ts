import styled from "styled-components";
import colors from "@/styles/colors";


export const Wrapper = styled.div`
    display: flex;
    padding: 0 100px;
    gap: 64px;
    flex-direction: column;

    @media (max-width: 1024px) {
        display: flex;
        gap: 24px;
        padding: 0 28px;

    }

    @media (max-width: 768px) {
        display: flex;
        gap: 16px;
        padding: 0 16px;
    }
`;

export const TitleWrapper = styled.div`
    display:flex;
    font-size: 48px;
    font-weight: 700;
    justify-content: center;

    @media (max-width: 1024px) {
        display: flex;
        font-size: 32px;
    }

    @media (max-width: 768px) {
        display: flex;
        font-size: 24px;
    }

`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
`;

export const List = styled.div`
    display: flex;
    position: relative;
    width: 200px;
    height: 300px;
    cursor: pointer;
    overflow: hidden;

    @media (max-width: 1024px) {
        display: flex;
        position: relative;
        width: 150px;
        height: 225px;
        cursor: pointer;
        overflow: hidden;
    }

    @media (max-width: 768px) {
        display: flex;
        position: relative;
        width: 100px;
        height: 150px;
        cursor: pointer;
        overflow: hidden;
    }
`;

export const ImageWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;

    img{
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: opacity 0.6s ease; 
    }

    img.hover {
        opacity: 0;
    }

    &:hover img.hover {
        opacity: 1;
    }

    &:hover img.default {
        opacity: 0;
    }
`;


export const BlackOpacity = styled.div`
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    pointer-events: none;
`;

export const Name = styled.div`
    display: flex;
    position: absolute;
    color: ${colors.white};
    font-size: 18px;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    pointer-events: none;

    @media (max-width: 1024px) {
        display: flex;
        font-size: 20px;
    }

    @media (max-width: 768px) {
        display: flex;
        font-size: 12px;
    }
`;
