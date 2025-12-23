import colors from "@/styles/colors";
import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;

    img{
        width: 100%;
        height: auto;
        object-fit: cover;
        position: relative;
    }
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    justify-content: center;
    align-items: center;

    img{
        width: 12.5rem;
    }
`;

export const Title = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    font-size: 5.5rem;
    color: ${colors.white};
    font-family: "Raleway", sans-serif;
    font-weight: 800;
    text-align: center;
    margin-bottom: 6.685rem;
`;

export const Description = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    color: ${colors.white};
    margin-bottom: 2.75rem;
    line-height: 1.75rem;
`;