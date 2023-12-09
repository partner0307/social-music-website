import React, { useEffect, useState } from 'react'
import { Flex, Span } from '@/components/basic';
import { EnterButton, FeaturedTrackContainer, ProgressContainer, ProgressLine, StepContainer, TournamentContainer } from './style'
import { GV } from '@/utils/style.util'
import { Outlet, useNavigate } from 'react-router-dom';
import _ROUTERS from '@/constants/route.constant';

const Tournament = () => {
  const navigate = useNavigate();
  const [tabIndex, setTabIndex] = useState(1);

  const onEnterBracket = () => {
    setTabIndex(tabIndex + 1);
    const router = tabIndex === 1 ? _ROUTERS._QUALIFY : tabIndex === 2 ? _ROUTERS._WINNER : _ROUTERS._TOURNAMENT;
    navigate(router);
  }

  return (
    <TournamentContainer>
      <Flex $style={{
        flex: '1',
        fDirection: 'column',
        gap: '1.5rem',
        w: '100%'
      }}>
        <Flex $style={{
          vAlign: 'center',
          gap: '2rem'
        }}>
          {tabIndex < 3 && <EnterButton onClick={() => onEnterBracket()}>{tabIndex === 1 ? 'Enter Bracket' : 'Voting in Progress'}</EnterButton>}
          <ProgressContainer>
            <ProgressLine />
            <Flex $style={{
              fDirection: 'column',
              gap: '0.5rem'
            }}>
              <Span $style={{ size: GV('font-size-6') }}>00/00/00</Span>
              <StepContainer isActive={tabIndex === 1}>1</StepContainer>
              <Span $style={{ size: GV('font-size-6'), transform: 'uppercase' }}>SUBMISSION PERIOD</Span>
            </Flex>
            <Flex $style={{
              fDirection: 'column',
              vAlign: 'center',
              gap: '0.5rem',
            }}>
              <Span $style={{ size: GV('font-size-6') }}>00/00/00</Span>
              <StepContainer isActive={tabIndex === 2}>2</StepContainer>
              <Span $style={{ size: GV('font-size-6'), transform: 'uppercase' }}>QUALIFY / VOTING</Span>
            </Flex>
            <Flex $style={{
              fDirection: 'column',
              vAlign: 'flex-end',
              gap: '0.5rem'
            }}>
              <Span $style={{ size: GV('font-size-6') }}>00/00/00</Span>
              <StepContainer isActive={tabIndex === 3}>3</StepContainer>
              <Span $style={{ size: GV('font-size-6'), transform: 'uppercase' }}>SUBMISSION PERIOD</Span>
            </Flex>
          </ProgressContainer>
        </Flex>
        <Outlet />
      </Flex>
      <FeaturedTrackContainer />
    </TournamentContainer>
  )
}

export default Tournament