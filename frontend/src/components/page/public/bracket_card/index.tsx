import React, { FC, useEffect, useMemo, useRef, useState } from 'react'
import moment from 'moment';
import Image from '@/components/basic/img';
import { ActionMenuButton, CardAction, CardActionInnerWrapper, CardContainer, CardContent, CardTitle, CardWrapper, Dropdown, DropdownItemContainer, StatusTab } from './style';
import { Flex, P, Span } from '@/components/basic';
import { UPLOAD_URI } from '@/config';
import { Link } from 'react-router-dom';
import { Icon } from '@/components/custom';
import { AiFillEdit } from "react-icons/ai";
import { BiSolidTrashAlt } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import { bracketActions } from '@/redux/bracket';

interface BracketCardType {
    model: any,
}

const BracketCard: FC<BracketCardType> = ({ model }) => {
    const dispatch = useDispatch();
    const currentDate = new Date().getTime();
    const voteDate = new Date(model.vote_date).getTime();

    const distance = voteDate - currentDate;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const dropdownRef: any = useRef(null);
    const actionButtonRef:any = useRef(null);
    const [isDropdown, setIsDropdown] = useState<boolean>(false);

    useEffect(() => {
        const windowClick = (e: any) => {
            if(isDropdown === true) {
                if (dropdownRef && dropdownRef.current !== null) {
                    if (!dropdownRef.current.contains(e.target)) {
                        setIsDropdown(false);
                    }
                }
            }
            else {
                if(actionButtonRef && actionButtonRef.current !== null){
                    if(actionButtonRef.current.contains(e.target)){
                        setIsDropdown(true)
                    }
                }
            }
        };

        window.addEventListener("click", windowClick);

        return () => window.removeEventListener("click", windowClick);
    }, [isDropdown]);

  return (
    <CardContainer>
        <Image src={UPLOAD_URI + model.banner} alt='' $style={{ w: '100%', h: '15rem', bradius: '0.5rem 0.5rem 0 0' }} />
        <CardWrapper>
            <CardContent>
                <Link to={`/${model.url}`}><CardTitle>{model.title.length > 50 ? model.title.slice(0, 50) + '...' : model.title}</CardTitle></Link>
                <Flex $style={{
                    fDirection: 'column',
                    gap: '1rem'
                }}>
                    <Flex $style={{ vAlign: 'center', gap: '4rem' }}>
                        <Flex $style={{ fDirection: 'column', gap: '0.25rem' }}>
                            <Span $style={{ size: '0.75rem' }}>Voting Begins {distance > 0 ? '(' + days + "D : " + hours + "H : "  + minutes + 'M)' : '' } </Span>
                            <Span $style={{ size: '0.75rem', weight: '700' }}>{moment(model.start_date).format('YYYY-MM-DD HH:mm:ss')}</Span>
                        </Flex>
                        <Flex $style={{ fDirection: 'column', gap: '0.25rem' }}>
                            <Span $style={{ size: '0.75rem' }}>Entry Limit</Span>
                            <Span $style={{ size: '0.75rem', weight: '700' }}>{model.max_player}</Span>
                        </Flex>
                    </Flex>
                    <Flex $style={{ vAlign: 'center', gap: '4rem' }}>
                        <Flex $style={{ fDirection: 'column', gap: '0.25rem' }}>
                            <Span $style={{ size: '0.75rem' }}>Host</Span>
                            <Span $style={{ size: '0.75rem', weight: '700' }}>{model.creator.username}</Span>
                        </Flex>
                    </Flex>
                </Flex>
            </CardContent>
            <CardAction>
                <StatusTab isOpen={currentDate < voteDate}>{ currentDate < voteDate ? 'Open' : 'Closed' }</StatusTab>
                <CardActionInnerWrapper>
                    <ActionMenuButton ref={actionButtonRef}><Icon icon='ActionMenu'/></ActionMenuButton>
                    <Dropdown isDropdown={isDropdown} ref={dropdownRef}>
                        <DropdownItemContainer onClick={() => { setIsDropdown(false); dispatch(bracketActions.editBracket(model)); }}>
                            <AiFillEdit />
                            <P>Edit</P>
                        </DropdownItemContainer>
                        <DropdownItemContainer onClick={() => { setIsDropdown(false); }}>
                            <BiSolidTrashAlt />
                            <P>Remove</P>
                        </DropdownItemContainer>
                    </Dropdown>
                </CardActionInnerWrapper>
            </CardAction>
        </CardWrapper>
    </CardContainer>
  )
}

export default BracketCard;