import BannerImg from '@/assets/image/InsideOut2/InsideOut2.png';
import LogoImg from "@/assets/image/InsideOut2/InsideOut2Logo.png";
import * as S from '@/pages/MovieDetail91/components/Banner/Banner.style';
import { useEffect, useState } from 'react';

export default function MovieDetail91() {
    const [scale, setScale] = useState(1.1);

    useEffect(()=>{
        const handleScroll = () => {
            if (window.scrollY > 30) {
                setScale(1.0);    // 스크롤하면 원본 크기로 축소
            } else {
                setScale(1.15);    // 맨 위면 다시 확대
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    },[])

  return (
    <>
    <div>
      <S.BackgroundImg scale={scale}><img src={BannerImg} /></S.BackgroundImg>
      <S.Logo><img src={LogoImg} /></S.Logo>
    </div>
    </>

  )
}
