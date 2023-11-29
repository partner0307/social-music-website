import React from 'react';
import { EcommerCardContainer, IconBar, Line } from './style';
import Image from '@/components/basic/img';

import Shoes from '@/assets/img/shoes.png';
import { Icon } from '@/components/custom';
import { Flex, P, Span } from '@/components/basic';
import { GV } from '@/utils/style.util';

type EcommerceCardType = {
    title?: string
    description?: string
    reduce_price?: string
    current_price?: string
    rate?: number
    visitors?: number
}

const EcommerceCard: React.FC<EcommerceCardType> = ({ title, description, reduce_price, current_price, rate, visitors }) => {
    return (
        <EcommerCardContainer>
            <Image src={Shoes} alt='' />
            <IconBar>
                <Icon icon='Share' />
                <Icon icon='Bookmark' />
                <Icon icon='ShopCart' />
            </IconBar>
            <Flex $style={{ fDirection: 'column', gap: '0.5rem', maxW: '16rem' }}>
                <P $style={{ size: GV('font-size-3'), weight: GV('weight-xl') }}>{title}</P>
                <P $style={{ size: GV('font-size') }}>{description}</P>
                <Flex $style={{ hAlign: 'space-between' }}>
                    <Flex $style={{ vAlign: 'center' }}>
                        <P $style={{ decorator: 'line-through', weight: GV('weight-lg'), size: GV('font-size-3') }}>{reduce_price}</P>
                        <P $style={{ size: GV('font-size-2'), weight: GV('weight-lg'), color: 'blue' }}>{current_price}</P>
                    </Flex>
                    <Flex $style={{ vAlign: 'center', gap: '0.5rem' }}>
                        <Flex $style={{ vAlign: 'center', gap: '0.25rem' }}>
                            <Icon icon='Star' />
                            <Span>{rate}</Span>
                        </Flex>
                        <Line />
                        <Span>{visitors}</Span>
                    </Flex>
                </Flex>
            </Flex>
        </EcommerCardContainer>
    )
}

export default EcommerceCard;