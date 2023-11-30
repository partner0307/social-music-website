import { GV } from "@/utils/style.util";
import styled from "styled-components";

export const ListItemContainer = styled.div`
  display: flex;
  align-self: center;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  border-radius: 8px;
`;

export const ListItem = styled.div<{ isActive?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0 0.5rem 0.5rem;
  width: 100%;
  cursor: pointer;

  ${({ isActive }) => isActive ? `background: ${GV('purple')};` : `background: ${GV('gray')};`}

  &:hover {
    background: ${GV('purple')};
  }
`;

export const NestedHand = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
  padding: 0.5rem 0 0.5rem 0.5rem;
`

export const NestedItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-radius: .5rem;
  background: ${GV('gray')};
  width: 100%;
`;

export const NestedItem = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
  padding: 0.5rem 0 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    background: ${GV('purple')};
  }
`