import * as S from './Header.style'
import logoImg from '@/assets/logo/pixar_logo.png';
import facebookImg from '@/assets/icon/sns/facebook.png';
import twitterImg from '@/assets/icon/sns/twitter.png';
import instagramImg from '@/assets/icon/sns/instagram.png';
import youtubeImg from '@/assets/icon/sns/youtube.png';
import searchImg from '@/assets/icon/sns/linkedin.png';
import menuImg from '@/assets/icon/menu.png';

export default function Header() {
  return (
    <S.HeaderWrapper>
        <S.LogoImg src={logoImg} />
        <S.TabMenu>
          <div>영화</div>
          <div>이벤트</div>
          <div>기술 연구</div>
          <div>픽사에서 일하기</div>
          <div>픽사 소개</div>
        </S.TabMenu>
        <S.SNSMenu>
        <img src={facebookImg} />
        <img src={twitterImg} />
        <img src={instagramImg} />
        <img src={youtubeImg} />
        <img src={searchImg} />
        </S.SNSMenu>
        <S.Menu><img src={menuImg} /></S.Menu>
    </S.HeaderWrapper>
  )
}
