import styled from "styled-components";

interface BackgroundProps {
  scale: number;
}

interface LogoProps {
  scale: number;
}

export const BackgroundImg = styled.div<BackgroundProps>`
    width: 100%;
    overflow: hidden;   /* 확대되어 튀어나오는 부분 숨김 */
    position: relative;
  
  img {
    width: 100%;
    transform: scale(${((props)=> props.scale)});   /* 1.0 → 기본, 1.1 → 10% 확대 */
    transform-origin: center;
    transition: transform 0.6s ease;
    display: block; /* img 밑 여백 방지 */
  }


`;

export const Logo = styled.div<LogoProps>`
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%); 

    img {
    width: 100%;
    transform: scale(${((props)=> props.scale)});   /* 1.0 → 기본, 1.1 → 10% 확대 */
    transform-origin: center;
    transition: transform 0.6s ease;
    display: block; /* img 밑 여백 방지 */
  }


`;