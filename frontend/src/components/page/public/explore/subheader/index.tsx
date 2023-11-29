import React from 'react';
import { SubHeaderContainer, ItemContainer, TabButton, TabGroup, DropdownContainer, DropdownItem } from './style';
import { Flex, Heading, P } from '@/components/basic';
import { Dropdown, Icon, Input } from '@/components/custom';

type SubHeaderType = {
    rightComponent?: React.ReactNode
    title?: string | React.ReactNode
    description?: string
    tabList?: object[]
    isNFT?: boolean
    isSearch?: boolean
}

const SubHeader: React.FC<SubHeaderType> = ({ rightComponent, title, description, tabList, isNFT, isSearch }) => {
    const [tabIndex, setTabIndex] = React.useState(1);
    const [keyword, setKeyword] = React.useState('');
    return <>
        <SubHeaderContainer>
            <Flex $style={{ fDirection: 'column', vAlign: 'flex-start', gap: '18px' }}>
                <Heading level={1} $style={{ weight: '500' }}>{title}</Heading>
                <Flex $style={{ maxW: '400px' }}>
                    <P>{description ?? ''}</P>
                </Flex>
            </Flex>
            {rightComponent}
        </SubHeaderContainer>
        {isSearch
        ?
        <Flex $style={{ fDirection: 'column', gap: '32px' }}>
            <Flex $style={{ vAlign: 'center', p: '24px 35px', gap: '20px' }}>
                <ItemContainer>
                    <Dropdown initialLabel='Filter' hideIcon customIcon={<Icon icon='Filter' />} />
                </ItemContainer>
                <Flex $style={{ flex: '1' }}>
                    <Input value={keyword} placeholder={isNFT ? 'Search NFTs' : 'Search Metaverse'} padding='6px 12px' helpSide={<Icon icon='Search' />} onChange={(e: any) => setKeyword(e.target.value)} />
                </Flex>
                <ItemContainer>
                    <Dropdown initialLabel={isNFT ? 'Trending' : 'Newly Listed'} container={() => (
                    <DropdownContainer>
                        <DropdownItem>Item</DropdownItem>
                        <DropdownItem>Item</DropdownItem>
                    </DropdownContainer>
                )} />
                </ItemContainer>
            </Flex>
            <TabGroup>
                {tabList?.map((p: any, i: number) => <TabButton isSelected={(i+1) === tabIndex} onClick={() => setTabIndex(i + 1)}>{p.name}</TabButton>)}
                {!isNFT && <TabButton isSelected={false}><Dropdown initialLabel='More' container={() => (
                    <DropdownContainer>
                        <DropdownItem>Item</DropdownItem>
                        <DropdownItem>Item</DropdownItem>
                    </DropdownContainer>
                )} /></TabButton>}
            </TabGroup>
        </Flex>
        : ''}
    </>
}

export default SubHeader;