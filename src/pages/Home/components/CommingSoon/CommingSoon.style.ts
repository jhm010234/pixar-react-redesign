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

export const BottomItem = styled.div`
    width: 22.5rem;
    height: 36.875rem;
    border-radius: 0 0 45% 45%;
    overflow: hidden;

     img{
         width: 22.5rem;
         height: 36.875rem;
         object-fit: cover;
     }

     img:hover{
        transform: scale(1.1);
        transition: transform 450ms cubic-bezier(0.2, 0.8, 0.2, 1);
    }
 `; 

 export const TopItem = styled.div`
    width: 22.5rem;
    height: 36.875rem;
    border-radius: 45% 45% 0 0;
    overflow: hidden;


    img{
         width: 22.5rem;
         height: 36.875rem;
         object-fit: cover;
     }

    img:hover{
        transform: scale(1.08);
        transition: transform 450ms cubic-bezier(0.2, 0.8, 0.2, 1);
    }
 `; 