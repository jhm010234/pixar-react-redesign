import * as S from '@/pages/MovieDetail95/components/Introduction/Introduction.style';
import { Link } from 'react-router-dom';
import Showtimes from '@/components/Showtimes';


export default function index() {
  return (
    <>
      <S.TextIntroduction>
        <S.Title>
            <div>수세기 동안 사람들은 답을 찾기 위해</div>
            <div>우주를 향해 외쳐 왔습니다...</div>
        </S.Title>
        <S.Summary>
          <div>이 기상천외한 우주 대모험의 주인공은 엘리오입니다.</div>
          <div>상상력은 끝없이 넘치고, 외계인에 대한 관심도 남다른 ‘우주 덕후’ 소년이죠.</div>
          <div> 감독 도미 시는 “엘리오는 외계인에게 납치되는 걸 진지하게 꿈꾸는, 조금은 독특한 아이예요”라고 말합니다.</div>
          <div>엘리오는 지구에서는 자신에게 맞는 자리가 없다고 느끼고, 있는 그대로의 자신을 받아들여 주는 다른 세계로 가고 싶어 합니다.</div>
        </S.Summary>
        <Showtimes Director={'매들린 샤라피안'} Runtime={98} Rating={'8.67'}  />
      </S.TextIntroduction>
      
    </>

  )
}
