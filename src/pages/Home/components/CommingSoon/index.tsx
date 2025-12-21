import * as S from './CommingSoon.style'
import titleImg from '@/assets/image/Home/CommingSoon/commingSoonTitle.png'
import hoppers from '@/assets/image/Home/CommingSoon/hoppers.webp'
import toystory5 from '@/assets/image/Home/CommingSoon/toystory5.webp'
import gatto from '@/assets/image/Home/CommingSoon/gatto.webp'
import Number from './Number'

export default function index() {
  return (
    <>
        <S.Wrapper>
            <S.Title><img src={titleImg} /></S.Title>
            <S.ItemWrapper>
                <S.Item>
                    <S.BottomItem>
                        <img src={hoppers} />
                        <S.OpacityLayerBottom />
                    </S.BottomItem>
                    <S.TopTextWrapper>
                        <Number number="01" name="호퍼스" />
                    </S.TopTextWrapper>
                </S.Item>

                <S.Item>
                    <S.TopItem>
                        <img src={toystory5} />
                        <S.OpacityLayerTop />
                    </S.TopItem>
                    <S.BottomTextWrapper>
                        <Number number="02"  name="토이스토리5" />
                    </S.BottomTextWrapper>
                </S.Item>
                    <S.Item>
                        <S.BottomItem>
                            <img src={gatto} />
                            <S.OpacityLayerBottom />
                        </S.BottomItem>
                        <S.TopTextWrapper>
                           <Number number="03" name="가토" />
                        </S.TopTextWrapper>
                    </S.Item>
            </S.ItemWrapper>
        </S.Wrapper>
    </>
  )
}
