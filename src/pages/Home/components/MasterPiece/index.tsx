import React, { useMemo, useState } from 'react'
import * as S from "./MasterPiece.style"
import LeftArrow from "../../../../assets/icon/BigLeftArrow.png"
import RightArrow from "../../../../assets/icon/BigRightArrow.png"
import { COMMING_SOON_SLIDES } from '@/data/commingSoon';

type Pos = {
  x: number;
  y: number;
  z: number;
  s: number;
  ry: number;
  zi: number;
  o: number;
};

const POS: Record<number, Pos> = {
  [-2]: { x: -320, y: 44, z: -60, s: 1.0,  ry: 55,  zi: 1, o: 0.55 }, // 1 (왼쪽 끝 작게)
  [-1]: { x: -170, y: 18, z: -40, s: 0.92, ry: -25, zi: 2, o: 0.75 }, // 2 (오른쪽/안쪽 끝 작게)
  [0]:  { x: 0,    y: 0,  z: -90, s: 0.80, ry: 0,   zi: 3, o: 1.00 }, // 3 (가장 작고 대칭)
  [1]:  { x: 170,  y: 18, z: -40, s: 0.92, ry: 25,  zi: 2, o: 0.75 }, // 4 (왼쪽/안쪽 끝 작게)
  [2]:  { x: 320,  y: 44, z: -60, s: 1.0,  ry: -55, zi: 1, o: 0.55 }, // 5 (오른쪽 끝 작게)
};


function wrapDelta(delta: number, len: number) {
  const half = Math.floor(len / 2);
  if (delta > half) return delta - len;
  if (delta < -half) return delta + len;
  return delta;
}


export default function index() {
  const slides = COMMING_SOON_SLIDES;
  const len = slides.length;

  // ✅ 기본 활성 위치를 3번에 두고 싶으면 2로 시작(0-based)
  const [active, setActive] = useState(2);

  const view = useMemo(() => {
    return slides.map((s, i) => {
      const d = wrapDelta(i - active, len); // -4..4(8장 기준)
      const p = POS[d]; // -2..2만 렌더
      return { ...s, index: i, d, p };
    });
  }, [slides, active, len]);

  const prev = () => setActive((p) => (p - 1 + len) % len);
  const next = () => setActive((p) => (p + 1) % len);

  
  return (
    <S.Wrapper>
        <S.TitleWrapper>
            <S.LightText>PIXAR</S.LightText>
            <S.BoldText>MASTERPIECES</S.BoldText>
        </S.TitleWrapper>
        <S.ContentWrapper>
            <img src={LeftArrow} onClick={prev} />
            <S.ImageSlider>
              {view.map((v) => {
                if (!v.p || Math.abs(v.d) > 2) return null;

                // 텍스트 위치: 1/3/5는 위, 2/4는 아래 (원하면 바꿔도 됨)
                const labelPos = v.d === -1 || v.d === 1 ? "bottom" : "top";

                return (
                  <S.Card
                    key={v.id}
                    style={{
                      transform: `
                        translate3d(${v.p.x}px, ${v.p.y}px, ${v.p.z}px)
                        rotateY(${v.p.ry}deg)
                        scale(${v.p.s})
                      `,
                      zIndex: v.p.zi,
                      opacity: v.p.o,
                    }}
                    onClick={() => setActive(v.index)}
                    aria-label={`${v.title} 선택`}
                  >
                    <img src={v.img} alt={v.title} />
                    {/* <S.GradientOverlay /> */}
                    {v.d === 0 && (   // ✅ 3번(가운데)만 텍스트 표시
                      <S.Label >
                        <S.Name>{v.title}</S.Name>
                        <S.Year>{v.year}</S.Year>
                      </S.Label>
                    )}
                  </S.Card>
                );
              })}
            </S.ImageSlider>
            <img src={RightArrow} onClick={next} />
        </S.ContentWrapper>
    </S.Wrapper>
  )
}
