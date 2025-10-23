import * as S from './Header.style'
import logoImg from '@/assets/logo/pixar_logo.png';
import facebookImg from '@/assets/icon/sns/facebook.png';
import twitterImg from '@/assets/icon/sns/twitter.png';
import instagramImg from '@/assets/icon/sns/instagram.png';
import youtubeImg from '@/assets/icon/sns/youtube.png';
import linkedinImg from '@/assets/icon/sns/linkedin.png';
import menuImg from '@/assets/icon/menu.png';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <S.HeaderWrapper>
        <S.LogoImg src={logoImg} />
        <S.TabMenu>
          <div><Link to='/films'>작품</Link></div>
          <div>이벤트</div>
          <div>기술 연구</div>
          <div>픽사에서 일하기</div>
          <div>픽사 소개</div>
        </S.TabMenu>
        <S.SNSMenu>
          <a href="https://www.facebook.com/Pixar/"><img src={facebookImg} /></a>
          <a href="https://x.com/pixar"><img src={twitterImg} /></a>
          <a href="https://www.instagram.com/pixar/"><img src={instagramImg} /></a>
          <a href="https://www.youtube.com/pixar"><img src={youtubeImg} /></a>
          <a href="https://www.linkedin.com/company/pixar-animation-studios"><img src={linkedinImg} /></a>

        </S.SNSMenu>
        <S.Menu><img src={menuImg} /></S.Menu>
    </S.HeaderWrapper>
  )
}
 