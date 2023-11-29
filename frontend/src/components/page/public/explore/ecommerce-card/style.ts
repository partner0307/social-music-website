import styled from 'styled-components';

export const EcommerCardContainer = styled.div`
    display: flex;
    padding: 0.5rem 0.5rem 1.5rem 0.5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
    border-radius: 1rem;
    background: #121112;
    position: relative;
`;

export const IconBar = styled.div`
    position: absolute;
    top: 15px;
    left: 20px;
    display: flex;
    padding: 4px 8px;
    align-items: center;
    gap: 20px;
    border-radius: 4px;
    background: rgba(12, 13, 14, 0.20);
`;

export const Line = styled.div`
    width: 0.0625rem;
    height: 1.25rem;
    background: #8DD3ED;
`