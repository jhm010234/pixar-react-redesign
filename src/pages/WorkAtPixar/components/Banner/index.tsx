import * as S from './Banner.style'
import BannerBackgroundImg from "../../../../assets/image/WorkAtPixar/up_background2 1.png"
import OpenPositionsBtn from "../../../../assets/image/WorkAtPixar/OpenPositionsBtn.png"

export default function index() {
  return (
    <S.Wrapper>
        <img src={BannerBackgroundImg} />
        <div>
            <div></div>
            <div></div>
            <img src={OpenPositionsBtn} />
        </div>
    </S.Wrapper>
  )
}
