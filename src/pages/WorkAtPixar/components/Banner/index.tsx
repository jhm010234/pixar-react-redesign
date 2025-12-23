import * as S from './Banner.style'
import BannerBackgroundImg from "../../../../assets/image/WorkAtPixar/up_background2 1.png"
import OpenPositionsBtn from "../../../../assets/image/WorkAtPixar/OpenPositionsBtn.png"

export default function index() {
  return (
    <S.Wrapper>
        <img src={BannerBackgroundImg} />
        <S.TextWrapper>
            <S.Title>Powerful stories well told</S.Title>
            <S.Description>
                애니메이션은 웃음을 주고 영감을 불러일으키며, 때로는 위로와 희망을 전하는 힘을 지니고 있습니다.<br />
                픽사의 작품이 전하는 울림은 전 세계 곳곳에서 느낄 수 있습니다.<br /><br />
                픽사의 목표는 훌륭한 사람들과 함께 훌륭한 영화를 만드는 것입니다.<br />
                독창적인 스토리텔링과 기술 혁신이 만나는 곳, 픽사 크루에 함께하세요.
            </S.Description>
            <img src={OpenPositionsBtn} />
        </S.TextWrapper>
    </S.Wrapper>
  )
}
