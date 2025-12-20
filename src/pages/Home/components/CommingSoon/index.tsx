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
                <S.BottomItem>
                    <img src={hoppers} />
                    <Number number="01" name="호퍼스" />
                </S.BottomItem>
                <S.TopItem><img src={toystory5} /><Number number="02"  name="토이스토리5" /></S.TopItem>
                <S.BottomItem><img src={gatto} /><Number number="03" name="가토" /></S.BottomItem>
            </S.ItemWrapper>
        </S.Wrapper>
    </>
  )
}
