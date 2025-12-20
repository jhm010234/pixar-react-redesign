import colors from "@/styles/colors";
import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 8.75rem;
`;

export const Title = styled.div`
    display: flex;;
    overflow: hidden;
    height: 85px;
    width: 100%;
    justify-content: end;
`;

export const Text = styled.div`
    display: flex;
    font-size: 6.25rem;
    color: ${colors.white};
    font-family: "PuradakGentleGothic";
    justify-content: end;
`;

export const MovieTitle = styled.div`
    display: flex;
    color: ${colors.white};
    font-size: 1.25rem;
    justify-content: end;
`;