import colors from "@/styles/colors";
import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 6.25rem;
    background-color: #004D25;
`;

export const FirstWrapper = styled.div`
    display: flex;
    position: relative;
`;

export const BgImage = styled.img`
    display: block;
    width: 100%;
`;

export const FirstText = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    color: ${colors.white};
    width: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    gap: 6.25rem;
`;

export const SmallText = styled.div`
    display: flex;
    justify-content: space-between;
    color: #A0A0A0;
    gap: 19rem;
    padding: 0 9rem;

`;

export const Place = styled.div`
    font-family: "Raleway", sans-serif;
    display: flex;
    align-items: center;
    flex-direction: column;
    line-height: 1.5rem;
`;

export const BoldText = styled.div`
    font-weight: 700;
`;

export const Date = styled.div`
    display: flex;
    font-family: "PuradakGentleGothic";
    font-size: 1.5rem;
`;

export const BigText = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 6.25rem;
`;

export const CurrentDate = styled.div`
    display: flex;
    font-family: "PuradakGentleGothic";
    font-size: 2.5rem;
`;

export const CurrentPlace = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Raleway", sans-serif;
    gap: 0.5rem;
`;

export const EventName = styled.div`
    display: flex;
    font-size: 1.5rem;
    line-height: 2.5rem;
`;



// export const Wrapper = styled.div``;


export const SecondWrapper = styled.div`
    display: flex;
    background-color: #004D25;
    color: ${colors.white};
    padding: 6.75rem 4.8rem;
    gap: 18rem;
    justify-content: space-between;
    align-items: end;
     font-family: 'S-CoreDream-3Light', sans-serif;
`;

export const LeftWrapper = styled.div`
    display: flex;
    gap: 1.875rem;
    font-weight: 300;

`;

export const LineImg = styled.img`
    display: flex;
    position: relative;
    width: 5rem;       /* 선 이미지면 보통 이 정도 */
    height: 1px;    /* 원하는 길이 */
    object-fit: contain;
    flex-shrink: 0;   /* 눌려서 사라지는 거 방지 */
    top: 1.1rem;
`;

export const SecondTitle = styled.div`
    display: flex;
    font-size: 1.5rem;
    line-height: 2.5rem;
`;

export const DetailBtn = styled.img`
    display: flex;
    width: 11rem;
`;

export const RightWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.125rem;

    div{
        display: flex;
        line-height: 2rem;
    }
`;


export const ThirdWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3.3rem 0;
`;

export const FourthWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 15.6rem;
    color: ${colors.white};
    gap: 5.3rem;
    margin-top: 8.75rem;
    margin-bottom: 15rem;
`;


export const FourthTitle = styled.div`
    display: flex;
    justify-content: center;
    font-family: "Raleway", sans-serif;
    font-weight: 700;
    font-size: 1.875rem;
    padding-top: 1.25rem;
    border-top: 1px solid white;
`;


export const FourthItem = styled.div`
    display: flex;
    gap: 13rem;
`;

export const ItemBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3.4rem;
    width: 16rem;
`;

export const ItemImg = styled.img`
    display: flex;
    width: 12.5rem;
    margin: 0 auto;
    justify-content: center;
`;

export const FourthText = styled.div`
    display: flex;
    width: 12.5rem;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    
`;


export const ItemTItle = styled.div`
    display: flex;
    width: 16rem;
    font-size: 1.255rem;
    font-weight: 600;
    justify-content: center;
    text-align: center;
`;


export const Description = styled.div`
    display: flex;
    text-align: center;
    line-height: 1.5rem;
    justify-content: center;
    width: 16rem;

`;


// export const Wrapper = styled.div``;


// export const Wrapper = styled.div``;