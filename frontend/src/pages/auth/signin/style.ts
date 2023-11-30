import { GV } from '@/utils/style.util';
import styled from 'styled-components';

export const SigninContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const MarkBar = styled.div`
    padding: 4rem 5rem 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const SignupButton = styled.button`
    padding: 0.75rem 1.125rem;
    gap: 0.25rem;
    border-radius: 0.5rem;
`;

export const AuthForm = styled.form`
    display: flex;
    max-width: 30rem;
    width: 100%;
    padding: 3.5rem 2rem 2rem;
    flex-direction: column;
    gap: 1rem;

    @media (max-width: 465px) {
        padding: 3.5rem 0;
    }
`;

export const SubmitButton = styled.button`
    gap: 0.5rem;
    align-self: stretch;
    height: 3rem;
    border-radius: 0.75rem;
    padding: 0rem 1.5rem;
    border: 1px solid #3D3D3E;
    background: ${GV('purple')};
    color: #fff;
`;

export const CustomFont = styled.span`
    color: #8F9090;
`;

export const CustomFont1 = styled.div`
    color: var(--foundation-violet-violet-200, #A192A4);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: ${GV('font-size-5')};
`

export const CustomLine = styled.div`
    width: 48%;
    height: 0.0625rem;
    background: #F1B0EA;
`;

export const LetterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.5rem;
    height: 1.5rem;
`;

export const CustomButton = styled.button`
    display: flex;
    height: 3rem;
    padding: 0.75rem 2rem;
    justify-content: center;
    align-items: center;
    gap: 1.25rem;
    border-radius: 100rem;
    border: 0.5px solid ${GV('purple')};
    background: ${GV('gray')};
`;

export const Rect = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    flex-shrink: 0;
    background: linear-gradient(-90deg, rgba(247, 91, 177, 0.00) 1.04%, rgba(195, 146, 220, 0.03) 45.73%, rgba(0, 135, 130, 0.15) 100%);
    z-index: -1;
`

export const Rect1 = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    /* transform: rotate(180deg); */
    flex-shrink: 0;background: 
    linear-gradient(90deg, rgba(247, 91, 177, 0.00) 1.04%, rgba(195, 146, 220, 0.03) 45.73%, rgba(0, 135, 130, 0.15) 100%);
    z-index: -1;
    background-size: cover;
`