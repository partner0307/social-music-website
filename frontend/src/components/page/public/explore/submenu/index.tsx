import React from 'react';
import { useLocation } from 'react-router-dom';
import { SubMenuContainer, TabButton } from './style';

const SubMenu = () => {
    const { hash, pathname, search } = useLocation();
    return <SubMenuContainer>
        <TabButton>Marketplace</TabButton>
        <TabButton isActive={pathname.toString().includes('nft')}>NFTs</TabButton>
        <TabButton isActive={!pathname.toString().includes('nft')}>Metaverse</TabButton>
        <TabButton>Hire Talents</TabButton>
        <TabButton>DApps</TabButton>
        <TabButton>Avatar</TabButton>
    </SubMenuContainer>
}

export default SubMenu;