import { GV } from "@/utils/style.util";
import styled from "styled-components";

export const PublicLayoutWrapper = styled.div`
    position: relative;
    display: flex;
    gap: 1rem;
    min-height: 100vh;
    background: ${GV('bg')};
    overflow: hidden;
    z-index: 1;

    @media (max-width: 450px) {
        overflow: auto;
    }
`;

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 200px;
`