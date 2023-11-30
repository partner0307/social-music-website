import { createSlice } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';

interface ModelType {
    fullName?: string,
    username?: string,
    email?: string,
    avatar?: string,
    cover?: string,
    bio?: string,
    url?: string,
    id: string,
}

interface InitialStateType {
    isAuthenticated: boolean
    user: ModelType | null,
    authVisible: number
}

const token = localStorage.getItem('token');
const initialState: InitialStateType = {
    isAuthenticated: token ? true : false,
    user: token ? jwtDecode(token) : null,
    authVisible: 0
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.isAuthenticated = action.payload.isAuthenticated;
            state.user = action.payload.isAuthenticated ? jwtDecode(action.payload.user) : null;
        },
        setAuthVisible: (state, action) => {
            state.authVisible = action.payload;
        }
    }
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;