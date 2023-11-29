import React from 'react';
import { Avatar, CardContainer, IconLoader, ImageLoader } from './style';
import { Flex, P } from '@/components/basic';
import Image from '@/components/basic/img';
import { GV } from '@/utils/style.util';

type CardType = {
    title?: string,
    image?: string,
    avatar?: string,
    icon1?: string,
    icon2?: string
}

const Card: React.FC<CardType> = ({ title, image, avatar, icon1, icon2 }) => {
    return <CardContainer>
        <Image src={image || ""} alt='' $style={{ h: '12.5rem' }} />
        <Flex $style={{ hAlign: 'space-between', vAlign: 'center' }}>
            <Flex $style={{ fDirection: 'row', hAlign: 'flex-start', gap: '12px' }}>
                <Avatar>
                    <img src={avatar} alt="" />
                </Avatar>
                <P $style={{ size: GV('font-size-3'), weight: GV('weight-lg') }}>{title}</P>
            </Flex>
            <Flex>
                {icon1 && <IconLoader src={icon1} />}
                {icon2 && <IconLoader src={icon2} />}
            </Flex>
        </Flex>
    </CardContainer>
}

export default Card;