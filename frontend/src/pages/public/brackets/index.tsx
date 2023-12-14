import React, { useCallback, useEffect, useRef, useState } from 'react';
import { BracketsContainer, CustomButton, LoadButton } from './style'
import { Flex, Grid, P } from '@/components/basic';
import { useDispatch, useSelector } from 'react-redux';
import { bracketActions } from '@/redux/bracket';
import HostModal from '@/components/page/public/brackets/host_modal';
import BracketCard from '@/components/page/public/bracket_card';
import { getBrakets } from '@/actions/bracket';
import { Radio, RadioChangeEvent } from 'antd';

const Brackets = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: any) => state.auth);
  const { brackets, visible } = useSelector((state: any) => state.bracket);
  const [ isMyHost, setMyHost ] = useState('all');
  const [time, setTime] = useState(new Date());
  const [offset, setOffset] = useState(0);
  const isLoaded = useRef(false);

  const getBracketsFromServer = async () => {
    const result = await getBrakets({prevOffset: offset, nextOffset: offset + 12})
    if (result.success)
      dispatch(bracketActions.getBrackets(result.model));
      setOffset(offset + 12);
  };

  useEffect(() => {
    if (!isLoaded.current) {
      isLoaded.current = true;
      setOffset(0);
      getBracketsFromServer();
    }
    return () => {dispatch(bracketActions.refreshBrackets())}
  }, [isLoaded]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date()); 
    }, 60000);

    return () => clearInterval(interval);
  }, []); 


  const renderCards = useCallback(() => (
    brackets && isMyHost === 'mine'
      ? brackets.filter((item: any) => item.creator._id === user.id).map((item: any, key: number) => <BracketCard model={item}  key={key} />)
      : brackets.map((item: any, key: number) => <BracketCard model={item} key={key} />)
  ), [brackets, isMyHost]);

  const renderHostModal = useCallback(() => <HostModal />, [visible]);

  return (
    <BracketsContainer>
      <Flex $style={{
        hAlign: 'space-between',
        vAlign: 'center'
      }}>
        {user.isHost && <CustomButton onClick={() => dispatch(bracketActions.setVisible(true))}>Host</CustomButton>}
        {user.isHost && (
          <Radio.Group defaultValue="all" buttonStyle="solid" onChange={(e: RadioChangeEvent) => setMyHost(e.target.value)}>
            <Radio.Button value="all">All</Radio.Button>
            <Radio.Button value="mine">My Hosts</Radio.Button>
          </Radio.Group>
        )}
      </Flex>
      <Grid $style={{
        columns: '4',
        gap: '2rem',
        justifyItems: 'space-between',
        queries: {
          1440: {
            columns: '3'
          },
          1200: {
            columns: '2'
          },
          768: {
            columns: '1',
            justifyItems: 'center'
          }
        }
      }}>
        {renderCards()}
      </Grid>
      {brackets.length > 0 && <Flex $style={{
        hAlign: 'center',
        w: '100%'
      }}>
        <LoadButton onClick={() => getBracketsFromServer()}>Load more</LoadButton>
      </Flex>}
      {renderHostModal()}
    </BracketsContainer>
  )
}

export default Brackets;