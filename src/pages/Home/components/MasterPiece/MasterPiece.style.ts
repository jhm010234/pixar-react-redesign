import styled from "styled-components";
import colors from "@/styles/colors";

export const Wrapper = styled.div`
    display: flex;
    background-color: ${colors.black};
    padding: 17.5rem 12.5rem;
    flex-direction: column;
    justify-content: center;
    gap: 4.8rem;
`;

export const TitleWrapper = styled.div`
    display: flex;
    gap: 1rem;
    color: ${colors.yellow};
    font-size: 48px;
    justify-content: center;


    @media (max-width: 1024px) {
        display: flex;
        font-size: 32px;
    }

    @media (max-width: 768px) {
        display: flex;
        font-size: 24px;
        gap: 0.5rem;
    }
`;

export const LightText = styled.div`
    font-weight: 100;
    display: flex;
`;

export const BoldText = styled.div`
    font-weight: bold;
    display: flex;

`;


export const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    img{
        width: 1.5rem
    }
`;


export const ImageSlider = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;


export const Card = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    border-radius: 24px;
    overflow: hidden;
    cursor: pointer;

    will-change: transform, opacity;
    backface-visibility: hidden;

    transition: transform 450ms cubic-bezier(0.2, 0.8, 0.2, 1),
        opacity 300ms ease;

    img {
        width: 15.625rem;
        height: 22.1875rem;
        object-fit: cover;
        display: block;

        transition: transform 450ms cubic-bezier(0.2, 0.8, 0.2, 1);
    }

`;

// export const GradientOverlay = styled.div`
//   position: absolute;
//   inset: 0;
//   pointer-events: none;

//   background: linear-gradient(
//     180deg,
//     rgba(17, 17, 17, 0.12) 0%,
//     rgba(17, 17, 17, 0.55) 65%,
//     rgba(17, 17, 17, 0.92) 100%
//   );
// `;

export const Label = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${colors.white};
    transition: color 250ms ease;

    ${Card}:hover &,
    ${Card}:hover & * {
        color: rgba(255, 255, 255, 1);
    }
`;


export const Name = styled.div`
  margin-top: 0.4rem;
  font-size: 1.1rem;
  font-weight: 600;
`;

export const Year = styled.div`
  margin-top: 0.2rem;
  font-size: 0.95rem;
  opacity: 0.9;
`;

export const Controls = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;

  button {
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.28);
    color: rgba(255, 255, 255, 0.85);
    padding: 0.6rem 1rem;
    border-radius: 999px;
    cursor: pointer;
  }
`;

