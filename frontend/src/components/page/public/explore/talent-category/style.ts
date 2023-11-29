import { GV } from '@/utils/style.util';
import styled from 'styled-components';

export const TalentCategoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
    padding: 1.5rem;
    border-radius: 2rem;
    border: 1px solid #5A5D63;
    background: #2B2E31;
`;

export const RateContainer = styled.div`
    display: flex;
    gap: 0.25rem;
    border-radius: 0.5rem;
    border: 1px solid #2B2928;
    background: #191919;
`;

export const Devider = styled.div`
    width: 1px;
    height: 100%;
    background: ${GV('gray-100')};
`;

export const AvatarContainer = styled.img<{ isFirst?: boolean }>`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 62.5rem;
    border: 1px solid #F2F1F1;
    ${({ isFirst }) => isFirst ? `` : `margin-left: -0.9375rem;`}
`;

export const TalentCounter = styled.div`
    display: flex;
    padding: 0rem 0.75rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    border-radius: 62.5rem;
    border: 1px solid #C392DC;
    background: #241A20;
    box-shadow: -9px 4px 4px 0px rgba(0, 0, 0, 0.15);
    font-size: ${GV('font-size-6')};
    font-weight: 600;
    margin-left: -0.9375rem;
`