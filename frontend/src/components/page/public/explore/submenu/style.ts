import { GV } from '@/utils/style.util';
import styled from 'styled-components';

export const SubMenuContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    height: 64px;
    padding: 32px;
    background: rgba(41, 41, 41, 0.30);
    backdrop-filter: blur(8px);
`;

export const TabButton = styled.button<{ isActive?: boolean }>`
    font-size: ${GV('font-size-5')};
    ${({ isActive }) => isActive ? `font-weight: ${GV('weight-lg')}; color: #000;` : `font-weight: ${GV('weight-sm')};`}
    font-family: ${GV('font3')};
    height: 40px;
    padding: 0 16px;
    border-radius: 8px;
    border: 1px solid #1C1C1C;
    ${({ isActive }) => isActive ? `background: #F75BB1;` : `background: #111;`}
`