import React from "react";
import { Dot, ListContainer, StyledListItem, StyledListItemPropsType, StyledListPropsType } from "./style";

type ListPropsType = StyledListPropsType & {
    children: any
}

type ListItemPropsType = {
    children: any
    color?: string
    $style?: StyledListItemPropsType
    hideDot?: boolean
}

const List: React.FC<ListPropsType> = ({
    children,
    ...rest
}) => {
    return (
        <ListContainer {...rest}>
            {children}
        </ListContainer>
    )
}

export const ListItem: React.FC<ListItemPropsType> = ({
    children,
    color,
    $style,
    hideDot
}) => {
    return (
        <StyledListItem {...$style}>
            {hideDot ? null : <Dot color={color} />}
            {children}
        </StyledListItem>
    )
}

export default List;
