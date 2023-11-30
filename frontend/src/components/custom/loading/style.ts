import styled, { keyframes } from "styled-components";

const spinAnim = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

export const LoadingContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    background: rgba(0, 0, 0, 0.834);
    z-index: 9999;
`;

export const SpinnerContainer = styled.div`
    width: 64px;
    height: 64px;
    border: 8px solid;
    border-color: #3d5af1 transparent #3d5af1 transparent;
    border-radius: 50%;
    animation: ${spinAnim} 1.2s linear infinite;
`