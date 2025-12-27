import * as S from "./Top.style"
import EmotionsImage from "@/assets/image/PixarEvent/EmotionsImage.png"
import ScienceImage from "@/assets/image/PixarEvent/ScienceImage.png"
import colors from "@/styles/colors";
import ArrowImg from "@/assets/icon/Arrows/PixarEventArrow.png"
import { useState } from "react";


export default function index() {
    const [content, setContent] = useState("none");

  return (
    <S.Wrapper>
        <S.TextWrapper>
            <S.Pixar>PIXAR</S.Pixar>
            <S.EventTitle>이벤트 <br/> 총집합</S.EventTitle>
            <S.Description>PIXAR의 다양한 이벤트를 <br/>한 눈에 확인하세요!</S.Description>
        </S.TextWrapper>
        <S.ContentWrapper>
            <S.ItemWrapper $bg="#2A1469" $side="bottom" >
                <S.BrightWrapper $bg="#7E3BFF" >
                    <S.CardImage src={EmotionsImage} $side="right" />
                    <S.ContentText>
                        <S.ContentTitle>
                            <div className="Bold">Emotions</div>
                            <div >At Play</div>
                        </S.ContentTitle>
                        <S.HashTagWrapper>
                            <div>감정</div>
                            <div>기억</div>
                            <div>상상력</div>
                            <div>체험형 전시</div>
                        </S.HashTagWrapper>
                    </S.ContentText>

                </S.BrightWrapper>
                <S.DetailButton>
                    <div>자세히 보기</div>
                    <img src={ArrowImg} />
                </S.DetailButton>
            </S.ItemWrapper>

            <S.ItemWrapper $bg="#004D25" $side="top">
                <S.BrightWrapper $bg="#00C853" >
                    <S.CardImage src={ScienceImage} $side="left" />
                    <S.ContentText>
                        <S.ContentTitle>
                            <div ><div className="Bold">The Science</div>Behind Pixar</div>
                        </S.ContentTitle>
                        <S.HashTagWrapper>
                            <div>과학·기술·공학·수학</div>
                            <div>컴퓨터 애니메이션 기술</div>
                            <div>인터랙티브 체험</div>
                            <div>픽사 제작 과정</div>
                        </S.HashTagWrapper>
                    </S.ContentText>
                </S.BrightWrapper>
                <S.DetailButton>
                    <div>자세히 보기</div>
                    <img src={ArrowImg} />
                </S.DetailButton>
            </S.ItemWrapper>

        </S.ContentWrapper>
    </S.Wrapper>
  )
}
