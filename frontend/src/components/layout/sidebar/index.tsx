import { Flex, Link, P } from '@/components/basic';
import _ROUTERS from '@/constants/route.constant';
import {
  ListItem,
  ListItemContainer,
  NestedHand,
  NestedItem,
  NestedItemList,
  SidebarContainer,
  SidebarWrapper,
} from './style';
import { MenuData } from '@/constants/menu.constant';
import Image from '@/components/basic/img';
import Logo from '@/assets/img/logo.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { notification } from 'antd';
import { GV } from '@/utils/style.util';

const Sidebar = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state: any) => state.auth);
  const { hash, pathname, search } = useLocation();

  const handleRoute = (router: string) => {
    if (isAuthenticated) {
      if (router.includes('username')) {
        navigate(`/u/${user.username}`);
      } else {
        navigate(router);
      }
    } else if (router !== '/' && !isAuthenticated) {
      notification.warning({ message: 'Warning', description: 'Please login!' });
    } else if (router === '/' && !isAuthenticated) {
      navigate(router);
    }
  };

  return (
    <SidebarContainer>
      <SidebarWrapper>
        <Flex
          $style={{
            hAlign: 'center',
            vAlign: 'center',
          }}
        >
          <Link to="/">
            <Image
              src={Logo}
              alt="No Logo"
              $style={{
                w: '10rem',
                h: '3rem',
                bradius: '0',
              }}
            />
          </Link>
        </Flex>
        <Flex
          $style={{
            fDirection: 'column',
            gap: '0.75rem',
            p: '1.5rem 0.5rem 0.5rem',
          }}
        >
          {MenuData.map((data: any, key: number) => {
            if (data.router === '/' || isAuthenticated) {
              return (
                <ListItemContainer key={key}>
                  {!data.submenus ? (
                    <ListItem
                      isActive={
                        pathname === data.router ||
                        (data.router !== '/' && pathname.includes('/u/'))
                      }
                      onClick={() => handleRoute(data.router)}
                    >
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
        </Flex>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
