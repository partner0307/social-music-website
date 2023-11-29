import { GV } from "@/utils/style.util";
import styled from "styled-components";

export const CustomButton = styled.button`
    color: ${GV('red')};
`;

export const SubmitButton = styled.button`
    padding: 0.5rem 4rem;
    background: ${GV('purple')};
    border-radius: ${GV('radius-md')};
`;

export const DeleteButton = styled.button`
    padding: 0.5rem 1rem;
    background: ${GV('red')};
    border-radius: ${GV('radius-xs')};
`

export const ProfileInfo = styled.form`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1rem;
`;

export const UploadButton = styled.div`
    color: ${GV('purple')};
    cursor: pointer;
`

export const CoverImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`