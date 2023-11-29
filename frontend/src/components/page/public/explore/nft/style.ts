import { GV } from '@/utils/style.util';
import styled from 'styled-components';

export const NFTContainer = styled.div`
    border-radius: 18px;
    border: 1px solid rgba(198, 224, 255, 0.50);
    background: rgba(217, 217, 217, 0.20);
    backdrop-filter: blur(10px);
    padding: 22px 15px;
    transition: all ease-in-out .2s;

    &:hover {
        box-shadow: 0px 0px 8px 0px rgba(61, 255, 243, 0.70);
        border-color: ${GV('info')};
    }
`;

export const ImageComponent = styled.img`
    width: 234px;
    height: 243px;
    border-radius: 12px 12px 0 0;
`;

export const IconWrapper = styled.div`
    display: flex;
    width: 24px;
    height: 24px;
    padding: 4px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    border-radius: 1000px;
    background: #2B2B2B;
`;

export const StateBar = styled.div`
    display: flex;
    padding: 8px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-radius: 4px;
    background: #000;
`

export const CustomButton = styled.button`
    padding: 8px;
    flex-direction: column;
    gap: 4px;
    border-radius: 6px;
    background: #2B2B2B;
`