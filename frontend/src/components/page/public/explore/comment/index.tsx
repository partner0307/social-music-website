import { Flex, P } from '@/components/basic';
import React from 'react';
import { Avatar, CommentWrapper } from './style';
import { Icon } from '@/components/custom';
import { GV } from '@/utils/style.util';

type CommentComponentType = {
    image?: string
    name?: string
    date?: string
    content?: string
    like_count?: string
    unlike_count?: string
    reply_count?: string
}

const CommentComponent: React.FC<CommentComponentType> = ({ image, name, date, content, like_count, unlike_count, reply_count }) => {
    return <CommentWrapper>
        <Flex $style={{ hAlign: 'flex-start', gap: '12px' }}>
            <Avatar src={image} />
            <Flex $style={{ fDirection: 'column', gap: '16px' }}>
                <Flex $style={{ vAlign: 'center', gap: '8px' }}>
                    <P $style={{ size: GV('font-size-3'), weight: GV('weight-lg') }}>{name}</P>
                    <P>{date}</P>
                </Flex>
                <P>{content}</P>
                <Flex $style={{ vAlign: 'center', gap: '32px' }}>
                    <Flex $style={{ vAlign: 'center', gap: '4px' }}>
                        <Icon icon='Like' />
                        <P>{like_count}</P>
                    </Flex>
                    <Flex $style={{ vAlign: 'center', gap: '4px' }}>
                        <Icon icon='Unlike' />
                        <P>{unlike_count}</P>
                    </Flex>
                    <P>Reply</P>
                </Flex>
                <Flex $style={{ vAlign: 'center', gap: '8px' }}>
                    <Icon icon='Message' />
                    <P $style={{ color: 'blue' }}>View replies ({reply_count})</P>
                </Flex>
            </Flex>
            <Flex $style={{ vAlign: 'flex-start' }}>
                <Icon icon='EclipseMenu' />
            </Flex>
        </Flex>
    </CommentWrapper>
}

export default CommentComponent;