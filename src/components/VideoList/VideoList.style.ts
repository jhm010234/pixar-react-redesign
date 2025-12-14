import colors from "@/styles/colors";
import styled from "styled-components";

export const VideoWrapper = styled.div`
    display: flex;
    gap: 5rem;
    justify-content: center;
    align-items: center;
    margin-top: 3.125rem;
`;

export const MainVideo = styled.div`
    width: 59rem;
    height: 37.5rem;
    border-radius: 2rem;
    position: relative;

    img{
        border-radius: 2rem;
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }
`;

export const WatchButton = styled.div`
    background-color: rgba(0,0,0,0.65);
    color: ${colors.white};
    border: 0.1875rem solid ${colors.purple};
    width: 10rem;
    height: 3.25rem;
    text-align: center;
    line-height: 3.25rem;
    border-radius: 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
`;

export const RightWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 37.5rem;
`;

export const SubVideo = styled.div`
    border-radius: 1.25rem;
    display: flex;
    gap: 1.5rem;
    flex-direction: column;

    img{
        border-radius: 1.25rem;

    }
    
`;

export const SubItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    img{
        object-fit: cover;
        width: 10rem;
        height: 5.957rem;
    }

    span{
        display: flex;
        font-size: 0.875rem;
        justify-content: center;
    }
`;

export const ButtonWrap = styled.div`
    display: flex;
    gap: 3.25rem;

`;
export const NavPrev = styled.div`
    display: flex;
`;

export const NavNext = styled.div`
    display: flex;
`;