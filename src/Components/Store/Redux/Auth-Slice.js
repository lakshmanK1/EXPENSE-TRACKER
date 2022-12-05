import {createSlice} from '@reduxjs/toolkit'

const tokenData = localStorage.getItem('Token');

const initialData = {
    token: tokenData,
    isLoggedIn : !!tokenData,
}

const AuthSlice = createSlice({
    name:'auth',
    initialState:initialData,
    reducers:{
        logIn: (state, action) => {
            state.isLoggedIn = true;
            state.token = action.payload;
            localStorage.setItem('Token', state.token);
        },

        logOut: (state) => {
            state.isLoggedIn = false;
            state.token = null;
            localStorage.removeItem('Token');
        }
    }
});

export const AuthActions = AuthSlice.actions;

export default AuthSlice.reducer