import { jwtDecode } from 'jwt-decode';

import { AvatarContainer, BannerContainer, BioContainer, CustomButton, ProfileContainer, StatusContainer } from './style';
import { Flex, P, Span } from '@/components/basic';
import { useLocation } from 'react-router-dom';
import { GV } from '@/utils/style.util';
import { useSelector } from 'react-redux';
import { UPLOAD_URI } from '@/config';
import { useState } from 'react';
import PostModal from '@/pages/private/post';

const ProfilePage = () => {
    const { hash, pathname, search } = useLocation();
    const username_by_url = pathname.split('/')[2] || null;
    const { user } = useSelector((state: any) => state.auth);
    const [visible, setVisible] = useState(false);

    const handleEvent = () => {
        if (user?.url === username_by_url) {
            // Create Post
            setVisible(true);
        } else {
            // Follow
        }
    }

    return (
        <ProfileContainer>
            <BannerContainer src={UPLOAD_URI + user.cover}>
                <Flex $style={{
                    gap: '1.5rem'
                }}>
                    <AvatarContainer src={UPLOAD_URI + user.avatar} alt='' />
                    <Flex $style={{
                        fDirection: 'column',
                        gap: '.5rem',
                        p: '1rem 0 0'
                    }}>
                        <P $style={{ size: GV('font-size-3') }}>{`${user.firstname} ${user.lastname}`}</P>
                        <BioContainer><Span $style={{ size: GV('font-size-6') }}>{user.bio}</Span></BioContainer>
                    </Flex>
                </Flex>
            </BannerContainer>
            <StatusContainer>
                <Flex $style={{
                    gap: '1.5rem'
                }}>
                    <Flex $style={{
                        fDirection: 'column',
                        vAlign: 'center'
                    }}>
                        <Span>Followers</Span>
                        <Span>1800</Span>
                    </Flex>
                    <Flex $style={{
                        fDirection: 'column',
                        vAlign: 'center'
                    }}>
                        <Span>Following</Span>
                        <Span>1800</Span>
                    </Flex>
                    <Flex $style={{
                        fDirection: 'column',
                        vAlign: 'center'
                    }}>
                        <Span>XP</Span>
                        <Span>15.1K</Span>
                    </Flex>
                    <Flex $style={{
                        fDirection: 'column',
                        vAlign: 'center'
                    }}>
                        <Span>BXP</Span>
                        <Span>1800</Span>
                    </Flex>
                    <Flex $style={{
                        fDirection: 'column',
                        vAlign: 'center'
                    }}>
                        <Span>Tracks</Span>
                        <Span>1800</Span>
                    </Flex>
                    <Flex $style={{
                        fDirection: 'column',
                        vAlign: 'center'
                    }}>
                        <Span>Likes</Span>
                        <Span>26K</Span>
                    </Flex>
                </Flex>
                <CustomButton onClick={() => handleEvent()}>{user?.url === username_by_url ? 'Create Post' : 'Follow'}</CustomButton>
            </StatusContainer>
            <PostModal visible={visible} onChange={setVisible} />
        </ProfileContainer>
    )
}

export default ProfilePage;