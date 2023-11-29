import React from 'react';
import { RadioButtonInner, RadioButtonOuter, RadioContainer } from './style';

type RadioButtonPropsType = {
    label?: string | React.ReactNode
    color?: string
    isSelected?: boolean
    onClick?: any
}

const RadioButton: React.FC<RadioButtonPropsType> = ({
    label,
    color,
    isSelected,
    onClick,
    ...rest
}) => {
    return (
        <RadioContainer onClick={onClick}>
            <RadioButtonOuter isSelected={isSelected} color={color}><RadioButtonInner isSelected={isSelected} color={color} /></RadioButtonOuter>
            {label}
        </RadioContainer>
    )
}

export default RadioButton;