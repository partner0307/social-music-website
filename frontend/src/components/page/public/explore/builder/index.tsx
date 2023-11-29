import React from 'react';
import { BuilderContainer, BuilderIcon, BuilderImage, Content, DescriptionWrapper, IconContainer } from './style';
import { Flex, P } from '../../../../basic';
import { Icon } from '../../../../custom';
import Image from '@/components/basic/img';
import { GV } from '@/utils/style.util';

type BuilderType = {
    to?: string
    image?: string,
    icon?: string,
    title?: string,
}

const Builder: React.FC<BuilderType> = ({ to, image, icon, title }) => {
    const ContentRef = React.useRef<HTMLParagraphElement>(null);

    const mouseEnterHandler = () => {
        if (ContentRef.current) {
            ContentRef.current.style.height = ContentRef.current.scrollHeight + "px";
        }
    }

    const mouseLeaveHandler = () => {
        if (ContentRef.current) {
            ContentRef.current.style.height = "0px";
        }
    }

    React.useEffect(() => {
        mouseLeaveHandler();
    }, [])

    return (
        <BuilderContainer to={to || ""} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
            <Flex $style={{ fDirection: 'column', h: "100%", gap: "0.5rem" }}>
                <Image src={image || ""} alt='' $style={{ bradius: '1rem 1rem 0 0', h: '100%' }} />
                <DescriptionWrapper>
                    <Flex $style={{ fDirection: 'row', vAlign: 'center', gap: '18px' }}>
                        <BuilderIcon src={icon} />
                        <P $style={{ size: GV('font-size-2'), weight: GV('weight-lg') }}>{title}</P>
                    </Flex>
                    <Content ref={ContentRef}>
                        With Metaverse Estates, you have the power to design, customize, and inhabit your dream home in the metaverse. Want a castle in the clouds or a beachfront villa surrounded by digital waves....
                    </Content>
                </DescriptionWrapper>
            </Flex>
            <IconContainer><Icon icon='Zoom' /></IconContainer>
        </BuilderContainer>
    )
}

export default Builder;