import React, { useState } from 'react';
import { TimeBarContainer, TimeSelector } from './style';
import { Icon } from '@/components/custom';
import { Flex, Span } from '@/components/basic';

const TimeBar = () => {
    const [time, setTime] = useState('1h');
    return <TimeBarContainer>
        <Flex onClick={() => setTime('1h')}>
            <Icon icon='Refresh' />
        </Flex>
        <Flex $style={{ fDirection: 'row', gap: '8px' }}>
            <TimeSelector isSelect={time === '1m'} onClick={() => setTime('1m')}><Span>1m</Span></TimeSelector>
            <TimeSelector isSelect={time === '5m'} onClick={() => setTime('5m')}><Span>5m</Span></TimeSelector>
            <TimeSelector isSelect={time === '15m'} onClick={() => setTime('15m')}><Span>15m</Span></TimeSelector>
            <TimeSelector isSelect={time === '30m'} onClick={() => setTime('30m')}><Span>30m</Span></TimeSelector>
            <TimeSelector isSelect={time === '1h'} onClick={() => setTime('1h')}><Span>1h</Span></TimeSelector>
            <TimeSelector isSelect={time === '12h'} onClick={() => setTime('12h')}><Span>12h</Span></TimeSelector>
            <TimeSelector isSelect={time === '1d'} onClick={() => setTime('1d')}><Span>1d</Span></TimeSelector>
        </Flex>
        <Flex $style={{ fDirection: 'row', gap: '8px' }}>
            <TimeSelector isSelect={time === '7d'} onClick={() => setTime('7d')}><Span>7d</Span></TimeSelector>
            <TimeSelector isSelect={time === '14d'} onClick={() => setTime('14d')}><Span>14d</Span></TimeSelector>
            <TimeSelector isSelect={time === '30d'} onClick={() => setTime('30d')}><Span>30d</Span></TimeSelector>
        </Flex>
    </TimeBarContainer>
}

export default TimeBar