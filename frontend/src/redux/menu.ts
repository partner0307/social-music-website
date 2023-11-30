import { createSlice } from '@reduxjs/toolkit';

interface InitialStateType {
    visible: boolean
}

const initialState: InitialStateType = {
    visible: false
}

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setVisible: (state, action) => {
            state.visible = action.payload
        }
    }
});

export const menuReducer = menuSlice.reducer;
export const menuActions = menuSlice.actions;