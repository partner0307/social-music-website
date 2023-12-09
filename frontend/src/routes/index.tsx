import { createBrowserRouter } from 'react-router-dom';
import { Flex, Heading } from '@/components/basic';

import _ROUTERS from '@/constants/route.constant';

import PublicPage from '@/pages/public';
import HomePage from '@/pages/public/home';
import ProfilePage from '@/pages/public/profile';
import { Link } from 'react-router-dom';
import Brackets from '@/pages/public/brackets';
import Tournament from '@/pages/public/tournament';
import Submission from '@/components/page/public/tournament/submission';
import Qualify from '@/components/page/public/tournament/qualify';
import Winner from '@/components/page/public/tournament/winner';

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
        path: _ROUTERS._BRACKETS,
        element: <Brackets />
      },
      {
        path: _ROUTERS._TOURNAMENT,
        element: <Tournament />,
        children: [
          {
            path: _ROUTERS._TOURNAMENT,
            element: <Submission />
          },
          {
            path: _ROUTERS._QUALIFY,
            element: <Qualify />
          },
          {
            path: _ROUTERS._WINNER,
            element: <Winner />
          }
        ]
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
