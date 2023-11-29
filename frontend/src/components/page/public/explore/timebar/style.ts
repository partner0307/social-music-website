import styled from 'styled-components';

export const TimeBarContainer = styled.div`
    display: flex;
    width: 100%;
    padding: 12px 24px;
    justify-content: space-between;
    align-items: center;
    border-radius: 16px;
    border: 1px solid #1A1A1A;
    background: #0C0C0C;
`;

export const TimeSelector = styled.div<{ isSelect?: boolean }>`
    display: flex;
    padding: 2px 4px;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    border-radius: 4px;
    cursor: pointer;
    ${({ isSelect }) => isSelect ? `border: 1px solid #3DFFF3;` : ``}
`