import colors from "@/styles/colors";
import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    padding: 0 12.5rem;
    justify-content: space-between;
    margin-bottom: 10rem;
`;

export const TextWrapper = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    top: 3rem;
`;

export const Pixar = styled.div`
    display: flex;
    font-size: 3.75rem;
    margin-left: 0.5rem;
    margin-bottom: 0.5rem;
    font-family: "Raleway", sans-serif;
    color: ${colors.purple};
`;

export const EventTitle = styled.div`
    display: flex;
    font-size: 5.5rem;
    font-family: "PuradakGentleGothic";
    margin-bottom: 1rem;
    line-height: 6rem;
    
    background: linear-gradient(150deg, #7B2CFF 0%, ${colors.black} 40%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
`;

export const Description = styled.div`
    display: flex;
    line-height: 1.5rem;
    margin-left: 0.5rem;

`;

export const ContentWrapper = styled.div`
    display: flex;
    position: relative;
    gap: 5.375rem;
    align-items: center;
    top: 5rem;

    @media (max-width: 1024px) {
    display: flex;
    gap: 4rem;
  }

    @media (max-width: 768px) {
        
    }
`;

export const ItemWrapper = styled.div<{$bg:string, $side?: "top" | "bottom"}>`
    display: flex;
    position: relative;
    flex-direction: column;
    background-color: ${({$bg})=> $bg};
    border-radius: 2.5rem 0 2.5rem 0;
    width: 16rem;
      ${({ $side = "top" }) =>
    $side === "top" ? "top: 3rem;" : "bottom: 3rem;"}
`;

export const BrightWrapper = styled.div<{$bg:string}>`
    display: flex;
    flex-direction: column;
    background-color: ${({$bg})=> $bg};
    border-radius: 2.5rem 0 2.5rem 0;
    padding: 1.55rem 0;
    padding-left: 1.5rem;
    gap: 1.5rem;
`;

export const CardImage = styled.img<{ $side?: "left" | "right" }>`
  width: 18.875rem;
  position: relative;

  ${({ $side = "right" }) =>
    $side === "right" ? "right: 3rem;" : "left: 3rem;"}
`;

export const ContentText = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ContentTitle = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    font-family: "Raleway", sans-serif;
    font-weight: 300;
    color: ${colors.white};
    margin-bottom: 0.8rem;
    line-height: 1.7rem;

    div.Bold{
        font-weight: 600;
    }
`;

export const HashTagWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    div{
        display: flex;
        width: fit-content;
        color: ${colors.white};
        border-radius: 1.5rem;
        border: 1px solid ${colors.white};
        padding: 0.25rem 0.625rem;
        font-size: 0.85rem;

    }
`;

export const DetailButton = styled.div`
    display: flex;
    margin: 1rem 1.875rem;
    justify-content: space-between;
    color: ${colors.white};
    font-size: 0.90rem;

    img{
        height: 0.9rem;
    }
`;
