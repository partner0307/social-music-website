import React from "react";
import { StyledButton, StyledButtonType } from "./style";

interface ButtonType {
    children: any
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
    disabled?: boolean
    to?: string
    $style?: StyledButtonType
}

const Button: React.FC<ButtonType> = ({
    children,
    $style,
    ...rest
}) => {
    return (
        <StyledButton
            {...$style}
            {...rest}
        >
            {children}
        </StyledButton>
    )
}

export default Button;
