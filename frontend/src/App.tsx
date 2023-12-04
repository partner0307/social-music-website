import React from "react";
import { RouterProvider } from "react-router-dom";
import routers from "./routes";
import { GoogleOAuthProvider } from '@react-oauth/google';

// 468012887156-o2r7g3ehe6i5q91f9ahv48j6dm3a6oer.apps.googleusercontent.com

const App: React.FC = () => {
    return (
        <React.Fragment>
            <GoogleOAuthProvider clientId="150424467021-p9utredk10e35u640vf913gcig5hegoj.apps.googleusercontent.com">
                <RouterProvider router={routers} />
            </GoogleOAuthProvider>
        </React.Fragment>
    )
}

export default App;
