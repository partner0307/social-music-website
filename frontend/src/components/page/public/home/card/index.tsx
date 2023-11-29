import React from 'react';
import { Avatar, CardContainer, CardMark, Category, ProfileButton, ReviewContainer } from './style';
import { Flex, P, Span } from '@/components/basic';
import {Icon} from '@/components/custom';
import { GV } from '@/utils/style.util';

type CardType = {
    rate?: string,
    avatar?: string,
    name?: string,
    job?: string,
    star?: string,
    like?: string,
    count?: string,
    category?: any[]
}

const Card: React.FC<CardType> = ({ rate, avatar, name, job, star, like, count, category }) => {
    return <CardContainer>
        <CardMark>{rate}</CardMark>
        <Flex $style={{
            fDirection: 'column',
            gap: '24px'
        }}>
            <Flex $style={{
                fDirection: 'row',
                hAlign: 'center',
            }}>
                <Avatar src={avatar} />
            </Flex>
            <Flex $style={{
                fDirection: 'column',
                vAlign: 'center',
                gap: '8px'
            }}>
                <P $style={{ size: GV('font-size-3'), weight: GV('weight-lg') }}>{name}</P>
                <P>{job}</P>
                <Flex $style={{
                    fDirection: 'row',
                    hAlign: 'space-between',
                    gap: '12px'
                }}>
                    <ReviewContainer>
                        <Flex $style={{
                            fDirection: 'row',
                            hAlign: 'space-between',
                            gap: '4px'
                        }}>
                            <Icon icon='Star' />
                            <Span>{star}</Span>
                        </Flex>
                        <Flex $style={{
                            fDirection: 'row',
                            hAlign: 'space-between',
                            gap: '4px'
                        }}>
                            <Icon icon='Smile' />
                            <Span>{like}</Span>
                        </Flex>
                    </ReviewContainer>
                    <Flex $style={{
                        fDirection: 'row',
                        p: '4px 8px',
                        gap: '4px'
                    }}>
                        <Icon icon='Calendar' />
                        <Span>{count} Jobs</Span>
                    </Flex>
                </Flex>
            </Flex>
            <Flex $style={{
                fDirection: 'row',
                hAlign: 'center',
                vAlign: 'flex-start',
                gap: '8px',
                fWrap: 'wrap'
            }}>
                {category?.map(p => <Category>{p}</Category>)}
            </Flex>
            <ProfileButton>
                View Profile
            </ProfileButton>
        </Flex>
    </CardContainer>
}

export default Card;