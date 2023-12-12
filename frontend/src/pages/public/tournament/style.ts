import { GV } from "@/utils/style.util";
import styled from "styled-components";

export const TournamentContainer = styled.div`
    display: flex;
    flex: 1;
    gap: 1rem;
    padding: 0 2rem;
`;

export const FeaturedTrackContainer = styled.div`
    width: 300px;

    @media (max-width: 1200px) {
        display: none;
    }
`

export const EnterButton = styled.button`
    width: 100%;
    max-width: 15rem;
    padding: 1.5rem 2rem;
    background: var(--success);
    font-size: ${GV('font-size-3')};
    color: var(--white);
    text-transform: uppercase;
    border-radius: ${GV('radius-xs')};

    @media (max-width: 768px) {
        max-width: 100%;
    }
`;

export const ProgressContainer = styled.div`
    position: relative;
    flex: 1;
    display: flex;
    justify-content: space-between;
    width: 100%;
    z-index: 0;
`;

export const StepContainer = styled.div<{ isActive?: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    font-size: ${GV('font-size-3')};
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    ${({ isActive }) => isActive ? `background: var(--success);` : `background: var(--purple);`}

    @media (max-width: 425px) {
        width: 2.5rem;
        height: 2.5rem;
    }
`;

export const ProgressLine = styled.div`
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 4px;
    background: var(--purple);
    z-index: -1;

    @media (max-width: 890px) {
        top: 40%;
    }
    
    @media (max-width: 768px) {
        top: 50%;
    }

    @media (max-width: 425px) {
        top: 40%;
    }
`;