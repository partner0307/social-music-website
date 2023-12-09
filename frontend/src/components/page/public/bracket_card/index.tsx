import React, { FC } from 'react'
import moment from 'moment';
import Image from '@/components/basic/img';
import { ActionMenuButton, CardAction, CardContainer, CardContent, CardTitle, StatusTab } from './style';
import { Flex, Span } from '@/components/basic';
import { UPLOAD_URI } from '@/config';
import { Link } from 'react-router-dom';

interface BracketCardType {
    model: any
}

const BracketCard: FC<BracketCardType> = ({ model }) => {
    const currentDate = new Date().getTime();
    const voteDate = new Date(model.vote_date).getTime();

  return (
    <CardContainer>
        <Image src={UPLOAD_URI + model.banner} alt='' $style={{ w: '100%', h: '20rem', bradius: '0.5rem 0.5rem 0 0' }} />
        <CardContent>
            <Link to={`/${model.url}`}><CardTitle>{model.title}</CardTitle></Link>
            <Flex $style={{ vAlign: 'center', gap: '2rem' }}>
                <Flex $style={{ fDirection: 'column', gap: '0.25rem' }}>
                    <Span $style={{ size: '0.75rem' }}>Submission due</Span>
                    <Span $style={{ size: '0.75rem', weight: '700' }}>{moment(model.start_date).format('YYYY-MM-DD HH:mm:ss')}</Span>
                </Flex>
                <Flex $style={{ fDirection: 'column', gap: '0.25rem' }}>
                    <Span $style={{ size: '0.75rem' }}>Entry Limit</Span>
                    <Span $style={{ size: '0.75rem', weight: '700' }}>{model.max_player}</Span>
                </Flex>
            </Flex>
            <Flex $style={{ fDirection: 'column', gap: '0.25rem' }}>
                <Span $style={{ size: '0.75rem' }}>Winners announced</Span>
                <Span $style={{ size: '0.75rem', weight: '700' }}>{moment(model.vote_date).format('YYYY-MM-DD HH:mm:ss')}</Span>
            </Flex>
        </CardContent>
        <CardAction>
            <StatusTab isOpen={currentDate < voteDate}>{ currentDate < voteDate ? 'Open' : 'Closed' }</StatusTab>
            {/* <ActionMenuButton><Icon icon='ActionMenu'/></ActionMenuButton> */}
        </CardAction>
    </CardContainer>
  )
}

export default BracketCard;