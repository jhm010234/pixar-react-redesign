import * as S from '@/pages/MovieDetail91/components/Introduction/Introduction.style';
import SeriesButton from '@/components/SeriesButton/index'
import InsideOut1 from '@/assets/image/MovieSeriesButton/InsideOut1.png'
import InsideOut2 from '@/assets/image/MovieSeriesButton/InsideOut2.png'
import { Link } from 'react-router-dom';
import Showtimes from '@/components/Showtimes';


export default function index() {
  return (
    <>
      <S.SeriesWrapper>
        <SeriesButton imgSrc={InsideOut1} showBorder={true}  />
        <S.CircleWrapper>
          <S.Circle></S.Circle>
          <S.Circle></S.Circle>
          <S.Circle></S.Circle>
        </S.CircleWrapper>
        <Link to='/films/91'>
             <SeriesButton imgSrc={InsideOut2} name="인사이드 아웃 2" showBorder={false} showOverlay={true} />
        </Link>
      </S.SeriesWrapper>
      <S.TextIntroduction>
        <S.Title>성장은 울퉁불퉁한 길을 지나가야 하는 법이죠...</S.Title>
        <S.Summary>
          <div>그리고 라일리에게도 예외는 아니에요.</div>
          <div>아빠가 샌프란시스코에서 새 직장을 시작하게 되면서, 라일리는 살던 미드웨스트에서 갑자기 떠나 낯선 곳으로 이사 오게 됩니다.</div>
          <div>우리 모두가 그렇듯 라일리도 기쁨, 두려움, 분노, 까칠, 슬픔이라는 감정들의 안내를 받죠.</div>
          <div>이 감정들은 라일리의 머릿속 ‘본부’라는 조종실에 살면서, 일상 속에서 라일리가 어떤 선택을 해야 할지 조언해 줍니다.</div>
          <br />
          <div>하지만 라일리와 감정들이 샌프란시스코에서의 새 삶에 적응하려 애쓰는 동안, 본부에는 점점 혼란이 찾아옵니다.</div>
          <div>라일리의 중심이자 가장 중요한 감정인 기쁨은 어떻게든 긍정적으로 이끌어가려 하지만,</div>
          <div>새로운 도시와 집, 학교에 적응하는 방법을 두고 감정들끼리 충돌하기 시작해요.</div>
        </S.Summary>
        <Showtimes Director={'피트 닥터'} Runtime={102} Rating={'9.05'}  />
      </S.TextIntroduction>
      
    </>

  )
}
