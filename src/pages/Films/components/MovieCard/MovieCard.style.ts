import colors from "@/styles/colors";
import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const ImageWrapper = styled.div`
    width: 266px;
    height: 400px;
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const TextWrapper = styled.div`
    width: 266px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const Tag = styled.div`
    background-color: ${colors.black};
    color: ${colors.white};
    font-size: 14px;
    padding: 8px 16px;
    width: fit-content;
    border-radius: 41px;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const Title = styled.div``;

export const Year = styled.div``;

