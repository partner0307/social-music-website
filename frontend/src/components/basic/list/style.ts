import styled from "styled-components";
import { GV } from "@/utils/style.util";

interface InlineListPropsType {
  dir?: "column" | "row" | "row-reverse" | "column-reverse";
  vAlign?: string;
  hAlign?: string;
  gap?: string;
}

type QueryType = { [key: string]: InlineListPropsType };

export interface StyledListPropsType extends InlineListPropsType {
  queries?: QueryType;
}

const setStyle = ({ dir, vAlign, hAlign, gap }: StyledListPropsType) => {
  return `
		${dir ? `flex-direction:	${dir};` : ``}
		${vAlign ? `align-items:		${vAlign};` : ``}
		${hAlign ? `justify-content:	${hAlign};` : ``}
		${gap ? `gap:				${gap};` : ``}
	`;
};

export const ListContainer = styled.ul<StyledListPropsType>`
  display: flex;

  ${({ queries, ...rest }: StyledListPropsType) => `
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
            .join("")
        : ``
    }
	`}
`;

interface InlineListItemPropsType {
  size?: string;
  color?: string;
}

type ListItemQueryType = { [key: string]: InlineListItemPropsType };

export interface StyledListItemPropsType extends InlineListItemPropsType {
  queries?: ListItemQueryType;
}

const setListItemStyle = ({ size, color }: InlineListItemPropsType) => {
  return `
		${size ? `font-size:		${size};` : ``}
		${color ? `color:			${color};` : ``}
	`;
};

export const StyledListItem = styled.li<StyledListItemPropsType>`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  line-height: 1.5;

  &:hover {
    background-color: #600031;
  }

  ${({ queries, ...rest }: StyledListItemPropsType) => `
		${setListItemStyle(rest)}
		${
      queries
        ? Object.keys(queries)
            .reverse()
            ?.map((breakpoint: string) => {
              return `@media (max-width: ${breakpoint}px) {
							${setListItemStyle(queries[breakpoint])}
						}`;
            })
            .join("")
        : ``
    }
	`}
  
`;

export const Dot = styled.span<{ color?: string }>`
  display: inline-block;
  width: 3px;
  height: 3px;
  ${({ color }) => color ? `background: ${color};` : `background: ${GV("danger")};s`}
  border-radius: 50%;
`;
