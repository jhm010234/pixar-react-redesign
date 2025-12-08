import colors from "@/styles/colors";
import styled from "styled-components";

export const ButtonWrapper = styled.div`
    border-radius: 100%;
    width: 8rem;
    height: 8rem;
    position: relative;


    img{
        width: 100%;
        height: 100%;
        border-radius: 100%;
        object-fit: cover; 
        display: block;    
    }
`;

export const BackgroundOverlay = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(133,34,255,0.32);
`;

export const Text = styled.div`
    width: 70%;
    font-family: "PuradakGentleGothic";
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
    color: ${colors.white};
    text-align: center;
`;