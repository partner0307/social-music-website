import { GV } from '@/utils/style.util';
import styled from 'styled-components';

export interface InlineImagePropsType {
  w?: string;
  h?: string;
  bradius?: string;
}

type QueryType = { [key: string]: InlineImagePropsType };

export interface StyledFlexPropsType extends InlineImagePropsType {
  queries?: QueryType;
}

const setStyle = ({ w, h, bradius }: InlineImagePropsType) => {
  return `
    width: ${w ?? `100%`};
    height: ${h ?? `auto`};
    border-radius: ${bradius ?? GV('radius-md')};
	`;
};

export const ImageContainer = styled.div<{ $style: StyledFlexPropsType }>`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  overflow: hidden;

  ${({ $style }) => {
    const { queries, ...rest } = $style;
    return `
      ${setStyle(rest)}
      ${
        queries
          ? Object.keys(queries)
              .reverse()
              ?.map((breakpoint: string) => {
                return `@media (max-width: ${breakpoint}px) {
                ${setStyle(queries[breakpoint])}
              }`;
              })
              .join('')
          : ``
      }
    `;
  }}
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
