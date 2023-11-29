import React from "react";
import { CheckboxContainer, StyledCheckbox } from "./style";
import { Icon } from "@/components/custom";

type CheckboxPropsType = {
    label?: string | React.ReactNode
    width?: string
    height?: string
    isChecked?: boolean
    onChange?: any
}

const Checkbox: React.FC<CheckboxPropsType> = ({
    label,
    width,
    height,
    isChecked,
    onChange
}) => {
    return (
        <CheckboxContainer onClick={onChange} isChecked={isChecked ?? false}>
            <StyledCheckbox isChecked={isChecked ?? false} width={width ?? ''} height={height ?? ''} >
                {isChecked && <Icon icon="Check" />}
            </StyledCheckbox>
            {label && label}
        </CheckboxContainer>
    )
}

export default Checkbox;
