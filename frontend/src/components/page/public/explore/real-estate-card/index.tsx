import React from 'react';
import { CardContainer, CardLine, CustomFont, ImageLoader } from './style';

import Img from '@/assets/img/avatar1.png';
import { Flex, List, ListItem, P } from '@/components/basic';
import Image from '@/components/basic/img';
import { GV } from '@/utils/style.util';

const RealEstateCard = () => {
    return <>
        <CardContainer>
            <Image src={Img} alt='' $style={{ h: '14.125rem' }} />
            <Flex $style={{ fDirection: 'column', gap: '8px', w: '100%' }}>
                <P $style={{ size: GV('font-size-3'), weight: GV('weight-xl') }}>Single Family Residential</P>
                <CardLine />
                <List dir='column'>
                    <ListItem color='#B4B4B4'><CustomFont>Built in 1989</CustomFont></ListItem>
                    <ListItem color='#B4B4B4'><CustomFont>Electric, heat pump</CustomFont></ListItem>
                    <ListItem color='#B4B4B4'><CustomFont>Central air</CustomFont></ListItem>
                    <ListItem color='#B4B4B4'><CustomFont>2 garage spaces</CustomFont></ListItem>
                    <ListItem color='#B4B4B4'><CustomFont>9,466sqft</CustomFont></ListItem>
                    <ListItem color='#B4B4B4'><CustomFont>2% buyers agency fee</CustomFont></ListItem>
                </List>
                <CardLine />
                <Flex $style={{ fDirection: 'column' }}>
                    <P $style={{ size: GV('font-size-2'), weight: GV('weight-lg') }}>$197</P>
                    <CustomFont>price/sqft</CustomFont>
                </Flex>
            </Flex>
        </CardContainer>
    </>
}

export default RealEstateCard;