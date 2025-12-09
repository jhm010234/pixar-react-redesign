import colors from "@/styles/colors";
import styled from "styled-components";

export const SeriesWrapper = styled.div`
    display: flex;
    margin-top: 9rem;
    justify-content: center;
    align-items: center;
`;

export const CircleWrapper = styled.div`
    display: flex;
    gap: 20px;
    margin: 0 4rem;
`;

export const Circle = styled.div`
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 100%;
    background-color: ${colors.purple};
`;

export const TextIntroduction = styled.div`
    margin-top: 7.625rem;
    display: flex;
    flex-direction: column;
    gap: 5.5rem;
`;

export const Title = styled.div`
    font-family: "PuradakGentleGothic";
    font-size: 3rem;
    text-align: center;
`;

export const Summary = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div{
        line-height: 2rem;
    }
`;

export const Showtimes = styled.div`
    display: flex;
    gap: 6.25rem;
`;