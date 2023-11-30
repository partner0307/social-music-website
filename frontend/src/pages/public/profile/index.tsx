import { AvatarContainer, BannerContainer, BioContainer, CustomButton, IframeContainer, ProfileContainer, StatusContainer } from './style';
import { Flex, Grid, P, Span } from '@/components/basic';
import { useLocation, useNavigate } from 'react-router-dom';
import { GV } from '@/utils/style.util';
import { UPLOAD_URI } from '@/config';
import { useEffect, useMemo, useRef, useState } from 'react';
import PostModal from '@/pages/private/post';
import { followUser, getUser } from '@/actions/user';
import { useDispatch, useSelector } from 'react-redux';
import { notification } from 'antd';
import Loading from '@/components/custom/loading';
import { authActions } from '@/redux/auth';

const ProfilePage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isAuthenticated, user } = useSelector((state: any) => state.auth);
    const { hash, pathname, search } = useLocation();
    const [visible, setVisible] = useState(false);
    const [model, setModel] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const username_by_url = pathname.split('/')[1] || null;

    useEffect(() => {
        setTimeout(async () => {
            console.log(username_by_url);   
            const result = await getUser({ url: username_by_url});
            if (result.success) {
                setModel(result.model);
                setLoading(true);
            } else {
                notification.warning({ message: 'Warning', description: 'User not found' });
                navigate('/');
            }
        }, 0);
    }, [user]);

    const onFollowToggle = async () => {
        if (!isAuthenticated) {
            dispatch(authActions.setAuthVisible(1));
        } else {
            const result = await followUser({ url: username_by_url, id: user.id });
            if (result.success) {
                localStorage.setItem('token', result.accessToken);
                notification.success({ message: 'Success', description: 'Followed Successfully' });
                dispatch(authActions.setUser({ isAuthenticated: true, user: result.accessToken }));
                setModel(result.model);
            }
        }
    }

    const { likeCounts, xpCounts, bxpCounts } = useMemo(() => {
        let likeCounts = 0, xpCounts = 0, bxpCounts = 0;
        model && model?.posts.forEach((item: any) => {
            likeCounts += item.followers.length;
            xpCounts += item.xp;
            bxpCounts += item.bxp;
        });
        return { likeCounts, xpCounts, bxpCounts };
    }, [model]);

    if (!loading) {
        return <Loading />;
    }

    return (
        <ProfileContainer>
            <BannerContainer src={UPLOAD_URI + model?.cover}>
                <Flex $style={{
                    gap: '1.5rem',
                    w: '100%',
                    queries: {
                        768: {
                            gap: '0.5rem',
                            fDirection: 'column',
                            vAlign: 'center'
                        }
                    }
                }}>
                    <AvatarContainer src={UPLOAD_URI + model?.avatar} alt='' />
                    <Flex $style={{
                        fDirection: 'column',
                        gap: '0.5rem',
                        p: '1rem 0 0'
                    }}>
                        <P $style={{
                            size: GV('font-size-3'),
                            queries: {
                                768: {
                                    align: 'center'
                                }
                            }
                        }}>{`${model?.username}`}</P>
                        <BioContainer><Span $style={{
                            size: GV('font-size-6'),
                            queries: {
                                768: {
                                    align: 'center'
                                }
                            }
                        }}>{model?.bio}</Span></BioContainer>
                    </Flex>
                </Flex>
            </BannerContainer>
            <StatusContainer>
                <Grid $style={{
                    gap: '1.5rem',
                    columns: '6',
                    queries: {
                        768: {
                            columns: '3'
                        },
                        450: {
                            columns: '2'
                        }
                    }
                }}>
                    <Flex $style={{
                        fDirection: 'column',
                        vAlign: 'center'
                    }}>
                        <Span>Followers</Span>
                        <Span>{model?.followers.length}</Span>
                    </Flex>
                    <Flex $style={{
                        fDirection: 'column',
                        vAlign: 'center'
                    }}>
                        <Span>Following</Span>
                        <Span>{model?.following.length}</Span>
                    </Flex>
                    <Flex $style={{
                        fDirection: 'column',
                        vAlign: 'center'
                    }}>
                        <Span>XP</Span>
                        <Span>{xpCounts}</Span>
                    </Flex>
                    <Flex $style={{
                        fDirection: 'column',
                        vAlign: 'center'
                    }}>
                        <Span>BXP</Span>
                        <Span>{bxpCounts}</Span>
                    </Flex>
                    <Flex $style={{
                        fDirection: 'column',
                        vAlign: 'center'
                    }}>
                        <Span>Tracks</Span>
                        <Span>{model?.posts.length}</Span>
                    </Flex>
                    <Flex $style={{
                        fDirection: 'column',
                        vAlign: 'center'
                    }}>
                        <Span>Likes</Span>
                        <Span>{likeCounts}</Span>
                    </Flex>
                </Grid>
                {(isAuthenticated && user?.url === username_by_url) && (
                    <CustomButton onClick={() => setVisible(true)}>Create Post</CustomButton>
                )}
                {(!isAuthenticated || user?.url !== username_by_url) && (
                    <CustomButton isFollowButton={true} onClick={() => onFollowToggle()} isFollowed={isAuthenticated && model && user?.following && user?.following.includes(model?._id)}>
                        {isAuthenticated && user?.following && user?.following.includes(model?._id) ? 'Followed' : 'Follow'}
                    </CustomButton>
                )}
            </StatusContainer>
            <Flex $style={{
                gap: '4rem'
            }}>
                <IframeContainer>
                    {model?.posts && model?.posts.map((item: any, key: number) => <div dangerouslySetInnerHTML={{ __html: item.code }} key={key}></div>)}
                </IframeContainer>
            </Flex>
            <PostModal visible={visible} onChange={setVisible} onPostsChange={setModel} />
        </ProfileContainer>
    )
}

export default ProfilePage;