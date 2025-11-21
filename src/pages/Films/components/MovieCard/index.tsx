import React from 'react'
import * as S from './MovieCard.style'
import PosterImg from '@/assets/image/Movie/Documentary/20250312_피클스를 소개합니다- 모두의 리그- 이기거나 지거나 비하인드.webp'

export default function index({imgSrc, tag, title, year} : {imgSrc: string; tag: string; title: string; year: string}) {
  return (
    <S.Wrapper>
        <S.ImageWrapper><S.Img src={imgSrc} /></S.ImageWrapper>
        <S.TextWrapper>
            <S.Tag>{tag}</S.Tag>
            <S.Info>
                <S.Title>{title}</S.Title>
                <S.Year>{year}</S.Year>
            </S.Info>
        </S.TextWrapper>
    </S.Wrapper>
  )
}
