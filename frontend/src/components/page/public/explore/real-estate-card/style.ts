import { GV } from '@/utils/style.util';
import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius: 16px;
    border: 1px solid #3D3D3E;
    background: rgba(12, 12, 12, 0.90);
    padding: 14px;
`;

export const ImageLoader = styled.img`
    width: 100%;
    height: 200px;
    border-radius: 12px 12px 0 0;
    border: 1px solid #B5B5B5;
`;

export const CardLine = styled.div`
    height: 1px;
    width: 100%;
    background: #3D3D3E;
`;

export const CustomFont = styled.div`
    font-size: ${GV('font-size')};
    color: #B4B4B4;
`