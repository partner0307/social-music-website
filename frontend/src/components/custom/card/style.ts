import styled from 'styled-components';
import { ImageContainer } from '@/components/basic/img/style';
import { GV } from '@/utils/style.util';

export interface CardContainerPropsInterface {
  w?: string;
  h?: string;
  bg?: string;
  transform?: string;
  p?: string;
  bcolor?: string;
  bradius?: string;
  gap?: string;
}

export const CardContainer = styled.div<CardContainerPropsInterface>`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => gap ?? `0.25rem`};
  ${({ transform }) => (transform ? `transform: ${transform};` : ``)}
  ${({ w }) => (w ? `width: ${w};` : ``)}
  ${({ h }) => (h ? `height: ${h};` : ``)}
  padding: ${({ p }) => p ?? `0.5rem`};
  border: 2px solid ${({ bcolor }) => bcolor ?? GV("border2")};
  border-radius: ${({ bradius }) => bradius ?? GV('radius-md')};
  overflow: hidden;

  /* ${ImageContainer} {
  } */
`;
