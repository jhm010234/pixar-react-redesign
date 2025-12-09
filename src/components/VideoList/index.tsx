import * as S from "@/components/VideoList/VideoList.style"
import { useState } from "react";
import { Link } from "react-router-dom";
// import {LeftArrow} from "@/assets/icon/Arrows/left_btn_able.png"
import LeftArrowDisabled from "@/assets/icon/Arrows/left_btn_disable.png"
import RightArrow from "@/assets/icon/Arrows/right_btn_able.png"
// import {RightArrowDisabled} from "@/assets/icon/Arrows/right_btn_disable.png"

interface Trailer {
  id: number;
  title: string;
  thumbnail: string;
  videoUrl: string; 
}

interface TrailerProps {
  trailers: Trailer[];
}


export default function index({trailers} : TrailerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = trailers[currentIndex];

  const goPrev = () => {
    if(currentIndex >0){
      setCurrentIndex((prev) => prev-1);
    }
  }

  const goNext = () => {
    if(currentIndex < trailers.length-1){
      setCurrentIndex((prev) => prev+1);
    }
  }

  return (
    <S.VideoWrapper>
      <S.MainVideo>
        <Link to={current.videoUrl}>
          <img src={current.thumbnail} />
          <S.WatchButton>Watch Now</S.WatchButton>
        </Link>
      </S.MainVideo>

      <S.RightWrapper>
        <S.SubVideo>
          {trailers.map((t, i) => {
              if ( i=== currentIndex) return null;

              return(
              <S.SubItem
                key={t.id}
                active={i === currentIndex}
                onClick={() => setCurrentIndex(i)}
              >
                <img src={t.thumbnail} alt={t.title} />
                <span>{t.title}</span>
              </S.SubItem>
              );

})}
        </S.SubVideo>
        
        <S.ButtonWrap>
          <S.NavPrev onClick={goPrev}><img src={LeftArrowDisabled} /></S.NavPrev>
          <S.NavNext onClick={goNext}><img src={RightArrow} /></S.NavNext>
        </S.ButtonWrap>
      </S.RightWrapper>

      

    </S.VideoWrapper>
  )
}
