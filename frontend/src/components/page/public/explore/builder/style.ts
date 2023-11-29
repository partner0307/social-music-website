import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const BuilderContainer = styled(Link)`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 21.6875rem;
    padding: 14px;
    border-radius: 16px;
    border: 1px solid #191919;
    background: rgba(12, 12, 12, 0.90);
    cursor: pointer;
`;

export const DescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
`;

export const BuilderImage = styled.img`
    width: 312px;
    height: 240px;
    border-radius: 16px 16px 0px 0px;
    border: 1px solid #B5B5B5;
`;

export const BuilderIcon = styled.img`
    width: 32px;
    height: 32px;
`;

export const IconContainer = styled.div`
    position: absolute;
    top: 24px;
    right: 24px;
`;

export const Content = styled.p`
    overflow: hidden;
    transition: all ease-in-out .3s;
`