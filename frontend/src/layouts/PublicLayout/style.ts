import { GV } from "@/utils/style.util";
import styled from "styled-components";

export const PublicLayoutWrapper = styled.div`
    background: ${GV('bg')};
    display: flex;
    gap: 1rem;

    min-height: 100vh;

    overflow: hidden;

    @media (max-width: 450px) {
        overflow: auto;
    }
`;

export const MainWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
`