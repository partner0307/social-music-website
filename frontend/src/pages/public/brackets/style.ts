import { GV } from "@/utils/style.util";
import styled from "styled-components";

export const BracketsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0 2rem;
    width: 100%;
    height: 100%;
`

export const CustomButton = styled.button`
    display: flex;
    height: 2.5rem;
    padding: 1.5rem 3rem;
    justify-content: center;
    align-items: center;
    gap: 1.25rem;
    border-radius: 0.5rem;
    background: ${GV('purple')};

    @media (max-width: 768px) {
        padding: 0.75rem 1.5rem;
    }
`;

export const DropdownContainer = styled.div`
    border-radius: ${GV('radius-xs')};
    max-width: 18rem;
    padding: 0.5rem 1rem;
    background: var(--bg);
`