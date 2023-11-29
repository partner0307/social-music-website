import styled from "styled-components";

import { GV } from "@//utils/style.util";

import Image from "@//assets/img/avatar1.png";
import Mark from "@//assets/img/mark.svg";

export const CardContainer = styled.div<{ isLast?: boolean }>`
  border-radius: 18px;
  border: 1px solid rgba(198, 224, 255, 0.5);
  background: rgba(217, 217, 217, 0.2);
  backdrop-filter: blur(10px);
  padding: 18px 16px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;

  &:hover {
    filter: drop-shadow(0px 0px 24px rgba(61, 255, 243, 0.5));
    border-color: ${GV("info")};
  }

  @media (max-width: 1024px) {
    ${({ isLast }) => isLast ? `display: none;` : ``}
  }
`;


export const CardHero = styled.div`
  position: relative;
  border-radius: 12px 12px 0 0;
`;

export const CardImage = styled.img`
  width: 100%;
  border-radius: 12px 12px 0 0;
`

export const MarkWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 128px;
  height: 58px;
  background: no-repeat url(${Mark});
  background-position: top center;
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 8px 8px 0 0;
`;

export const CardAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 4px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 1000px;
  background: #2b2b2b;
`;

export const StatusContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  background: #000;
  border-radius: 4px;
`;
