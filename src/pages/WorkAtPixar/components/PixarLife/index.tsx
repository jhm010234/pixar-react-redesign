import * as S from '../PixarLife/PixarLife.style'
import workAtPixar1 from "../../../../assets/image/WorkAtPixar/WorkAtPixar1.png"
import workAtPixar2 from "../../../../assets/image/WorkAtPixar/WorkAtPixar2.png"
import workAtPixarBtn1 from "../../../../assets/image/WorkAtPixar/WorkAtPixarBtn1.png"
import workAtPixarBtn2 from "../../../../assets/image/WorkAtPixar/WorkAtPixarBtn2.png"


export default function index() {
  return (
    <S.Wrapper>
        <S.LeftImgContent>
            <img src={workAtPixar1} />
            <S.RightTextWrapper>
                <S.RightTextContent>
                    <S.RightTitle>
                        영향력을 발휘할 수 있는 곳
                    </S.RightTitle>
                    <S.RightDescription>
                        우리는 자신이 이곳에 속해 있다고 느낄 때 <br />
                        최고의 일을 해낼 수 있다고 믿는다.<br />
                        픽사의 모든 직원은 각자의 방식으로<br />
                        스튜디오에 의미 있는 영향을 미친다.<br />
                        그들이 어떻게 자신의 재능과 시간,<br />
                        그리고 관점을 이야기 속에 녹여냈는지 만나보세요.
                    </S.RightDescription>
                </S.RightTextContent>

                <img src={workAtPixarBtn1} />
            </S.RightTextWrapper>
        </S.LeftImgContent>
        <S.RightImgContent>
            <S.LeftTextWrapper>
                <S.LeftTextContent>
                    <S.LeftTitle>
                        여정의 시작
                    </S.LeftTitle>
                    <S.LeftDescription>
                        픽사의 인턴십은 창의적인 커뮤니티 속에서 <br />
                        실제 영화 제작 경험을 쌓을 수 있는 기회를 제공합니다. <br />
                        신선하고 열정적인 동료들과 함께 기술적 역량을 발전시키고, <br />
                        예술적 비전을 키우며, 오래도록 이어질 인연을 만들어보세요. <br />
                    </S.LeftDescription>
                </S.LeftTextContent>
                <img src={workAtPixarBtn2} />
            </S.LeftTextWrapper>

            <img src={workAtPixar2} />
        </S.RightImgContent>
    </S.Wrapper>
  )
}
