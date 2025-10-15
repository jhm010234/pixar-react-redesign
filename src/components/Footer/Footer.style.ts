import styled from 'styled-components';
import colors from '@/styles/colors';

export const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${colors.black};
    padding: 48px 0;
    align-items: center;
    gap: 32px;

    @media (max-width: 1024px) {

    } 

    @media (max-width: 768px) {
        display: flex;
        gap: 16px;
        padding: 32px 0;
    }
`;  

export const LogoImg = styled.img`
    display: flex;

    @media (max-width: 1024px) {
        display: flex;
        width: 100px;
    } 

    @media (max-width: 768px) {
        display: flex;
        width: 80px;
    }
`;

export const TextContainer = styled.div`
    color: ${colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 20px;
    font-size: 14px;
    text-align: center;

    @media (max-width: 1024px) {
        display: flex;
        font-size: 12px;
    } 

    @media (max-width: 768px) {
        display: flex;
        font-size: 10px;
        line-height: 16px;

    }
`;

export const Disclaimer = styled.div`
`;

export const Links = styled.div`
    display: flex;
    gap: 16px;
    justify-content: center;

    @media (max-width: 1024px) {
    } 

    @media (max-width: 768px) {
        display: flex;
        column-gap: 6px;
        row-gap: 0;  
        flex-wrap: wrap;
        justify-content: center;
    }
`;