import * as S from "@/components/Showtimes/Showtimes.style"
import DirectorIcon from '@/assets/icon/Director.png'
import RuntimeIcon from '@/assets/icon/Runtime.png'
import RatingIcon from '@/assets/icon/Rating.png'

interface ShowtimesProps {
    Director : string;
    Runtime : number;
    Rating : string;
}

export default function index({Director, Runtime, Rating }: ShowtimesProps) {
  return (
    <S.Wrapper>
        <S.Container>
            <img src={DirectorIcon} />
            <div>감독. {Director}</div>
        </S.Container>
        <S.Container>
            <img src={RuntimeIcon} />
            <div>{Runtime}분</div>
        </S.Container>
        <S.Container>
            <img src={RatingIcon} />
            <div>{Rating} / 10</div>
        </S.Container>
    </S.Wrapper>
  )
}
