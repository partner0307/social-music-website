import { GV } from "@/utils/style.util";
import styled from "styled-components";

export const CardContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    height: 100%;
    border: 1px solid ${GV('purple')};
    border-radius: 0.5rem;
    transition: all .3s ease;

    @media (max-width: 1920px) {
        max-width: 400px;
    }
`;

export const CardWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
`

export const CardTitle = styled.div`
    max-height: 50px;
    color: ${GV('white')};
    font-size: 1.25rem;
    font-weight: 800;
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`

export const CardContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    width: 100%;
    height: 100%;
    padding: 0 0.5rem 0.5rem;
`;

export const CardAction = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 3rem;
    padding: 0 0.5rem;
`;

export const CardActionInnerWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
`;

export const Dropdown = styled.div<{ isDropdown: boolean }>`
  position: absolute;
  top: 100%;
  right: 1rem;
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
`;

export const StatusTab = styled.div<{ isOpen?: boolean }>`
    font-size: ${GV("font-size-5")};
    border-radius: 5px;
    padding: 0 1rem;
    ${({ isOpen }) => isOpen ? `background: ${GV('pink-400')};` : `background: ${GV('purple-400')};`}
    ${({ isOpen }) => isOpen ? `color: ${GV('pink')};` : `color: ${GV('purple')};`}
    font-weight: 600;
`;

export const ActionMenuButton = styled.button``