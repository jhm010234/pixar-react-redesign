import React from 'react'
import * as S from "./MasterPiece.style"
// import LeftArrow from "../../../../assets/icon/BigLeftArrow.png"
// import RightArrow from "../../../../assets/icon/BigRightArrow.png"


export default function index() {
  return (
    <>
        <S.TitleWrapper>
            <S.LightText>PIXAR</S.LightText>
            <S.BoldText>MASTERPIECES</S.BoldText>
        </S.TitleWrapper>
        <S.ContentWrapper>
            {/* <LeftArrow/> */}
            <S.ImageSlider>
                {/* 이미지 슬라이더 */}
            </S.ImageSlider>
            {/* <RightArrow/> */}
        </S.ContentWrapper>
    </>
  )
}
