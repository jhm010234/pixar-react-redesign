import * as S from "./Emotions.style"
import BgImage from "@/assets/image/PixarEvent/Emotions/EmotionsBackground.png"
import DetailBtn from "@/assets/image/PixarEvent/DetailButton.png"
import LineImage from "@/assets/image/PixarEvent/LineImage.png"
import FullImage from "@/assets/image/PixarEvent/Emotions/EmotionsFullImg.png"
import PhotosImg1 from "@/assets/image/PixarEvent/Emotions/EmotionsImg1.png"
import PhotosImg2 from "@/assets/image/PixarEvent/Emotions/EmotionsImg2.png"
import PhotosImg3 from "@/assets/image/PixarEvent/Emotions/EmotionsImg3.png"
import PhotosImg4 from "@/assets/image/PixarEvent/Emotions/EmotionsImg4.png"
import PhotosImg5 from "@/assets/image/PixarEvent/Emotions/EmotionsImg5.png"




export default function index() {
  return (
    <S.Wrapper>
        <S.FirstWrapper>
            <S.BgImage src={BgImage} />
            <S.FirstText>
                <S.SmallText>
                    <S.Date>20250119</S.Date>
                    <S.Place><S.BoldText>지니아 아쿠아리움 & 해양과학센터 (Virginia Aquarium & Marine Science Center)<br/></S.BoldText>버지니아 비치, 버지니아주</S.Place>
                    <S.Date>20250504</S.Date>
                </S.SmallText>
                <S.BigText>
                    <S.CurrentDate>20250517</S.CurrentDate>
                    <S.CurrentPlace>
                        <S.EventName> <S.BoldText>E M O T I O N S  &nbsp;&nbsp;</S.BoldText>A T   P L A Y</S.EventName>
                        <S.BoldText>더 도슘 (The DoSeum)<br/></S.BoldText>샌안토니오, 텍사스주
                        </S.CurrentPlace>
                    <S.CurrentDate>20250831</S.CurrentDate>
                </S.BigText>
                <S.None>
                    <S.Date>20251011</S.Date>
                    <S.Place><S.BoldText>센터 포 사이언스 앤 인더스트리 (Center for Science and Industry, COSI)<br/></S.BoldText>오하이오주 콜럼버스</S.Place>
                    <S.Date>20260526</S.Date>
                </S.None>
            </S.FirstText>
        </S.FirstWrapper>
        <S.SecondWrapper>
            <S.LeftWrapper>
                <S.LineImg src={LineImage} />
                <S.SecondTitle>감정·기억·상상을 체험하는<br/>인사이드 아웃 인터랙티브 전시</S.SecondTitle>
            </S.LeftWrapper>
            <S.RightWrapper>
                <div>
                   디즈니와 픽사의 대표 애니메이션 인사이드 아웃을 기반으로 한 최초의 인터랙티브 전시로,<br/>
                    어린이부터 어른까지 모든 방문객이<br/>
                    감정, 기억, 상상이 우리의 일상 속에서 얼마나 중요한 역할을 하는지를 이해할 수 있도록 구성되어 있다.<br/>
                    이 전시는 피츠버그 어린이 박물관(Children’s Museum of Pittsburgh)과 픽사 애니메이션 스튜디오가<br/>
                    공동으로 개발했으며, 영화 속 다섯 가지 핵심 감정인 기쁨, 슬픔, 분노, 까칠함, 두려움을 중심으로 전개된다.<br/>
                    다양한 체험형 활동과 디지털 전시를 통해 감정을 표현하는 방법과 타인의 감정을 이해하는 방식을
                    직접 경험할 수 있다.
                </div>
                <S.DetailBtn src={DetailBtn} />
            </S.RightWrapper>
        </S.SecondWrapper>
        <S.ThirdWrapper>
            <img src={FullImage} />
        </S.ThirdWrapper>
        <S.FourthWrapper>
            <S.FourthTitle>
                PHOTOS
            </S.FourthTitle>
            <S.FourthItem>
                <S.ItemBox>
                    <S.ItemImg src={PhotosImg1} />
                    <S.ItemImg src={PhotosImg2} />
                    <S.ItemImg src={PhotosImg3} />
                </S.ItemBox>
                <S.ItemBox>
                    <S.ItemImg src={PhotosImg4} />
                    <S.ItemImg src={PhotosImg5} />
                </S.ItemBox>
            </S.FourthItem>
        </S.FourthWrapper>
    </S.Wrapper>
  )
}
