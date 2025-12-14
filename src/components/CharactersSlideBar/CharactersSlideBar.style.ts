import styled from "styled-components";

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

export const CharacterItem = styled.div`
    display: flex;
    width: 10rem;
    height: 28.4rem;
    flex-shrink: 0;

    img{
        width: 10rem;
        height: 28.4rem;
        object-fit: cover;
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