import React from "react";
import { RouterProvider } from "react-router-dom";
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'
import routers from "./routes";
import { GoogleOAuthProvider } from '@react-oauth/google';

gsap.registerPlugin(ScrollTrigger)


const App: React.FC = () => {
    return (
        <React.Fragment>
            <GoogleOAuthProvider clientId="468012887156-o2r7g3ehe6i5q91f9ahv48j6dm3a6oer.apps.googleusercontent.com">
                <RouterProvider router={routers} />
            </GoogleOAuthProvider>
        </React.Fragment>
    )
}

export default App;
