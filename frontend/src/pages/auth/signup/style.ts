import { GV } from '@/utils/style.util';
import styled from 'styled-components';
import Background from '@/assets/img/auth-background.gif';

export const SignupContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const AuthForm = styled.form`
    display: flex;
    max-width: 30rem;
    padding: 2rem;
    flex-direction: column;
    gap: 1rem;
`;

export const SubmitButton = styled.button`
    height: 3rem;
    border-radius: 0.75rem;
    padding: 0rem 1.5rem;
    gap: 0.5rem;
    align-self: stretch;
    border: 1px solid #3D3D3E;
    background: ${GV('purple')};
`;

export const CustomFont = styled.span`
    color: #A192A4;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const CustomLine = styled.div`
    width: 48%;
    height: 0.0625rem;
    background: #F1B0EA;
`;

export const LetterContainer = styled.div`
    width: 2.5rem;
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
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