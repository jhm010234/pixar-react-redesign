import colors from "@/styles/colors";
import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: ${colors.black};
    padding: 14rem 12.5rem;
    gap: 4.375rem;
`;

export const Title = styled.div`
    display: flex;
    align-items: baseline;

    img{
        display: flex;
    }
`;

export const ItemWrapper = styled.div`
    display: flex;
    gap: 2rem;
`;

 export const TopTextWrapper = styled.div`
    position: absolute;
    top: 0;
    right: -2rem;
`;

 export const BottomTextWrapper = styled.div`
    position: absolute;
    bottom: 0;
    right: -2rem;
`;

export const Item = styled.div`
    display: flex;
    position: relative;

    &:hover ${TopTextWrapper},
    &:hover ${TopTextWrapper} * ,
    &:hover ${BottomTextWrapper},
    &:hover ${BottomTextWrapper} * {
        color: ${colors.purple};
        transition: transform 450ms cubic-bezier(0.2, 0.8, 0.2, 1);
    }
`;

export const BottomItem = styled.div`
    width: 22.5rem;
    height: 36.875rem;
    border-radius: 0 0 40% 40%;
    overflow: hidden;
    position: relative;

    &:hover img{
        transform: scale(1.1);
        transition: transform 450ms cubic-bezier(0.2, 0.8, 0.2, 1);
    }

     img{
         width: 22.5rem;
         height: 36.875rem;
         object-fit: cover;
     }
 `; 

 export const TopItem = styled.div`
    width: 22.5rem;
    height: 36.875rem;
    border-radius: 40% 40% 0 0;
    overflow: hidden;
    position: relative;


    img{
         width: 22.5rem;
         height: 36.875rem;
         object-fit: cover;
     }

    &:hover img{
        transform: scale(1.1);
        transition: transform 450ms cubic-bezier(0.2, 0.8, 0.2, 1);
    }
 `; 

export const OpacityLayerBottom = styled.div`
    position: absolute;
    width: 22.5rem;
    height: 36.875rem;
    border-radius: 0 0 40% 40%;
    pointer-events: none;
    overflow: hidden;
    background: linear-gradient(
        180deg,
        rgba(17, 17, 17, 1) 0%,
        rgba(17, 17, 17, 0.5) 40%,
        rgba(17, 17, 17, 0) 50%
  );
    top: 0;
`;

export const OpacityLayerTop = styled.div`
    position: absolute;
    width: 22.5rem;
    height: 36.875rem;
    border-radius: 40% 40% 0 0;
    pointer-events: none;
    overflow: hidden;
    background: linear-gradient(
        180deg,
        rgba(17, 17, 17, 0) 50%,
        rgba(17, 17, 17, 0.5) 60%,
        rgba(17, 17, 17, 1) 100%
  );
    top: 0;
`;
