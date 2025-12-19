import * as S from "./HeroMovieBanner.style"
import HeroImg from "@/assets/image/HeroMovieBannerImage.png"
import elioLogo from "@/assets/image/Elio/ElioLogo.png"
import releaseDate from "@/assets/image/Home/HomeBanner/elio_release_date.png"
import teaserBtn from "@/assets/image/Home/HomeBanner/elio_teaser_btn.png"



export default function index() {
  return (
    <S.BannerWrapper>
      <S.HeroImg src={HeroImg} alt="Hero Movie Banner" />
      <S.ImageWrapper>
        <S.LogoImg><img src={elioLogo} /></S.LogoImg>
        <div><img src={releaseDate} /></div>
        <div><img src={teaserBtn} /></div>
      </S.ImageWrapper>
    </S.BannerWrapper>
  )
}
