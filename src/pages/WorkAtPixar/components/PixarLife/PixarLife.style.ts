import colors from "@/styles/colors";
import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${colors.black};
    padding: 10.625rem 18rem;
    justify-content: center;
    align-items: center;
    gap: 6.5rem;
`;

export const LeftImgContent = styled.div`
    display: flex;
    background-color: #2F2F2F;
    border-radius: 1.25rem;
    width: 100%;
    justify-content: space-between;
`;

export const RightImgContent = styled.div`
    display: flex;
    background-color: #2F2F2F;
    border-radius: 1.25rem;
    width: 100%;
    justify-content: space-between;
`;

export const RightTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    color: ${colors.white};
    justify-content: center;
    align-items: end;
    margin-right: 4.125rem;
    gap: 4.3rem;
`;

export const LeftTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    color: ${colors.white};
    justify-content: center;
    align-items: start;
    margin-left: 4.125rem;
    gap: 4.3rem;

`;


export const RightTextContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
`;

export const LeftTextContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
`;

export const RightTitle = styled.div`
    text-align: end;
    font-family: "PuradakGentleGothic";
    font-size: 1.75rem;
`;

export const LeftTitle = styled.div`
    align-items: start;
    font-family: "PuradakGentleGothic";
    font-size: 1.75rem;
`;

export const RightDescription = styled.div`
    text-align: end;
`;

export const LeftDescription = styled.div`
    text-align: start;
`;
