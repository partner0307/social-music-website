import { Flex, P } from '@/components/basic';
import { MenuData } from '@/constants/menu.constant';
import { Drawer, notification } from 'antd';
import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { ListItem, ListItemContainer, NestedHand, NestedItem, NestedItemList } from './style';
import { GV } from '@/utils/style.util';
import { menuActions } from '@/redux/menu';
import { authActions } from '@/redux/auth';

const authMenus = [
    {
        text: 'Sign In',
        router: '/signin'
    },
    {
        text: 'Sign Up',
        router: '/signup'
    }
]

const MenuDrawer: FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { visible } = useSelector((state: any) => state.menu);
    const { isAuthenticated, user } = useSelector((state: any) => state.auth);
    const { hash, pathname, search } = useLocation();

    const handleRoute = (router: string) => {
        if (isAuthenticated) {
            if (router.includes('profile')) {
                navigate(`/profile/${user.url}`)
            } else {
                navigate(router);
            }
        }
        if (router.includes('signin')) {
            dispatch(authActions.setAuthVisible(1));
            dispatch(menuActions.setVisible(false));
        }
        else if (router.includes('signup')) {
            dispatch(authActions.setAuthVisible(2));
            dispatch(menuActions.setVisible(false));
        }
        else if (router !== '/' && !isAuthenticated) {
            notification.warning({ message: 'Warning', description: 'Please login!' });
        }
    }
    return (
        <Drawer open={visible} placement='left' onClose={() => dispatch(menuActions.setVisible(false))} className='custom-drawer' width={300}>
            <Flex $style={{
                fDirection: 'column',
                gap: '0.75rem',
                p: '1.5rem 0.5rem 0.5rem'
            }}>
                {MenuData.map((data: any, key: number) => {
                    if (data.router === '/' || isAuthenticated) {
                        return (
                            <ListItemContainer key={key}>
                                {!data.submenus
                                ? (
                                    <ListItem isActive={(pathname === data.router) || (pathname.includes('profile') && data.router.includes('profile'))} onClick={() => handleRoute(data.router)}>
                                        <data.icon />
                                        <P>{data.text}</P>
                                    </ListItem>
                                ) : (
                                    <NestedItemList>
                                        <NestedHand>
                                            {/* <data.icon /> */}
                                            <P>{data.text}</P>
                                        </NestedHand>
                                        {data.submenus.map((nestedItem: any, key: number) => (
                                            <NestedItem key={key}>
                                                {/* <data.icon size='12' /> */}
                                                <P $style={{ size: GV('font-size-6') }}>{nestedItem.text}</P>
                                            </NestedItem>
                                        ))}
                                    </NestedItemList>
                                )}
                            </ListItemContainer>
                        );
                    }
                })}
                {!isAuthenticated && (
                    authMenus.map((p, i) => (
                        <ListItem onClick={() => handleRoute(p.router)} key={i}>
                            <P>{p.text}</P>
                        </ListItem>
                    ))
                )}
            </Flex>
        </Drawer>
  )
}

export default MenuDrawer;