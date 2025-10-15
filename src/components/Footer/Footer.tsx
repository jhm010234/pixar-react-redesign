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
                <a href='https://privacy.thewaltdisneycompany.com/en/' target='_blank' rel="noopener noreferrer"
                    >Privacy Policy</a>
                <div>|</div>
                <a href='https://privacy.thewaltdisneycompany.com/en/current-privacy-policy/your-us-state-privacy-rights/' target='_blank' rel="noopener noreferrer"
                    >Your US State Privacy Rights</a>
                <div>|</div>
                <a href='https://privacy.thewaltdisneycompany.com/en/for-parents/childrens-online-privacy-policy/' target='_blank' rel="noopener noreferrer"
                    >Children's Online Privacy Policy</a>
                <div>|</div>
                <a href='https://privacy.thewaltdisneycompany.com/en/privacy-controls/online-tracking-and-advertising/' target='_blank' rel="noopener noreferrer"
                    >Interest Based Ads</a>
            </F.Links>
            <div>© 1986-2025 Disney-Pixar</div>
        </F.TextContainer>
    </F.FooterWrapper>
  )
}
