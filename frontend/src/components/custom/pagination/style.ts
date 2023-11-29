import { GV } from "@/utils/style.util";
import styled from "styled-components";

export const CustomFont = styled.span`
  font-family: ${GV('font')};
  color: #8d8e8d;
`;

export const PageStepContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  
  @media (max-width: 1024px) {
    display: none;
  }
`

export const PageStep = styled.div`
  display: flex;
  padding: 10px 0 10px 14px;
  align-items: center;
  border-radius: 16px;
  border: 1px solid #e7e8e7;

  @media (max-width: 1024px) {
    padding: 5px 0 5px 10px;
    border-radius: 12px;
  }
`;

// export const PaginationWrapper = styled.div`
//   padding: 0 35px 128px;
// `;

export const StepButton = styled.button<{
  isActive?: boolean;
  padding?: string;
}>`
  border-radius: 9.919px;
  ${({ padding }) => (padding ? `padding: ${padding};` : `padding: 10px 8px 8px;`)}
  ${({ isActive }) =>
    isActive ? `background: #D100BC;` : `background: #2B2B2B; color: #8d8e8d;`}
`;
