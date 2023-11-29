import styled, { keyframes } from 'styled-components';

import { GV } from '@/utils/style.util';

export const ListContainer = styled.div`
  cursor: pointer;
`;

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding-top: 2rem;
  padding-left: 0.5rem;
  max-width: 200px;
  width: 100%;
`;

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

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
  border-radius: .5rem;
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