import styled from 'styled-components';
import { GV } from '@/utils/style.util';

export type StyledButtonType = {
  bg?: string;
  color?: string;
  p?: string;
  w?: string;
  h?: string;
  fsize?: string;
  radius?: string;
  shadow?: string;
  border?: string;
  hoveredBorder?: string;
  hoveredBg?: string;
};

export const StyledButton = styled.button<StyledButtonType>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  font-family: ${GV('font')};
  transition: all ease-in-out 0.2s;

  ${({ w }) => (w ? `width: ${w};` : ``)}
  /* ${({ h }) => `line-height: ${h ? h : '4.5rem'};`} */
  ${({ h }) => `min-height: ${h ? h : '4.5rem'};`}
  ${({ p }) => `padding: ${p ?? '0 6.65rem'};`}
  ${({ color }) => (color ? `color: ${color};` : ``)}
  ${({ fsize }) => `font-size: ${fsize ?? GV('font-size-3')};`}
  ${({ radius }) => `border-radius: ${radius ?? '0.5rem'};`}
  ${({ shadow }) => `box-shadow: ${shadow ?? '0px 4px 12px 0px rgba(0, 0, 0, 0.25)'};`}
  overflow: hidden;
  z-index: 0;

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* ${({ border, bg }) => `border:  1px solid ${border ?? bg ?? 'transparent'};`} */
    ${({ radius }) => `border-radius: ${radius ?? '0.5rem'};`}
    ${({ bg }) =>
      `background: ${
        bg ??
        `var(--gradient,linear-gradient(216deg, #f75bb1 1.04%, #c392dc 45.73%, #008782 100%))`
      } !important;`}
    opacity: 1;
    transition: all ease-in-out 0.4s;
    z-index: -1;
    content: '';
  }

  ${({ hoveredBg, hoveredBorder, radius }) =>
    hoveredBg
      ? `
    &:after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      border:  1px solid ${hoveredBorder ?? hoveredBg ?? 'transparent'};
      border-radius: ${radius ?? '0.5rem'};
      background: ${
        hoveredBg ??
        `var(--gradient,linear-gradient(216deg, #f75bb1 1.04%, #c392dc 45.73%, #008782 100%))`
      } !important;
      opacity: 1;
      transition: all ease-in-out 0.4s;
      z-index: -1;
      content: '';
    }
    &:hover { 
      &:before {
        opacity: 0;
      }
      &:after {
        opacity: 1;
      }
    }
  `
      : ``}
`;
