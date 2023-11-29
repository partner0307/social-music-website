import styled from "styled-components";
import { GV } from "@/utils/style.util";

export const BadgeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0rem 0.5rem;
  color: ${GV("color-secondary")};
  border: 1px solid ${GV("danger")};
  border-radius: 10rem;
  font-size: ${GV('font-size-6')};

  @media (max-width: 768px) {
    font-size: ${GV('font-size-7')};
    border: 1px solid ${GV("danger")};
  }
`;
