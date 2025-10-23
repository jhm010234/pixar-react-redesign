import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    padding: 0 100px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 64px;


    @media (max-width: 1024px) {
        display: flex;
    }

    @media (max-width: 768px) {
        display: flex;
    }
`;

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    justify-content: center;
    align-items: center;

    @media (max-width: 1024px) {
        display: flex;
    }

    @media (max-width: 768px) {
        display: flex;
    }
`;

export const Title = styled.div`
    display: flex;
    font-size: 36px;

    @media (max-width: 1024px) {
        display: flex;
    }

    @media (max-width: 768px) {
        display: flex;
        font-size: 24px;
    }
`;

export const Description = styled.div`
    text-align: center;
    font-size: 14px;
    line-height: 28px;
    font-weight: ${({theme})=> theme.font.weight.medium};
    width: 600px;

    @media (max-width: 1024px) {
        display: flex;
    }

    @media (max-width: 768px) { 
        width: 320px;
        font-size: 12px;
        line-height: 24px;
        text-align: center;
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    gap: 48px;

    @media (max-width: 1024px) {
        display: flex;
    }

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        gap: 24px;
        flex-wrap: nowrap;

    }
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: center;
    align-items: center;

    
`;

export const IconWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 16px;

    @media (max-width: 1024px) {
        display: flex;
    }

    @media (max-width: 768px) {
        display: flex;
        width: 200px;
        justify-content: center;
        align-items: center;
        text-align: center;
        gap: 20px;
    }
`;

export const Icon = styled.div`
    display: flex;
    width: 64px;

    @media (max-width: 1024px) {
        display: flex;
    }

    @media (max-width: 768px) {
        display: flex;
        width: 48px;

    }
`;

export const IconTitle = styled.div`
    display: flex;
    font-weight: ${({theme})=> theme.font.weight.bold};
    font-size: 18px;

    @media (max-width: 1024px) {
        display: flex;
    }

    @media (max-width: 768px) {
        display: flex;
        font-size: 16px;

    }
`;

export const IconDescription = styled.div`
    font-size: 14px;

    @media (max-width: 1024px) {
        display: flex;
    }

    @media (max-width: 768px) {
        display: flex;
        font-size: 14px;

    }
`;
