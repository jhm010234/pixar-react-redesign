import React from 'react'
import * as S from "./MovieCategory.style"
import Feature1 from "@/assets/image/Movie/Feature/201906_토이 스토리 4.webp"
import Feature2 from "@/assets/image/Movie/Feature/202306_엘리멘탈.webp"
import Short1 from "@/assets/image/Movie/Short/20170802_바오.webp"
import Short2 from "@/assets/image/Movie/Short/20230913_더그의 일상- 칼의 데이트.webp"
import Series1 from "@/assets/image/Movie/Series/20250219_모두의 리그- 이기거나 지거나.webp"
import Series2 from "@/assets/image/Movie/Series/20241211_드림 프로덕션.webp"
import SparkShorts1 from "@/assets/image/Movie/SparkShorts/202003_토끼굴.webp"
import SparkShorts2 from "@/assets/image/Movie/SparkShorts//20240202_셀프.webp"
import Documentary1 from "@/assets/image/Movie/Documentary/20201113_인사이드픽사.webp"
import Documentary2 from "@/assets/image/Movie/Documentary/20220420_SparkShorts 비하인드 .webp"




export default function index() {
  return (
    <S.Wrapper>
        <S.TitleWrapper>FILMS & STORIES</S.TitleWrapper>
        <S.ContentWrapper>
            <S.List>
                <S.ImageWrapper>
                    <img src={Feature1} alt="토이스토리4" className="default"/>
                    <img src={Feature2} alt="엘리멘탈" className="hover"/>
                </S.ImageWrapper>
                <S.BlackOpacity></S.BlackOpacity>
                <S.Name>장편</S.Name>
            </S.List>
            <S.List>
                <S.ImageWrapper>
                    <img src={Short1} alt="바오"  className="default"/>
                    <img src={Short2} alt="토이스토리4" className="hover"/>
                </S.ImageWrapper>
                <S.BlackOpacity></S.BlackOpacity>
                <S.Name>단편</S.Name>
            </S.List>
            <S.List>
                <S.ImageWrapper>
                    <img src={Series1} alt="모두의 리그- 이기거나 지거나"  className="default"/>
                    <img src={Series2} alt="토이스토리4" className="hover"/>
                </S.ImageWrapper>
                <S.BlackOpacity></S.BlackOpacity>
                <S.Name>시리즈</S.Name>
                
            </S.List>
            <S.List>
                <S.ImageWrapper>
                    <img src={SparkShorts1} alt="토끼굴" className="default"/>
                    <img src={SparkShorts2} alt="토이스토리4" className="hover"/>
                </S.ImageWrapper>
                <S.BlackOpacity></S.BlackOpacity>
                <S.Name>스파크쇼츠</S.Name>
            </S.List>
            <S.List>
                <S.ImageWrapper>
                    <img src={Documentary1} alt="인사이드픽사" className="default"/>
                    <img src={Documentary2} alt="토이스토리4" className="hover"/>
                </S.ImageWrapper>
                <S.BlackOpacity></S.BlackOpacity>
                <S.Name>다큐멘터리</S.Name>
            </S.List>
        </S.ContentWrapper> 
    </S.Wrapper>
  )
}
