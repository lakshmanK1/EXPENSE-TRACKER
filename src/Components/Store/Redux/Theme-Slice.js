import {createSlice} from '@reduxjs/toolkit'

const initialThemeState = {theme:false};

const ThemeSlice = createSlice({
    name:'theme',
    initialState:{initialThemeState},
    reducers:{
        Theme : (state) => {
            state.theme = !state.theme;
        }
    }
});

export const ThemeActions = ThemeSlice.actions;
export default ThemeSlice.reducer;