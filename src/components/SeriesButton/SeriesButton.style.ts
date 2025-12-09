import colors from "@/styles/colors";
import styled from "styled-components";

interface ButtonWrapperProps {
    showBorder?: boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    border-radius: 100%;
    width: 8rem;
    height: 8rem;
    position: relative;
    border : ${(props) => (props.showBorder ? "5px solid #8522FF" : "none")};


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
    text-shadow: 0px 4px 10px rgba(0, 0, 0, 1);
`;