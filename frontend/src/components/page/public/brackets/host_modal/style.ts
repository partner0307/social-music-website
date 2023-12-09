import { GV } from "@/utils/style.util";
import styled from "styled-components";

export const HostModalWrapper = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 1rem 0;
    width: 100%;
    height: 100%;
`;

export const LabelContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 0.5rem;
    width: 100%;
`;

export const SubmitButton = styled.button`
    margin-top: 1rem;
    padding: 0.5rem 4rem;
    background: ${GV('purple')};
    border-radius: ${GV('radius-xs')};
    
    /* background: ${GV('success')}; */
    @media (max-width: 680px) {
        display: none;
    }
`;

export const BannerContainer = styled.div`
    position: relative;
    width: 100%;
    height: 10rem;

    &:hover {
        & > div {
            opacity: 1;
            background: rgba(0, 0, 0, 0.4);
            backdrop-filter: blur(5px);
        }
    }
`;

export const BannerOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    opacity: 0;
    width: 100%;
    height: 100%;
    transition: all ease-in-out 0.3s;
`;

export const MobileSubmitButton = styled.button`
    margin-top: 1rem;
    padding: 0.5rem 4rem;
    background: ${GV('purple')};
    border-radius: ${GV('radius-xs')};
    
    @media (max-width: 430px) {
        width: 100%;
    }
`;

export const UploadButton = styled.div<{ color?: string }>`
    ${({ color }) => color && `color: ${color};`}
    cursor: pointer;
`;