import { createBrowserRouter } from "react-router-dom";
import { Flex, Heading } from "@/components/basic";

import _ROUTERS from "@/constants/route.constant";

import PublicPage from "@/pages/public";
import HomePage from "@/pages/public/home";
import ProfilePage from "@/pages/public/profile";

const routers = createBrowserRouter([
    {
        path: "/",
        element: <PublicPage />,
        children: [
            {
                path: _ROUTERS._HOME,
                element: <HomePage />
            },
            {
                path: _ROUTERS._PROFILE,
                element: <ProfilePage />
            },
            {
                path: "*",
                element: <HomePage />
            },
        ],
    },
    {
        path: "*",
        element: (
            <Flex $style={{
                hAlign: "center",
                p: "300px 0 0"
            }}>
                <Heading level={1}>404 Not found page</Heading>
            </Flex>
        )
    }
])

export default routers;
