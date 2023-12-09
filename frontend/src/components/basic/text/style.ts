import styled from "styled-components";
import React from "react";

export interface InlineTextPropsType {
  color?: string;
  size?: string;
  weight?: string;
  mb?: string;
  offset?: string;
  align?: "left" | "center" | "right";
  decorator?: "overline" | "line-through" | "underline";
  transform?: "uppercase" | "lowercase" | "capitalize";
}

type QueryType = { [key: string]: Partial<InlineTextPropsType> };

export interface TextPropsType extends InlineTextPropsType {
  queries?: QueryType;
}

const setStyle = ({
  color,
  size,
  weight,
  mb,
  offset,
  align,
  decorator,
  transform
}: Partial<InlineTextPropsType>) => {
  return `
		${color ? `color:					var(--${color});` : ``}
		${size ? `font-size:				${size};` : ``}
		${weight ? `font-weight:				${weight};` : ``}
		${mb ? `margin-bottom:			${mb};` : ``}
		${align ? `text-align:				${align};` : ``}
		${offset ? `text-underline-offset:	${offset};` : ``}
		${decorator ? `text-decoration:			${decorator};` : ``}
    ${transform ? `text-transform:   ${transform}` : ``}
	`;
};

export const TextWrapper = styled.p<TextPropsType>`
  line-height: 1.5;

  ${({ queries, ...rest }: TextPropsType) => `
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

export const SpanWrapper = styled(TextWrapper)`
  display: inline-block;
`;
