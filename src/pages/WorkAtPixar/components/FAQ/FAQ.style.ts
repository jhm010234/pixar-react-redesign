import colors from "@/styles/colors";
import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${colors.black};
    padding: 3rem 16.25rem 7.3rem 16.25rem;
`;

export const TitleWrapper = styled.div`
    display: flex;
    justify-content: center;
    color: ${colors.white};
    font-size: 3.75rem;
    font-family: "Raleway", sans-serif;
    font-weight: 700;
    margin-bottom: 7rem;
`;

export const ItemWrapper = styled.div<{ $open: boolean }>`
    border-radius: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: ${({ $open }) => ($open ? "rgba(248, 242, 255, 0.2)" : "transparent")};
    padding: 1.5rem 2.125rem;
`;

export const QuestionWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Left = styled.div`
    display: flex;
    gap: 1.5rem;
    align-items: center;

`;

export const QTitle = styled.div`
    color: ${colors.purple};
    font-size: 1.75rem;
    font-family: "Raleway", sans-serif;
    font-weight: 700;
`;

export const Question = styled.div`
    color: ${colors.white};
`;


export const AnswerWrapper = styled.div<{ $open: boolean }>`
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  position: relative;

  /* ✅ 슬라이드 핵심 */
  overflow: hidden;
  max-height: ${({ $open }) => ($open ? "300px" : "0px")};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transform: ${({ $open }) => ($open ? "translateY(0)" : "translateY(-8px)")};

  transition: max-height 0.35s ease, opacity 0.2s ease, transform 0.1s ease;

  /* 닫혀 있을 때 클릭/탭 방지 */
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};

  img{
    width: 1.5rem;
    margin-top: 0.3rem;
  }
`;

export const Answer = styled.div`
    color: ${colors.white};
    font-size: 1rem;
    line-height: 2.675rem;
`;
