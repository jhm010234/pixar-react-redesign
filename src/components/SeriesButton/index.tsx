import React from 'react'
import * as S from '@/components/SeriesButton/SeriesButton.style'

interface SeriesButtonProps {
    name?: string;
    imgSrc: string;
    showBorder?: boolean;
    showOverlay?: boolean;
}

export default function index({imgSrc, name, showBorder, showOverlay}: SeriesButtonProps) {
  return (
    <S.ButtonWrapper showBorder={showBorder} >
        <img src={imgSrc} />
        {
            showOverlay && <S.BackgroundOverlay />
        }
        <S.Text>{name}</S.Text>
    </S.ButtonWrapper>
  )
}
