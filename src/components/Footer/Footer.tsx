import React from 'react'
import * as F from './Footer.style'
import logoImg from '@/assets/logo/pixar_logo_small.png';

export default function Footer() {
  return (
    <F.FooterWrapper>
        <F.LogoImg src={logoImg} />
        <F.TextContainer>
            <div>Do Not Sell or Share My Personal Information</div>
            <F.Links>
                <div>Privacy Policy</div>
                <div>|</div>
                <div>Your US State Privacy Rights</div>
                <div>|</div>
                <div>Children's Online Privacy Policy</div>
                <div>|</div>
                <div>Interest Based Ads</div>
            </F.Links>
            <div>© 1986-2025 Disney-Pixar</div>
        </F.TextContainer>
    </F.FooterWrapper>
  )
}
