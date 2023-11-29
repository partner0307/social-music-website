import { GV } from "@/utils/style.util";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  padding: 2rem 2rem 1rem;
  background: ${GV('gray')};
  width: 100%;
`;

export const CustomButton = styled.button`
    display: flex;
    height: 2.5rem;
    padding: 0.75rem 2rem;
    justify-content: center;
    align-items: center;
    gap: 1.25rem;
    border-radius: 0.5rem;
    background: ${GV('purple')};
`;

export const UserInfo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
`;

export const UserAvatar = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Dropdown = styled.div<{ isDropdown: boolean }>`
  position: absolute;
  top: 100%;
  right: 2rem;
  background: ${GV('gray')};
  border: 0.5px solid ${GV('bg')};
  box-shadow: 0 10px 30px ${GV('bg')};
  z-index: 9000;

  ${({ isDropdown }) => isDropdown ? `display: block;` : `display: none;`}
  transition: all .3s ease-in-out;
`;

export const DropdownItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 1.25rem;

  &:first-child {
    border-bottom: 0.5px solid #333;
  }

  &:hover {
    background: ${GV('bg')};
  }
`