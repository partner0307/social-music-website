import styled from "styled-components";
import { GV } from "@/utils/style.util";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InputLabel = styled.span`
  font-size: ${GV('font-size-6')};
  font-weight: ${GV('weight-md')};
  margin-bottom: 0.5rem;
`;

export const InputContent = styled.div`
  position: relative;
`;

export const InputWrapper = styled.label<{ padding: string }>`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ padding }) => (padding ? `padding: ${padding};` : `padding: 0.5rem;`)}
  min-height: 1.5rem;
  z-index: 1;
`;

export const InputBoard = styled.div<{
  radius: string;
  bg: string;
  border: string;
}>`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(0, -50%);
  width: 100%;
  height: 100%;
  border: 1px solid transparent;
  ${({ bg }) => (bg ? `background: ${bg};` : `background: ${GV("input-bg")};`)}
  ${({ radius }) =>
    radius ? `border-radius: ${radius};` : `border-radius: 0.25rem;`}
    ${({ border }) => (border ? `border-color: ${border}` : `border-color: ${GV('purple')};`)}
    box-shadow: 0px 0px 0px 1px rgba(160, 140, 199, 0.16), 0px 1px 2px 0px rgba(0, 0, 0, 0.06);
`;

export const StyledInput = styled.input`
  width: 100%;
  display: block;
  min-width: 0;
  padding: 0;
  background: none;
  border: none;
  outline: none;
  font-size: ${GV('font-size-5')};
`;

export const StyledTextarea = styled(StyledInput)`
  resize: vertical;
`;
