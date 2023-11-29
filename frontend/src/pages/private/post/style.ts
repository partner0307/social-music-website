import { GV } from '@/utils/style.util';
import styled from 'styled-components';

export const CustomButton = styled.button`
    padding: 0.5rem 2rem;
    background: ${GV('purple')};
    border-radius: ${GV('radius-xs')};
`;

export const UploadWrapper = styled.div`
    display: flex;
    gap: '2rem';
    padding: 2.5rem 2rem;
    border: 1px dashed #888;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all .3s ease-in-out;

    &:hover {
        border-color: #ddd;
    }
`