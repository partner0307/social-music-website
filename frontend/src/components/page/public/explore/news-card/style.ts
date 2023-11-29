import styled from 'styled-components';

export const NewsCardContainer = styled.div<{ width?: string }>`
    display: flex;
    flex-direction: column;
    gap: 24px;
    flex: 1;
    padding: 18px 18px 36px;
    border-radius: 18px;
    border: 1px solid #222;
    background: #1E1E20;
`;

export const NewsImage = styled.img`
    width: 100%;
    height: 226px;
    border-radius: 18px;
`