import { createBrowserRouter } from 'react-router-dom';
import { Flex, Heading } from '@/components/basic';

import _ROUTERS from '@/constants/route.constant';

import PublicPage from '@/pages/public';
import HomePage from '@/pages/public/home';
import ProfilePage from '@/pages/public/profile';
import { Link } from 'react-router-dom';

const routers = createBrowserRouter([
  {
    path: '/',
    element: <PublicPage />,
    children: [
      {
        path: _ROUTERS._HOME,
        element: <HomePage />,
      },
      {
        path: _ROUTERS._PROFILE,
        element: <ProfilePage />,
      },
      {
        path: '*',
        element: <HomePage />,
      },
    ],
  },
  {
    path: '/404',
    element: (
      <Flex
        $style={{
          hAlign: 'center',
          p: '300px 0 0',
        }}
      >
        <Flex
          $style={{
            fDirection: 'column',
            vAlign: 'center',
            gap: '1rem',
          }}
        >
          <Heading level={1}>Not found page</Heading>
          <Link to="/">&lt;- Go back</Link>
        </Flex>
      </Flex>
    ),
  },
]);

export default routers;
