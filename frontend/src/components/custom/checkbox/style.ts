import styled from "styled-components";
import { GV } from "@/utils/style.util";

export const CheckboxContainer = styled.div<{ isChecked: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const StyledCheckbox = styled.div<{ isChecked: boolean, width?: string, height?: string }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  ${({ width }) => width ? `width: ${width};` : `width: 18px;`}
  ${({ height }) => height ? `width: ${height};` : `width: 18px;`}
  width: 18px;
  height: 18px;
  ${({ isChecked }) =>
    isChecked ? `background-color: ${GV('purple')};` : `background-color: #232323;`}
  border-radius: 4px;
  transition: all ease-in-out .2s;
  cursor: pointer;
`;
