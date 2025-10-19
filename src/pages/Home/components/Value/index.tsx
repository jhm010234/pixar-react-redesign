import React from 'react'
import * as S from "./Value.style"
import Value1 from '@/assets/icon/Value1.png'
import Value2 from '@/assets/icon/Value2.png'
import Value3 from '@/assets/icon/Value3.png'
import Value4 from '@/assets/icon/Value4.png'


export default function index() {
  return (
    <S.Wrapper>
        <S.TitleWrapper>
            <S.Title>PIXAR의 가치</S.Title>
            <S.Description>우리는 각자 다른 것을 지니고 있지만, 공유된 가치가 우리의 행동을 이끌어 줍니다. 그것은 우리의 모든 일에 뿌리내려 있으며, 매일 눈으로 보고 마음으로 느낄 수 있습니다.
            </S.Description>
        </S.TitleWrapper>

        <S.ContentWrapper>
            <S.IconWrapper>
                <S.Icon><img src={Value1} alt='가치이미지1' /></S.Icon>
                <S.TextWrapper>
                    <S.IconTitle>공동체</S.IconTitle>
                    <S.IconDescription>
                        <div>서로를 아끼고 돌봅니다</div>
                    </S.IconDescription>
                </S.TextWrapper>

            </S.IconWrapper>
            <S.IconWrapper>
                <S.Icon><img src={Value2} alt='가치이미지2' /></S.Icon>
                <S.TextWrapper>
                    <S.IconTitle>혁신</S.IconTitle>
                    <S.IconDescription>
                        <div>가능성을 새롭게 정의합니다</div>
                    </S.IconDescription>
                </S.TextWrapper>
            </S.IconWrapper>
            <S.IconWrapper>
                <S.Icon><img src={Value3} alt='가치이미지3' /></S.Icon>
                <S.TextWrapper>
                    <S.IconTitle>주민의식</S.IconTitle>
                    <S.IconDescription>
                        <div>모두가 함께 기여할 때 모두가 성공합니다</div>
                    </S.IconDescription>
                </S.TextWrapper>
            </S.IconWrapper>
            <S.IconWrapper>
                <S.Icon><img src={Value4} alt='가치이미지4' /></S.Icon>
                <S.TextWrapper>
                    <S.IconTitle>진전성</S.IconTitle>
                    <S.IconDescription>
                        <div>깊이 탐구하고 자신만의 독창성을 드러냅니다</div>
                    </S.IconDescription>
                </S.TextWrapper>
            </S.IconWrapper>
        </S.ContentWrapper>
    </S.Wrapper>
  )
}
