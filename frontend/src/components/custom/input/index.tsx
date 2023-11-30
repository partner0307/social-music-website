import React from "react";
import { InputBoard, InputContainer, InputContent, InputLabel, InputWrapper, StyledInput, StyledTextarea } from "./style";
import { Flex } from "@/components/basic";

type InputPropsType = {
    label?: string | React.ReactNode
    type?: string
    value: string
    onChange?: any
    placeholder?: string
    helpSide?: any,
    preSide?: any,
    padding?: string,
    radius?: string,
    bg?: string,
    border?: string,
    name?: string,
    gap?: string
}

export const Input: React.FC<InputPropsType> = ({
    label,
    helpSide,
    preSide,
    padding,
    radius,
    bg,
    border,
    gap,
    ...rest
}) => {
    return (
        <InputContainer>
            {label && (<InputLabel>{label}</InputLabel>)}
            <InputContent>
                <InputWrapper padding={padding ?? ''}>
                    <Flex $style={{ gap: gap ?? '1rem', w: '100%' }}>
                        {preSide}
                        <StyledInput {...rest} />
                    </Flex>
                    {helpSide}
                </InputWrapper>
                <InputBoard radius={radius ?? ''} bg={bg ?? ''} border={border ?? ''} />
            </InputContent>
        </InputContainer>
    )
}

type TextareaPropsType = InputPropsType & {
    rows?: number
}

export const Textarea: React.FC<TextareaPropsType> = ({
    label,
    helpSide,
    rows,
    radius,
    ...rest
}) => {
    return (
        <InputContainer>
            {label && (<InputLabel>{label}</InputLabel>)}
            <InputContent>
                <InputWrapper padding="">
                    <StyledTextarea as="textarea" rows={rows ? rows : 5} {...rest} />
                    {helpSide}
                </InputWrapper>
                <InputBoard radius='' bg='' border="" />
            </InputContent>
        </InputContainer>
    )
}
