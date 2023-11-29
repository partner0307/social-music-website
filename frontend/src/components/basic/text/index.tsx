import React, { FC, forwardRef } from "react";
import { SpanWrapper, TextPropsType, TextWrapper } from "./style";

interface SpanPropsType {
    children?: any
    $style?: TextPropsType
    [key: string]: any
}

interface PPropsType {
    children?: any
    $style?: TextPropsType
    [key: string]: any
}

export const Span: FC<SpanPropsType> = forwardRef(({ children, $style, ...rest }, ref) => {
    return (
        <SpanWrapper
            {...$style}
            as={"span"}
            {...rest}
        >
            {children}
        </SpanWrapper>
    )
});

export const P: FC<PPropsType> = forwardRef(({ children, $style, ...rest }, ref) => {
    return (
        <TextWrapper
            as='p'
            {...$style}
            {...rest}
        >
            {children}
        </TextWrapper>
    )
});