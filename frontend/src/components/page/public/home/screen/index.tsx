import { FC, forwardRef } from 'react';
import { Flex, P, Span } from '@/components/basic';

import { GV } from '@/utils/style.util';
import Card from '@/components/custom/card';

import { BigCardContainer, SmallCardContainer } from './style';
import HoverableMedia from '@/components/custom/hoverable-media';

import Mana from '@/assets/img/mana.png';
import Ether from '@/assets/img/ether.png';
import GifImg from '@/assets/img/video.gif'

type SmallCardType = {
    image?: string,
    title?: string,
    price?: string,
    position?: 'left' | 'right',
    isFirst?: boolean
}

type BigCardType = {
    image?: string,
    title?: string
}

export const SmallCard: FC<SmallCardType> = ({ image, title, price, position, isFirst }) => {
    return (
        <SmallCardContainer
            w='16rem'
            transform={`perspective(23rem) rotateY(${position === 'left' ? `5deg` : `-5deg`}) translateX(${position === 'left' ? `5px` : `-5px`})`}
            position={position}
            isFirst={isFirst}
        >
            <HoverableMedia
                imageOption={{
                    alt: "Hero",
                    src: image || "",
                    $style: {
                        h: "9.3rem",
                        bradius: "1rem",
                    }
                }}
                mediaOption={{
                    src: GifImg,
                    type: "gif"
                }}
            />
            <Flex $style={{
                vAlign: 'center',
                hAlign: 'space-between',
                p: '0 8px'
            }}>
                <Span $style={{
                    weight: GV("weight-lg")
                }}>{title}</Span>
                <Span $style={{
                    color: GV('info')
                }}>{price}</Span>
            </Flex>
        </SmallCardContainer>
    )
}

export const BigCard = forwardRef<HTMLDivElement, BigCardType>(({ image, title }, ref) => {
    return (
        <BigCardContainer ref={ref}>
            {/* <img src={image} style={{height: "21.25rem"}} alt="" /> */}
            {/* <Image src={image || ""} alt="hero" h={"21.25rem"} /> */}
            <HoverableMedia
                imageOption={{
                    alt: "Hero",
                    src: image || "",
                    $style: {
                        h: "21.25rem",
                        bradius: "1rem"
                    }
                }}
                mediaOption={{
                    src: GifImg,
                    type: "gif"
                }}
            />
            {/* <Image src={GifImg} alt='' $style={{
                h: "21.25rem",
                bradius: GV("radius-md")
            }} /> */}
            <Flex $style={{
                fDirection: 'row',
                vAlign: 'center',
                hAlign: 'space-between',
                p: '0 1rem 0.5rem'
            }}>
                <Span $style={{
                    size: GV("font-size-3"),
                    weight: GV("weight-lg"),
                }}>{title}</Span>
                <Flex $style={{
                    fDirection: 'row',
                    vAlign: 'center',
                    gap: '8px'
                }}>
                    <img src={Mana} alt="" />
                    <img src={Ether} alt="" />
                </Flex>
            </Flex>
        </BigCardContainer>
    )
})