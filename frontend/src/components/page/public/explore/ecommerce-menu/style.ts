import styled from 'styled-components';

export const MenuContainer = styled.div`
    display: flex;
    padding: 8px 4px;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
    border-radius: 16px;
    background: #121112;
    width: 17rem;
`;

export const MenuItemContainer = styled.div<{ isLast?: boolean }>`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-bottom: 1px solid #2A282B;
    ${({ isLast }) => isLast ? `border: none;` : ``}
`

export const MenuItem = styled.div`
    width: 100%;
    display: flex;
    padding: 12px 16px;
    align-items: center;
    gap: 12px;
    border-radius: 4px;
`;