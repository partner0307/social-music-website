import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { SERVER_URI, OAUTH_CONFIG } from '@/config';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

export const register = async (payload: any) => {
    const response = await axios.post(`${SERVER_URI}/auth/signup`, { ...payload })
    .then(res => res.data);

    return response;
}

export const login = async (payload: any) => {
    const response = await axios.post(`${SERVER_URI}/auth/signin`, { ...payload })
    .then(res => res.data);

    return response;
}

export const google_oauth = async () => {
    const app = initializeApp(OAUTH_CONFIG);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const google_result: any = await signInWithPopup(auth, provider);
    const token: any = jwtDecode(google_result.user.accessToken);
    const firstname = token.name.split(' ')[0];
    const lastname = token.name.split(' ')[1];

    const payload = { email: google_result.user.email, displayName: google_result.user.displayName, firstname, lastname };
    const result = await axios.post(`${SERVER_URI}/auth/oauth`, { ...payload })
    .then(res => res.data);
    
    return result;
}