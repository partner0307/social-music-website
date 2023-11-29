import styled from 'styled-components';

export const StatusBarContainer = styled.div`
    flex: 1;
    display: flex;
    padding: 24px;
    gap: 16px;
    border-radius: 16px;
    border: 1px solid #1A1A1A;
    background: #0C0C0C;
`;

export const CustomFont = styled.div<{ color?: string }>`
    ${({ color }) => color ? `color: ${color}` : ``}
`