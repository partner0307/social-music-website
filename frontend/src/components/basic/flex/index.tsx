import { FC, forwardRef } from "react";
import { FlexChildContainer, FlexContainer, StyledFlexChildPropsType, StyledFlexPropsType } from "./style";

interface FlexPropsType {
    children?: any
    $style?: StyledFlexPropsType
    [key: string]: any
}

const Flex = forwardRef<HTMLDivElement, FlexPropsType>(({ children, $style, ...rest }, ref) => {
    return (
        <FlexContainer ref={ref} {...$style} {...rest}>
            {children}
        </FlexContainer>
    )
});

interface FlexChildPropsType extends StyledFlexChildPropsType {
    children?: any
    [key: string]: any
}

export const FlexChild: FC<FlexChildPropsType> = ({ children, ...rest }) => {
    return (
        <FlexChildContainer {...rest}>
            {children}
        </FlexChildContainer>
    )
}

export default Flex;
