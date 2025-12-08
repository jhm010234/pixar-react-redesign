import BannerImg from '@/assets/image/InsideOut2/InsideOut2.png';
import LogoImg from "@/assets/image/InsideOut2/InsideOut2Logo.png";
import * as S from '@/pages/MovieDetail91/components/Banner/Banner.style';
import { useEffect, useState } from 'react';

export default function MovieDetail91() {
    const [scale, setScale] = useState(1.1);
    const [scale2, setScale2] = useState(0.9);

    useEffect(()=>{
        const handleScroll = () => {
            if (window.scrollY > 15) {
                setScale(1.0);  
                setScale2(0.9);  // 스크롤하면 원본 크기로 축소
            } else {
                setScale(1.15);    // 맨 위면 다시 확대
                setScale2(0.95);  // 스크롤하면 원본 크기로 축소

            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    },[])

  return (
    <>
    <div>
      <S.BackgroundImg scale={scale}><img src={BannerImg} /></S.BackgroundImg>
      <S.Logo scale={scale2}><img src={LogoImg} /></S.Logo>
    </div>
    </>

  )
}
