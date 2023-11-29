import React from 'react';
import { NewsCardContainer, NewsImage } from './style';

import Img from '@/assets/img/avatar1.png';
import { Flex, P, Span } from '@/components/basic';
import { Icon } from '@/components/custom';
import Image from '@/components/basic/img';
import { GV } from '@/utils/style.util';

const NewsCard = () => {
    return <NewsCardContainer>
        <Image src={Img} alt='' $style={{ h: '14.125rem' }} />
        <P $style={{ size: GV('font-size-2'), weight: GV('weight-xxl') }}>BBC host Asia verse on Decentraland th...</P>
        <P $style={{ size: GV('font-size-3') }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, entum tellus...</P>
        <Flex
            $style={{
                fDirection: "row",
                hAlign: "flex-start",
                gap: "30px",
                queries: {
                    1024: {
                        gap: '10px'
                    }
                }
            }}
        >
            <Span $style={{ size: GV('font-size-6') }}>2mins Read</Span>
            <Flex
                $style={{
                    fDirection: "row",
                    hAlign: "center",
                    gap: "8px",
                }}
            >
                <Icon icon="HeartBrown" />
                <Span $style={{ size: GV('font-size-6') }}>28</Span>
            </Flex>
            <Flex
                $style={{
                    fDirection: "row",
                    hAlign: "center",
                    gap: "8px",
                }}
            >
                <Icon icon="Share" />
                <Span $style={{ size: GV('font-size-6') }}>72</Span>
            </Flex>
            <Icon icon="Bookmark" />
        </Flex>
    </NewsCardContainer>
}

export default NewsCard;