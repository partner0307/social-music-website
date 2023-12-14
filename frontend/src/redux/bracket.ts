import { createSlice } from '@reduxjs/toolkit';

interface InitialStateType {
    visible: boolean,
    brackets: any,
    bracket: any,
}

const initialState: InitialStateType = {
    visible: false,
    brackets: [],
    bracket: null,
}

const bracketSlice = createSlice({
    name: 'bracket',
    initialState,
    reducers: {
        setVisible: (state, action) => {
            state.visible = action.payload;
            state.bracket = null;
        },
        getBrackets: (state, action) => {
            state.brackets = state.brackets.concat(action.payload);
            state.visible = false;
            state.bracket = null;
        },
        editBracket: (state, action) => {
            state.bracket = action.payload;
            state.visible = true;
        },
        saveBracket: (state, action) => {
            state.brackets = state.bracket ? state.brackets.map((p: any) => p._id === action.payload._id ? action.payload : p) : [action.payload, ...state.brackets];
            state.bracket = null;
            state.visible = false;
        },
        removeBracket: (state, action) => {
            state.brackets = state.brackets.filter((p: any) => p._id !== action.payload);
        },
        refreshBrackets: (state) => {
            state.bracket = null;
            state.brackets = [];
            state.visible = false;
        }
    }
});

export const bracketReducer = bracketSlice.reducer;
export const bracketActions = bracketSlice.actions;