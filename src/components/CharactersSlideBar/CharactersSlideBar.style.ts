import colors from "@/styles/colors";
import styled from "styled-components";

interface ItemProps {
  isOpen: boolean;
}

export const SliderWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;  /* wrapper 자체가 중앙 */
    margin-top: 3rem;
    padding: 0 12.5rem;
`;

export const SliderTrack = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.625rem;

    height: 35.5rem;
    width: auto;

    overflow-x: auto;
    overflow-y: hidden;

    flex-wrap: nowrap;

`;

export const CharacterItem = styled.div<ItemProps>`
    width: ${props => (props.isOpen ? "50rem" : "10rem")};
    height: 28.4rem;
    flex-shrink: 0;
    transition: all 0.3s ease;
    position: relative;
    display: block;


    img{
        width: 100%;
        height: 28.4rem;
        object-fit: cover;
        transition: all 0.3s ease;
    }

    .desc {
    display: ${props => (props.isOpen ? "block" : "none")};
    width: 48rem;
    position: absolute;
    top: auto;
    bottom: 0;
    margin-bottom: 5rem;
  }

    /* @media (max-width: 1600px) {
        display: flex;
        width: 10rem;
        height: 28.4rem;
        flex-shrink: 0;

        img{
            width: 10rem;
            height: 28.4rem;
            object-fit: cover;
        }

    } 

    @media (max-width: 768px) {

    } */
`;


export const TextWrapper = styled.div`
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
`;


export const NameText = styled.div`
    display: flex;
    font-size: 3.125rem;
    font-family: "PuradakGentleGothic";
    color: ${colors.white};
    margin: 0 3.5rem;
`;

export const DescriptionText = styled.div`
    display: flex;
    font-size: 1rem;
    color: ${colors.white};
    margin: 0 3.5rem;

`;