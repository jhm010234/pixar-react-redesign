import React from 'react'
import * as S from '@/pages/Films/components/SeriesButton/SeriesButton.style';

interface SeriesButtonProps {
    name?: string;
    imgSrc: string;
}

export default function index({imgSrc, name}: SeriesButtonProps) {
  return (
    <S.ButtonWrapper>
        <img src={imgSrc} />
        <S.BackgroundOverlay />
        <S.Text>{name}</S.Text>
    </S.ButtonWrapper>
  )
}
