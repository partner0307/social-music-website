import styled from 'styled-components';
import { GV } from '../../../../../utils/style.util';

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    border-radius: 16px;
    border: 1px solid #191919;
    background: rgba(0, 0, 0, 1);
    padding: 16px 12px;
    transition: all ease-in-out .2s;

    &:hover {
        filter: drop-shadow(0px 0px 8px rgba(61, 255, 243, 0.50));
        border-color: ${GV('info')};
    }
`;

export const ImageLoader = styled.img`
    width: 312px;
    height: 200px;
    border-radius: 16px;
    border: 1px solid #B5B5B5;
`;

export const Avatar = styled.div`
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1000px;
    border: 1px solid var(--new-styles-grays-bg, #F2F1F1);
`;

export const IconLoader = styled.img`
    width: 24px;
    height: 24px;
`