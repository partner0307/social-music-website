import styled from 'styled-components';

export const RadioButtonOuter = styled.div<{ isSelected?: boolean, color?: string }>`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 2rem;
    border: 1px solid #8F9090;
    ${({ isSelected, color }) => isSelected ? `border-color: ${color};` : `border-color: #8F9090;`}
    padding: 4px;
`;

export const RadioButtonInner = styled.div<{ isSelected?: boolean }>`
    width: 100%;
    height: 100%;
    border-radius: 999px;
    ${({ isSelected, color }) => isSelected ? `background: ${color};` : `border-color: #8F9090;`}
`;

export const RadioContainer = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
`;