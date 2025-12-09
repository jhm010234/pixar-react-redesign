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
        <Link to='/films/44'>
            <SeriesButton imgSrc={InsideOut1} name="인사이드 아웃 1" showBorder={false} showOverlay={true} />
        </Link>
        <S.CircleWrapper>
          <S.Circle></S.Circle>
          <S.Circle></S.Circle>
          <S.Circle></S.Circle>
        </S.CircleWrapper>
        <SeriesButton imgSrc={InsideOut2} showBorder={true}  />
      </S.SeriesWrapper>
      <S.TextIntroduction>
        <S.Title>새로 싹튼 십대의 마음으로</S.Title>
        <S.Summary>
          <div>영화 인사이드 아웃 2는 십대가 된 라일리의 머릿속으로 다시 들어갑니다.</div>
          <div>본부가 갑작스러운 철거를 맞으며 전혀 예상치 못한 것, 바로 새로운 감정들을 위한 자리가 마련됩니다.</div>
          <div>그동안 라일리의 삶을 이끌어온 기쁨, 슬픔, 화남, 두려움, 까칠함은 불안이라는 새로운 감정이 나타나자 어떻게 받아들여야 할지 혼란스러워합니다.</div>
          <div>그리고 불안은 혼자가 아닌 것처럼 보입니다.</div>
        </S.Summary>
        <Showtimes Director={'피트 닥터'} Runtime={100} Rating={'8.89'}  />
      </S.TextIntroduction>
      
    </>

  )
}
