import { ReactNode, FC, forwardRef } from "react";
import { CardContainer, CardContainerPropsInterface } from "./style";

export interface CardPropsInterface extends CardContainerPropsInterface {
    children: ReactNode
}

const Card = forwardRef<HTMLDivElement, CardPropsInterface>(function Card({ children, ...rest }, ref) {
    return (
        <CardContainer ref={ref} {...rest}>
            {children}
        </CardContainer>
    )
})

export default Card;
