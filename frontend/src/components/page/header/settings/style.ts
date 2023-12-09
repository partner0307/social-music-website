import { GV } from "@/utils/style.util";
import styled from "styled-components";

export const CustomButton = styled.button`
    color: ${GV('red')};
`;

export const SubmitButton = styled.button`
    margin-top: 4rem;
    padding: 0.5rem 4rem;
    background: ${GV('purple')};
    border-radius: ${GV('radius-xs')};
    
    /* background: ${GV('success')}; */
    @media (max-width: 680px) {
        display: none;
    }
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

export const DeleteButton = styled.button`
    padding: 0.125rem 2rem;
    background: ${GV('red')};
    border-radius: ${GV('radius-xs')};
    font-size: ${GV('font-size-6')};

    @media (max-width: 680px) {
        display: none;
    }
`;

export const MobileDeleteButton = styled.button`
    padding: 0.125rem 2rem;
    background: ${GV('red')};
    border-radius: ${GV('radius-xs')};
    font-size: ${GV('font-size-6')};

    @media (max-width: 430px) {
        padding: 0.5rem 2rem;
        width: 100%;
    }
`

export const ProfileInfo = styled.form`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1rem;

    @media (max-width: 430px) {
        align-items: center;
    }
`;

export const UploadButton = styled.div`
    color: ${GV('purple')};
    cursor: pointer;
`

export const CoverImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const AvatarContainer = styled.img`
    border: 2px solid ${GV('white')};
    border-radius: 0.5rem;
    width: 10rem;
    height: 10rem;
`;

export const MobileContainer = styled.div`
    width: 100%;
    display: none;
    @media (max-width: 680px) {
        display: flex;
        justify-content: space-between;
        align-items: end;
    }

    @media (max-width: 430px) {
        flex-direction: column;
    }
`